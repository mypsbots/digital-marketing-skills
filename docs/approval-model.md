# Approval model

Human-in-the-loop approval is the platform's core safety control. It is enforced by the
`policy-engine` and mediated by the `approval-engine`, and reflected in skill metadata and
workflow approval gates.

## When approval is required

The policy engine requires approval when **all** of the following hold: approvals are enabled,
the action is a write that is **not** a dry-run, and the action is any of:

- **high or critical risk**, or
- has an **external side effect** (e.g. contacting people, changing an ad account), or
- has a **cost implication** (e.g. spend).

Read-only analysis never requires approval. In **read-only mode**, all non-dry-run writes are
denied outright.

## Decision outcomes

| Status | Meaning |
| --- | --- |
| `success` | Allowed (may still note dry-run) |
| `approval_required` | Blocked pending a valid approval id |
| `permission_denied` | Blocked by read-only mode |
| `policy_blocked` | Blocked by policy |

## Skill & workflow signals

- Skills declare `risk_level`, `human_approval_required`, `external_side_effects` and
  `cost_implication` in their front matter. High/critical-risk skills **must** set
  `human_approval_required: true` (enforced by `validate:skills` and `evaluate`).
- Workflows place `approval_gate` steps before any launch/send, and list them in
  `approval_gates`.

## Approval lifecycle

`create → pending → approved | rejected | changes_requested → (if approved) executed`

Each transition is recorded by the `audit-engine`. An approval id must be supplied to proceed
with a gated action; it is single-purpose and validated before execution.

## Configuration

See `config/approval-policies.yaml` and `config/risk-levels.yaml`, and the environment flags
`DM_MCP_REQUIRE_APPROVAL`, `DM_MCP_READ_ONLY`, `DM_MCP_WRITE_DRY_RUN_DEFAULT`.
