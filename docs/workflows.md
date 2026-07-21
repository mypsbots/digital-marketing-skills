# Workflows

Workflows are multi-step marketing procedures defined in YAML under `workflows/` and loaded by the
`workflow-engine`. The engine validates structure and produces an ordered execution plan that
highlights where approval gates sit; it does not itself perform side effects.

## Step types

- `skill` — apply a skill (via `ref` to a skill id).
- `tool` — invoke an MCP tool.
- `decision` — a branch point.
- `approval_gate` — a mandatory human approval before continuing.
- `checkpoint` — a synthesis/validation pause.

## Included workflows

| ID | Purpose | Approval gate |
| --- | --- | --- |
| `full-marketing-audit` | Structured cross-channel audit | No (read-only) |
| `marketing-strategy-development` | Objectives → channels → budget → roadmap | Before spend |
| `go-to-market-launch` | Research → positioning → GTM → measurement | Before launch/spend |
| `seo-content-cluster` | Keyword discovery → clusters → briefs | Before publishing |
| `google-ads-launch` | Paid-search architecture → keywords → copy → tracking | Before launch |
| `meta-ads-launch` | Paid-social structure → audiences → creative → tracking | Before launch |
| `email-nurture-launch` | Consent → sequence → bodies → measurement | Before sending |
| `monthly-reporting` | Diagnose → report → executive summary | No (read-only) |

## Authoring

A workflow must have `id`, `name`, `objective`, `trigger` and `steps` (see
`schemas/workflow.schema.json`). Place an `approval_gate` step before any launch/send and list it
in `approval_gates`. Reference only skill ids that exist — `npm run evaluate` fails otherwise.

## Inspecting a plan

Use the workflow resource (`marketing://workflows/{id}`) or the workflow-planning tool to see the
ordered steps and where approval is required before executing anything.
