import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { buildServer } from '../capabilities.js';
import type { ServerContext } from '../context.js';
import { logger } from '../../utils/logger.js';

/** Start the server over the stdio transport (single long-lived process). */
export async function startStdio(ctx: ServerContext): Promise<void> {
  const server = buildServer(ctx);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info('MCP server connected over stdio', {
    skills: ctx.skills.count(),
    read_only: ctx.config.safety.readOnly,
  });
}
