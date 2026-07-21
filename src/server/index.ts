#!/usr/bin/env node
import { loadConfig } from '../utils/config.js';
import { logger } from '../utils/logger.js';
import { createContext } from './context.js';
import { startStdio } from './transports/stdio.js';
import { startHttp } from './transports/http.js';

async function main(): Promise<void> {
  const config = loadConfig();
  logger.info('Starting Digital Marketing Skills MCP server', {
    transport: config.transport,
    read_only: config.safety.readOnly,
    require_approval: config.safety.requireApproval,
    live_connectors: config.connectors.enableLive,
  });

  const ctx = await createContext(config);

  if (config.transport === 'http') {
    await startHttp(ctx);
  } else {
    await startStdio(ctx);
  }
}

main().catch((err) => {
  logger.error('Fatal error during startup', { error: String(err) });
  process.exit(1);
});
