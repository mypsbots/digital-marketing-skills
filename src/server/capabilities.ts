import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { ServerContext } from './context.js';
import { registerResources } from '../mcp/resources/register-resources.js';
import { registerPrompts } from '../mcp/prompts/register-prompts.js';
import { registerTools } from '../mcp/tools/register-tools.js';

export const SERVER_NAME = 'digital-marketing-skills-mcp';
export const SERVER_VERSION = '0.1.2';

/**
 * Build an McpServer with all capabilities (resources, prompts, tools) registered.
 * A fresh server instance is created per HTTP session; the same instance is used
 * for the lifetime of a stdio process.
 */
export function buildServer(ctx: ServerContext): McpServer {
  const server = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    {
      capabilities: { resources: {}, prompts: {}, tools: {}, logging: {} },
      instructions:
        'Digital Marketing Skills MCP server. Discover skills via marketing://skills/catalogue, ' +
        'fetch a skill with marketing_get_skill, and use read-only tools for analysis and metrics. ' +
        'Write tools default to dry-run and high-risk actions require human approval. Never ' +
        'guarantee marketing outcomes. Separate facts, assumptions and recommendations.',
    },
  );

  registerResources(server, ctx);
  registerPrompts(server, ctx);
  registerTools(server, ctx);

  return server;
}
