import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { ServerContext } from '../../server/context.js';
import { PROMPT_SPECS, type PromptSpec } from './prompt-specs.js';
import { logger } from '../../utils/logger.js';

/** Render a spec into a single guiding instruction message. */
function renderPromptText(spec: PromptSpec, ctx: ServerContext, context?: string): string {
  const d = ctx.config.defaults;
  return [
    `# ${spec.title}`,
    '',
    spec.description,
    '',
    context ? `## Provided context\n${context}\n` : '',
    '## Required inputs',
    ...spec.requiredInputs.map((i) => `- ${i}`),
    '',
    '## Optional inputs',
    ...spec.optionalInputs.map((i) => `- ${i}`),
    '',
    '## How to proceed',
    '1. Derive the business context from the inputs. If a required input is missing, ask for it or',
    '   return `status: insufficient_data` with the missing items and why they matter.',
    '2. Do not request personal data that is not needed for the task.',
    '3. Clearly separate facts, data, benchmarks, assumptions, hypotheses and recommendations.',
    `4. Make locale (${d.locale}), currency (${d.currency}), timezone (${d.timezone}) and any date`,
    '   ranges and attribution windows explicit.',
    '5. Use these relevant skills as your methodology:',
    ...spec.relevantSkills.map((s) => `   - marketing://skills/${s}`),
    '',
    '## Required output structure',
    ...spec.outputStructure.map((s) => `- ${s}`),
    '',
    '## Approval & safety',
    `- ${spec.approvalNotes}`,
    '- Never guarantee rankings, traffic, leads, revenue or conversions.',
    '- End with a clear "Next recommended action" and flag any action that needs human approval.',
  ]
    .filter((line) => line !== '')
    .join('\n');
}

/** Register all reusable marketing prompts. */
export function registerPrompts(server: McpServer, ctx: ServerContext): void {
  for (const spec of PROMPT_SPECS) {
    server.registerPrompt(
      spec.name,
      {
        title: spec.title,
        description: spec.description,
        argsSchema: {
          context: z
            .string()
            .optional()
            .describe('Optional free-text business context to seed the task.'),
        },
      },
      ({ context }) => ({
        messages: [
          {
            role: 'user',
            content: { type: 'text', text: renderPromptText(spec, ctx, context) },
          },
        ],
      }),
    );
  }
  logger.info('MCP prompts registered', { count: PROMPT_SPECS.length });
}
