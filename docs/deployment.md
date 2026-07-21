# Deployment

The server runs as a stdio process (for MCP clients) or over Streamable HTTP. Keep the safe
defaults (read-only, dry-run, approvals required, mock connectors) unless you have a specific need.

## Local

```bash
npm ci
npm run build
npm run start:stdio          # for MCP clients
npm run start:http           # HTTP transport; GET /health
```

Configuration is via environment variables (see `.env.example`), including transport, HTTP
host/port, log level/format, safety flags, directory paths and regional defaults.

## Docker

A multi-stage `Dockerfile` builds the server and runs it as a **non-root** user with safe
defaults; `docker-compose.yml` runs it over HTTP.

```bash
docker compose up --build
```

## Environment variables (selected)

| Variable | Default | Purpose |
| --- | --- | --- |
| `DM_MCP_TRANSPORT` | `stdio` | `stdio` or `http` |
| `DM_MCP_HTTP_HOST` / `DM_MCP_HTTP_PORT` | `127.0.0.1` / `8080` | HTTP bind |
| `DM_MCP_READ_ONLY` | `true` | Disable non-dry-run writes |
| `DM_MCP_WRITE_DRY_RUN_DEFAULT` | `true` | Writes are dry-run unless overridden |
| `DM_MCP_REQUIRE_APPROVAL` | `true` | Enforce approval gates |
| `DM_MCP_ENABLE_LIVE_CONNECTORS` | `false` | Opt-in to live connectors |
| `DM_MCP_FRESHNESS_WINDOW_DAYS` | `180` | Skill freshness window |

## CI

GitHub Actions run build, typecheck, lint, unit tests, `validate:skills`, `evaluate`, the Python
suite, secret scanning and docs build. Releases are tag-driven.

## Documentation site

```bash
pip install mkdocs mkdocs-material
mkdocs serve      # local preview
mkdocs build      # static site in ./site
```
