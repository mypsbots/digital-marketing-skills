# Deploying the MCP server over HTTPS (for ChatGPT & remote clients)

Local clients (Cursor, Claude Desktop, Gemini CLI) launch the server over **stdio** via `npx`.
Remote-only clients — notably **ChatGPT connectors** — need a **hosted HTTPS endpoint**. This guide
covers hosting the Streamable HTTP transport.

The server exposes:

- `POST /mcp` — the MCP endpoint (stateless Streamable HTTP).
- `GET /health` — health check (`{ "status": "ok", ... }`), always unauthenticated.

## Security defaults

- Set `DM_MCP_HTTP_AUTH_TOKEN` to require `Authorization: Bearer <token>` on `POST /mcp`.
  `/health` stays open for platform health checks.
- Keep `DM_MCP_READ_ONLY=true` and `DM_MCP_REQUIRE_APPROVAL=true` (the defaults) for a public endpoint.
- Bind to `0.0.0.0` in a container (`DM_MCP_HTTP_HOST=0.0.0.0`); the platform's `PORT` is honoured
  automatically.

## Option A — Render (Docker blueprint)

1. Push this repo to GitHub (already done).
2. Render → **New → Blueprint** → select the repo. It reads [`render.yaml`](../render.yaml).
3. Render builds the [`Dockerfile`](../Dockerfile), injects `PORT`, terminates TLS, and generates
   `DM_MCP_HTTP_AUTH_TOKEN`. Copy that token from the dashboard.
4. Your endpoint: `https://<service>.onrender.com/mcp`.

## Option B — Fly.io (Docker)

```bash
fly launch --no-deploy                                   # creates the app, keeps fly.toml
fly secrets set DM_MCP_HTTP_AUTH_TOKEN=$(openssl rand -hex 32)
fly deploy
```

Endpoint: `https://<app>.fly.dev/mcp`.

## Option C — any Docker host

```bash
docker build -t dm-skills-mcp .
docker run -p 8080:8080 \
  -e DM_MCP_HTTP_AUTH_TOKEN=$(openssl rand -hex 32) \
  dm-skills-mcp
```

Put it behind a TLS-terminating reverse proxy (Caddy, nginx, a load balancer) so the public URL is
HTTPS.

## Connect ChatGPT

In ChatGPT, add a **custom connector** (Settings → Connectors, developer mode):

- **URL:** `https://your-host/mcp`
- **Authentication:** custom header → `Authorization: Bearer <your DM_MCP_HTTP_AUTH_TOKEN>`

## Verify

```bash
curl https://your-host/health
# {"status":"ok","skills":160,"read_only":true}

curl -s -X POST https://your-host/mcp \
  -H "Authorization: Bearer $DM_MCP_HTTP_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```
