import { promises as fs } from 'node:fs';
import path from 'node:path';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { ServerContext } from '../../server/context.js';
import { logger } from '../../utils/logger.js';

/**
 * Register MCP resources. Resources are read-only, versioned and clearly
 * described. Sensitive customer data is never exposed as a general resource.
 *
 * URI patterns:
 *   marketing://skills/catalogue
 *   marketing://skills/{id}
 *   marketing://industries/{industry}/playbook
 *   marketing://workflows/catalogue
 *   marketing://workflows/{id}
 *   marketing://metrics/catalogue
 *   marketing://channels/catalogue
 *   marketing://funnel-stages
 */
export function registerResources(server: McpServer, ctx: ServerContext): void {
  // Skill catalogue (static).
  server.registerResource(
    'skill-catalogue',
    'marketing://skills/catalogue',
    {
      title: 'Marketing skill catalogue',
      description: 'Index of all available marketing skills with their metadata.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(
            ctx.skills.all().map((s) => ({
              id: s.metadata.id,
              name: s.metadata.name,
              category: s.categoryDir,
              description: s.metadata.description,
              risk_level: s.metadata.risk_level,
              execution_mode: s.metadata.execution_mode,
              human_approval_required: s.metadata.human_approval_required,
              industries: s.metadata.industries,
              funnel_stages: s.metadata.funnel_stages,
            })),
            null,
            2,
          ),
        },
      ],
    }),
  );

  // Individual skill (template).
  server.registerResource(
    'skill',
    new ResourceTemplate('marketing://skills/{id}', { list: undefined }),
    {
      title: 'Marketing skill',
      description: 'Full content of a single marketing skill (methodology, checklists, examples).',
      mimeType: 'text/markdown',
    },
    async (uri, variables) => {
      const id = String(variables.id);
      const skill = ctx.skills.get(id);
      if (!skill) {
        return {
          contents: [
            { uri: uri.href, mimeType: 'text/plain', text: `Skill not found: ${id}` },
          ],
        };
      }
      const frontMatter = `# ${skill.metadata.name}\n\n> ${skill.metadata.description}\n\n`;
      return {
        contents: [
          { uri: uri.href, mimeType: 'text/markdown', text: frontMatter + skill.body },
        ],
      };
    },
  );

  // Workflow catalogue (static).
  server.registerResource(
    'workflow-catalogue',
    'marketing://workflows/catalogue',
    {
      title: 'Workflow catalogue',
      description: 'Index of available multi-step marketing workflows.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(
            ctx.workflows.all().map((w) => ({
              id: w.id,
              name: w.name,
              objective: w.objective,
              steps: w.steps.length,
            })),
            null,
            2,
          ),
        },
      ],
    }),
  );

  // Individual workflow (template).
  server.registerResource(
    'workflow',
    new ResourceTemplate('marketing://workflows/{id}', { list: undefined }),
    {
      title: 'Marketing workflow',
      description: 'A multi-step marketing workflow definition and its execution plan.',
      mimeType: 'application/json',
    },
    async (uri, variables) => {
      const id = String(variables.id);
      const wf = ctx.workflows.get(id);
      const plan = ctx.workflows.plan(id);
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
            text: wf ? JSON.stringify({ definition: wf, plan }, null, 2) : `Workflow not found: ${id}`,
          },
        ],
      };
    },
  );

  // Config-backed catalogues (metrics, channels, funnel stages).
  const configResources: Array<{ name: string; uri: string; file: string; title: string }> = [
    {
      name: 'metrics-catalogue',
      uri: 'marketing://metrics/catalogue',
      file: 'metrics-catalogue.yaml',
      title: 'Marketing metrics catalogue',
    },
    {
      name: 'channel-catalogue',
      uri: 'marketing://channels/catalogue',
      file: 'channels.yaml',
      title: 'Marketing channel catalogue',
    },
    {
      name: 'funnel-stages',
      uri: 'marketing://funnel-stages',
      file: 'funnel-stages.yaml',
      title: 'Funnel stages',
    },
    {
      name: 'industry-catalogue',
      uri: 'marketing://industries/catalogue',
      file: 'industries.yaml',
      title: 'Industry catalogue',
    },
  ];

  for (const res of configResources) {
    server.registerResource(
      res.name,
      res.uri,
      { title: res.title, description: `${res.title} (from config/${res.file}).`, mimeType: 'text/yaml' },
      async (uri) => {
        let text = `Not available: ${res.file}`;
        try {
          text = await fs.readFile(path.join(ctx.config.paths.configDir, res.file), 'utf8');
        } catch (err) {
          logger.warn('Failed to read config resource', { file: res.file, error: String(err) });
        }
        return { contents: [{ uri: uri.href, mimeType: 'text/yaml', text }] };
      },
    );
  }

  // Industry playbook (template) - reads from industries/{industry}/playbook.md if present.
  server.registerResource(
    'industry-playbook',
    new ResourceTemplate('marketing://industries/{industry}/playbook', { list: undefined }),
    {
      title: 'Industry playbook',
      description: 'End-to-end marketing playbook for a specific industry.',
      mimeType: 'text/markdown',
    },
    async (uri, variables) => {
      const industry = String(variables.industry);
      const file = path.join(ctx.config.paths.root, 'industries', industry, 'playbook.md');
      let text = `No playbook found for industry: ${industry}`;
      try {
        text = await fs.readFile(file, 'utf8');
      } catch {
        // fall through with default message
      }
      return { contents: [{ uri: uri.href, mimeType: 'text/markdown', text }] };
    },
  );

  logger.info('MCP resources registered');
}
