// Vercel serverless entrypoint for the Digital Marketing Skills MCP server.
//
// Reuses the exact same resource/prompt/tool registrations as the stdio and
// self-hosted HTTP transports, exposed over Streamable HTTP via mcp-handler.
// Deployed at:  https://<your-app>.vercel.app/api/mcp
//
// Imports resolve against the compiled `dist/` output (built by the `prepare`
// script during `npm install` on Vercel), so this file needs no bundler-specific
// `.js`->`.ts` resolution.
import { createMcpHandler } from 'mcp-handler';
import { loadConfig } from '../dist/utils/config.js';
import { createContext } from '../dist/server/context.js';
import { registerResources } from '../dist/mcp/resources/register-resources.js';
import { registerPrompts } from '../dist/mcp/prompts/register-prompts.js';
import { registerTools } from '../dist/mcp/tools/register-tools.js';
import { SERVER_NAME, SERVER_VERSION } from '../dist/server/capabilities.js';

// Bundled skills/config/workflows are shipped alongside the function via
// `includeFiles` in vercel.json and live at the function root (process.cwd()).
if (!process.env.DM_MCP_ROOT) {
  process.env.DM_MCP_ROOT = process.cwd();
}

// Build the shared context once per warm instance (loads the skill registry,
// workflows, connectors, policy and approval engines from disk).
const contextPromise = createContext(loadConfig());

const mcpHandler = createMcpHandler(
  async (server) => {
    const ctx = await contextPromise;
    registerResources(server, ctx);
    registerPrompts(server, ctx);
    registerTools(server, ctx);
  },
  {
    serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
    capabilities: { resources: {}, prompts: {}, tools: {}, logging: {} },
    instructions:
      'Digital Marketing Skills MCP server. Discover skills via marketing://skills/catalogue, ' +
      'fetch a skill with marketing_get_skill, and use read-only tools for analysis and metrics. ' +
      'Write tools default to dry-run and high-risk actions require human approval. Never ' +
      'guarantee marketing outcomes. Separate facts, assumptions and recommendations.',
  },
  {
    // Endpoints are derived from the base path: POST /api/mcp handles Streamable HTTP.
    basePath: '/api',
    maxDuration: 60,
    // SSE is deprecated in the MCP spec and requires Redis for session state;
    // stateless Streamable HTTP is all modern clients (ChatGPT, Claude) need.
    disableSse: true,
    verboseLogs: false,
  },
);

function unauthorized(): Response {
  return new Response(
    JSON.stringify({
      jsonrpc: '2.0',
      error: { code: -32001, message: 'Unauthorized' },
      id: null,
    }),
    {
      status: 401,
      headers: {
        'content-type': 'application/json',
        'www-authenticate': 'Bearer realm="mcp"',
      },
    },
  );
}

// Optional static token gate. When DM_MCP_HTTP_AUTH_TOKEN is set (strongly
// recommended for public deployments) every request must present a matching token,
// supplied EITHER as an `Authorization: Bearer <token>` header (Cursor, Claude,
// VS Code, Gemini CLI) OR as a `?key=<token>` / `?token=<token>` query parameter.
// The query-parameter fallback exists for clients such as ChatGPT developer-mode
// apps, whose only auth choices are "OAuth" and "No authentication" — with "No
// authentication" selected, the secret travels in the URL instead of a header.
function extractToken(request: Request): string {
  const header = request.headers.get('authorization') ?? '';
  if (header.startsWith('Bearer ')) return header.slice('Bearer '.length);
  const params = new URL(request.url).searchParams;
  return params.get('key') ?? params.get('token') ?? '';
}

async function handler(request: Request): Promise<Response> {
  const expected = process.env.DM_MCP_HTTP_AUTH_TOKEN;
  if (expected) {
    const provided = extractToken(request);
    if (provided.length !== expected.length || provided !== expected) {
      return unauthorized();
    }
  }
  return mcpHandler(request);
}

export { handler as GET, handler as POST, handler as DELETE };
