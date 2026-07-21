import express, { type Request, type Response } from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { buildServer } from '../capabilities.js';
import type { ServerContext } from '../context.js';
import { logger } from '../../utils/logger.js';

/**
 * Start the server over Streamable HTTP in stateless mode. A fresh server and
 * transport are created per request, which is simple and safe for horizontal
 * scaling. Binds to the configured host (defaults to loopback).
 */
export async function startHttp(ctx: ServerContext): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', skills: ctx.skills.count(), read_only: ctx.config.safety.readOnly });
  });

  app.post('/mcp', async (req: Request, res: Response) => {
    try {
      const server = buildServer(ctx);
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      res.on('close', () => {
        void transport.close();
        void server.close();
      });
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (err) {
      logger.error('HTTP request handling failed', { error: String(err) });
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: '2.0',
          error: { code: -32603, message: 'Internal server error' },
          id: null,
        });
      }
    }
  });

  // Method-not-allowed for GET/DELETE on /mcp in stateless mode.
  const notAllowed = (_req: Request, res: Response) =>
    res.status(405).json({
      jsonrpc: '2.0',
      error: { code: -32000, message: 'Method not allowed in stateless mode.' },
      id: null,
    });
  app.get('/mcp', notAllowed);
  app.delete('/mcp', notAllowed);

  const { host, port } = ctx.config.http;
  await new Promise<void>((resolve) => {
    app.listen(port, host, () => {
      logger.info('MCP server listening over HTTP', { host, port, endpoint: '/mcp' });
      resolve();
    });
  });
}
