---
id: automation.error-handling-design
name: Automation Error Handling Design
version: 1.0.0
status: stable
description: "Design robust error handling for marketing automations: retries, backoff, dead-letter queues, alerting, idempotency and safe degradation."
category: marketing-automation
sub_category: reliability
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [reliability, prevent-failures]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [workflow-spec, failure-modes]
optional_inputs: [platform, volume, sla]
outputs: [error-strategy, retry-policy, alerting-plan]
related_skills: [automation.marketing-workflow-design, crm.workflow-design]
resources: []
mcp_prompts: [create_automation_workflow]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [automation, error-handling, reliability]
---

## Overview

Specifies how an automation handles failures — retries, backoff, dead-letter queues, alerting and
idempotency — so transient errors self-heal and permanent ones fail safely and visibly.

## Business purpose

Unhandled errors cause silent data loss or duplicate customer contact.

## When to use / when not to use

- **Use** to harden an automation before production.
- **Do not use** to add blind retries to non-idempotent side effects.

## Inputs

### Required
- Workflow spec, known failure modes.

### Optional
- Platform, volume, SLA.

## Outputs

- An **error strategy** (classify transient vs permanent).
- A **retry policy** (limits, backoff, idempotency).
- An **alerting plan** and dead-letter handling.

## Methodology

1. Enumerate failure modes per step (API, data, auth, rate limit).
2. Classify transient vs permanent; define handling for each.
3. Set retries with exponential backoff and caps; ensure idempotency.
4. Route unrecoverable items to a dead-letter queue with context.
5. Alert on thresholds; define runbook and manual replay.

## Decision rules

- Retries only for idempotent/transient failures.
- Fail safe on ambiguity (no duplicate destructive actions).
- Every permanent failure must be visible.

## Quality checklist

- [ ] Failure modes classified.
- [ ] Retry/backoff + idempotency.
- [ ] Dead-letter + alerting + runbook.

## Compliance checklist

- [ ] No PII in error logs/alerts beyond need.

## Failure conditions and escalation

- Missing workflow spec/failure modes → `insufficient_data`.

## Examples

- **SaaS:** CRM API 429 → backoff retry; auth error → alert.
- **E-commerce:** ESP send failure → dead-letter + alert.
- **Real estate:** portal sync error → retry + task.
- **Retail:** POS sync failure → replay queue.

## KPIs and metrics

Error rate, retry success, dead-letter volume, MTTR.

## Related skills

`automation.marketing-workflow-design`, `crm.workflow-design`.

## MCP mappings

- Prompts: `create_automation_workflow`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
