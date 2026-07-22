import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Package root resolved relative to this module (dist/utils/config.js -> ../..),
// so the server locates its bundled skills/config/workflows regardless of the
// current working directory - e.g. when launched via `npx` from any folder.
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export interface AppConfig {
  transport: 'stdio' | 'http';
  http: { host: string; port: number };
  log: { level: string; format: 'json' | 'pretty'; redactPii: boolean };
  safety: {
    readOnly: boolean;
    writeDryRunDefault: boolean;
    requireApproval: boolean;
    freshnessWindowDays: number;
  };
  paths: {
    root: string;
    skillsDir: string;
    workflowsDir: string;
    resourcesDir: string;
    templatesDir: string;
    configDir: string;
  };
  defaults: {
    locale: string;
    currency: string;
    timezone: string;
    attributionWindowDays: number;
  };
  connectors: { enableLive: boolean };
}

function bool(value: string | undefined, fallback: boolean): boolean {
  if (value == null) return fallback;
  return value.toLowerCase() === 'true' || value === '1';
}

function int(value: string | undefined, fallback: number): number {
  const parsed = value != null ? Number.parseInt(value, 10) : NaN;
  return Number.isFinite(parsed) ? parsed : fallback;
}

/**
 * Load configuration from environment variables, with safe defaults.
 * The repository root is resolved relative to this compiled file so the server
 * works regardless of the current working directory.
 */
export function loadConfig(argv: string[] = process.argv.slice(2)): AppConfig {
  const root = path.resolve(process.env.DM_MCP_ROOT ?? packageRoot);

  let transport = (process.env.DM_MCP_TRANSPORT as 'stdio' | 'http') ?? 'stdio';
  const transportFlagIndex = argv.indexOf('--transport');
  if (transportFlagIndex !== -1 && argv[transportFlagIndex + 1]) {
    transport = argv[transportFlagIndex + 1] as 'stdio' | 'http';
  }

  const resolveDir = (envVar: string | undefined, fallback: string): string =>
    path.isAbsolute(envVar ?? '')
      ? (envVar as string)
      : path.join(root, envVar ?? fallback);

  return {
    transport,
    http: {
      host: process.env.DM_MCP_HTTP_HOST ?? '127.0.0.1',
      port: int(process.env.DM_MCP_HTTP_PORT, 8080),
    },
    log: {
      level: process.env.DM_MCP_LOG_LEVEL ?? 'info',
      format: (process.env.DM_MCP_LOG_FORMAT as 'json' | 'pretty') ?? 'json',
      redactPii: process.env.DM_MCP_ENABLE_PII_REDACTION !== 'false',
    },
    safety: {
      readOnly: bool(process.env.DM_MCP_READ_ONLY, true),
      writeDryRunDefault: bool(process.env.DM_MCP_WRITE_DRY_RUN_DEFAULT, true),
      requireApproval: bool(process.env.DM_MCP_REQUIRE_APPROVAL, true),
      freshnessWindowDays: int(process.env.DM_MCP_FRESHNESS_WINDOW_DAYS, 180),
    },
    paths: {
      root,
      skillsDir: resolveDir(process.env.DM_MCP_SKILLS_DIR, 'skills'),
      workflowsDir: resolveDir(process.env.DM_MCP_WORKFLOWS_DIR, 'workflows'),
      resourcesDir: resolveDir(process.env.DM_MCP_RESOURCES_DIR, 'resources'),
      templatesDir: resolveDir(process.env.DM_MCP_TEMPLATES_DIR, 'templates'),
      configDir: resolveDir(process.env.DM_MCP_CONFIG_DIR, 'config'),
    },
    defaults: {
      locale: process.env.DM_MCP_DEFAULT_LOCALE ?? 'en-GB',
      currency: process.env.DM_MCP_DEFAULT_CURRENCY ?? 'GBP',
      timezone: process.env.DM_MCP_DEFAULT_TIMEZONE ?? 'Europe/London',
      attributionWindowDays: int(process.env.DM_MCP_DEFAULT_ATTRIBUTION_WINDOW_DAYS, 30),
    },
    connectors: {
      enableLive: bool(process.env.DM_MCP_ENABLE_LIVE_CONNECTORS, false),
    },
  };
}
