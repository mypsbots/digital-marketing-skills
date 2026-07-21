# Architecture

The platform separates **knowledge** (skills, workflows, config, templates) from the **server**
(TypeScript MCP implementation) and **deterministic logic** (pure engines), so that open-ended
LLM reasoning is always bounded by validated data and explicit safety policy.

## Layers

1. **Knowledge base**
   - `skills/` — one `SKILL.md` per capability with YAML front matter + structured body.
   - `workflows/` — multi-step YAML definitions with approval gates.
   - `config/` — metrics, channels, funnel stages, industries, risk/approval/regional policy.
   - `industries/`, `templates/`, `examples/` — playbooks, output templates and worked examples.
   - `schemas/` — JSON Schemas that define the shape of skills, workflows and artefacts.

2. **Core engines** (`src/core`) — pure and independently testable:
   - `skill-loader` / `skill-registry` — load, validate and index skills.
   - `metric-engine` — deterministic metric calculations (formula + inputs + warnings).
   - `policy-engine` — decides allowed / approval-required from action characteristics.
   - `approval-engine` — lifecycle of approval requests.
   - `audit-engine` — append-only audit events.
   - `workflow-engine` — loads workflows and produces execution plans.

3. **MCP surface** (`src/mcp`)
   - `resources` — `marketing://…` catalogues and items.
   - `prompts` — structured, reusable marketing prompts.
   - `tools` — read-only discovery/metric tools and controlled write tools.

4. **Transports** (`src/server/transports`) — stdio and Streamable HTTP.

5. **Connectors** (`src/connectors`) — a common interface with deterministic **mock** analytics/
   advertising/CRM connectors by default; live connectors are opt-in.

## Request flow (tool call)

```
client → MCP tool → validate input (Zod) → policy-engine.evaluate()
     → (if write) approval check / dry-run → deterministic engine or connector
     → audit-engine.record() → envelope response (status + data + warnings)
```

## Design choices

- **Envelopes** — tool responses use a consistent envelope (status, data, warnings, next steps),
  including an explicit `insufficient_data` status instead of guessing.
- **Config-as-data** — catalogues live in YAML so they can be reviewed and versioned without code
  changes.
- **Determinism boundary** — numbers come from `metric-engine`/Python utilities, not free-text
  model arithmetic.
