# Evaluations

This project uses two complementary layers of evaluation.

## 1. Deterministic structural evaluation (automated)

Run by `npm run evaluate` (`scripts/evaluate.ts`). It verifies invariants that keep the
catalogue coherent and safe, and fails CI on violation:

- every skill referenced by a prompt spec exists;
- every skill referenced by a workflow step exists;
- high/critical-risk skills require human approval;
- skills with external side effects or cost implications are flagged for approval;
- workflows with approval-gate steps expose them in `approval_gates`.

Skill metadata and body structure are additionally validated by `npm run validate:skills`, and
unit behaviour by `npm test` (TypeScript) and `pytest` (Python).

## 2. Behavioural golden cases (for model-in-the-loop review)

The `evals/cases/` directory contains scenario cards describing what a *correct* assistant
response should and should not do when a skill or prompt is applied. They are written for human
or model-graded review rather than exact-match assertions, because marketing outputs are
open-ended. Each case lists:

- `scenario` — the situation and inputs;
- `expected` — behaviours a good answer exhibits;
- `must_not` — failure behaviours (e.g. fabricating data, promising results, contacting people
  without consent, skipping approval gates).

These encode the platform's non-negotiables: honesty about uncertainty, privacy by design, and
human-in-the-loop approval for risky actions.
