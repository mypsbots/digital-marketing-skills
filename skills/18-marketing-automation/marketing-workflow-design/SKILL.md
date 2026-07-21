---
id: automation.marketing-workflow-design
name: Marketing Workflow Design
version: 1.0.0
status: stable
description: Specify a marketing automation workflow (trigger, data flow, actions) with idempotency, error handling, observability and approval gates for side effects.
category: marketing-automation
sub_category: workflows
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [automate-processes, improve-efficiency]
risk_level: high
execution_mode: planning
human_approval_required: true
estimated_duration: hours-to-days
required_inputs: [trigger, desired-outcome, systems-involved]
optional_inputs: [data-mapping, volume, platform]
outputs: [trigger-action-map, data-flow, error-handling, approval-gates]
related_skills: [automation.error-handling-design, crm.workflow-design, compliance.consent-assessment]
resources: []
mcp_prompts: [create_automation_workflow]
data_sensitivity: confidential
pii_expected: true
external_side_effects: true
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [automation, workflow, integration]
---

## Overview

Designs an automation as trigger → data transform → actions, engineered for reliability
(idempotency, retries, error paths, observability) with approval gates before external side effects.

## Business purpose

Automation scales operations but, done carelessly, scales mistakes (duplicate sends, bad data).

## When to use / when not to use

- **Use** to specify a robust automation (n8n/Make/Zapier or code).
- **Do not use** to auto-execute external side effects without approval/consent.

## Inputs

### Required
- Trigger, desired outcome, systems involved.

### Optional
- Data mapping, volume, platform.

## Outputs

- A **trigger-action map** and **data flow**.
- **Error handling** and **idempotency** design.
- **Observability** and **approval gates**.

## Methodology

1. Define trigger and success criteria.
2. Map data flow and transformations between systems.
3. Design idempotency (dedupe keys) to prevent duplicates.
4. Add error handling: retries with backoff, dead-letter, alerts.
5. Add observability (logs, metrics) and approval gates for side effects.
6. Document rollback and manual override.

## Decision rules

- External side effects require approval.
- Idempotency mandatory for any send/write.
- Fail safe: on error, do not repeat destructive actions.

## Quality checklist

- [ ] Trigger/actions/data flow defined.
- [ ] Idempotency + error handling.
- [ ] Observability + approval gates.

## Compliance checklist

- [ ] Consent verified for outbound contact.
- [ ] PII minimised in payloads/logs.
- [ ] Approval before external side effects.

## Failure conditions and escalation

- Missing trigger/outcome/systems → `insufficient_data`.
- Side-effecting actions → require approval.

## Examples

- **SaaS:** trial signup → CRM enrich + task (internal actions).
- **E-commerce:** order → tag + consent-based post-purchase flow.
- **Real estate:** enquiry → CRM + agent task + alert.
- **Retail:** loyalty signup → welcome (consent-based).

## KPIs and metrics

Success rate, error rate, duplicate rate, latency.

## Related skills

`automation.error-handling-design`, `crm.workflow-design`,
`compliance.consent-assessment`.

## MCP mappings

- Prompts: `create_automation_workflow`
- Tools: `marketing_get_skill`, `marketing_plan_workflow`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
