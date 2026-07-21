import { redact } from '../security/redaction.js';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

export interface LoggerOptions {
  level: LogLevel;
  format: 'json' | 'pretty';
  redactPii: boolean;
}

/**
 * Structured JSON logger. All log records are passed through the redaction layer
 * to avoid leaking secrets or PII into logs. Logs are written to stderr so that
 * stdout remains a clean channel for the MCP stdio transport.
 */
export class Logger {
  private readonly options: LoggerOptions;

  constructor(options: Partial<LoggerOptions> = {}) {
    this.options = {
      level: options.level ?? 'info',
      format: options.format ?? 'json',
      redactPii: options.redactPii ?? true,
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return LEVEL_ORDER[level] >= LEVEL_ORDER[this.options.level];
  }

  private write(level: LogLevel, message: string, context?: Record<string, unknown>): void {
    if (!this.shouldLog(level)) return;
    const safeContext = this.options.redactPii && context ? redact(context) : context;
    const record = {
      ts: new Date().toISOString(),
      level,
      message,
      ...(safeContext ? { context: safeContext } : {}),
    };
    const line =
      this.options.format === 'json'
        ? JSON.stringify(record)
        : `[${record.ts}] ${level.toUpperCase()} ${message}${
            safeContext ? ' ' + JSON.stringify(safeContext) : ''
          }`;
    process.stderr.write(line + '\n');
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.write('debug', message, context);
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.write('info', message, context);
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.write('warn', message, context);
  }

  error(message: string, context?: Record<string, unknown>): void {
    this.write('error', message, context);
  }
}

export const logger = new Logger({
  level: (process.env.DM_MCP_LOG_LEVEL as LogLevel) ?? 'info',
  format: (process.env.DM_MCP_LOG_FORMAT as 'json' | 'pretty') ?? 'json',
  redactPii: process.env.DM_MCP_ENABLE_PII_REDACTION !== 'false',
});
