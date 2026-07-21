---
id: crm.workflow-design
name: CRM Workflow Design
version: 1.0.0
status: stable
description: Design CRM/lifecycle workflows (triggers, conditions, actions) with consent, suppression and human-approval gates for outbound contact.
category: crm-lifecycle
sub_category: workflows
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [automate-lifecycle, improve-conversion]
risk_level: high
execution_mode: planning
human_approval_required: true
estimated_duration: days
required_inputs: [lifecycle-stages, objective]
optional_inputs: [crm-platform, triggers, content]
outputs: [workflow-spec, trigger-action-map, compliance-gates]
related_skills: [crm.lifecycle-stage-design, automation.marketing-workflow-design, compliance.consent-assessment]
resources: []
mcp_prompts: [lifecycle_campaign, create_automation_workflow]
data_sensitivity: confidential
pii_expected: true
external_side_effects: true
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [crm, workflow, lifecycle]
---

## Overview

Specifies lifecycle workflows as trigger → condition → action, with explicit consent,
suppression and approval gates before any outbound contact executes.

## Business purpose

Automated lifecycle actions scale personalised, timely engagement — but must be safe and compliant.

## When to use / when not to use

- **Use** to design lifecycle automations.
- **Do not use** to auto-contact people without consent or approval.

## Inputs

### Required
- Lifecycle stages, objective.

### Optional
- CRM platform, triggers, content.

## Outputs

- A **workflow spec** (triggers, conditions, actions, exits).
- A **trigger-action map**.
- **Compliance gates** (consent/suppression/approval).

## Methodology

1. Define the trigger (behaviour, stage change, date, score threshold).
2. Set conditions (segment, consent, suppression, frequency caps).
3. Define actions (email/SMS/task/field-update) — outbound gated by consent/approval.
4. Add exits and goal criteria.
5. Design error handling and idempotency (no duplicate sends).
6. Insert approval gates for any customer-facing send at scale.

## Decision rules

- Outbound contact requires consent and approval; internal actions (tasks, field updates) may not.
- Enforce frequency caps and suppression globally.
- Fail safe: on ambiguity, do not contact.

## Quality checklist

- [ ] Triggers/conditions/actions/exits defined.
- [ ] Frequency caps and suppression enforced.
- [ ] Idempotency and error handling.

## Compliance checklist

- [ ] Consent verified for each outbound channel.
- [ ] Suppression/unsubscribe honoured.
- [ ] Approval gate before scaled sends.

## Failure conditions and escalation

- No consent basis → block outbound.
- Missing stages/objective → `insufficient_data`.
- Scaled outbound → requires approval.

## Examples

- **SaaS:** onboarding tasks + activation nudges.
- **E-commerce:** cart-abandon (consent-based) + post-purchase.
- **Real estate:** enquiry → agent task + property alerts.
- **Retail:** lapsing-member win-back (consent-based).

## KPIs and metrics

Workflow conversion, engagement, unsubscribe/complaint, error rate.

## Related skills

`crm.lifecycle-stage-design`, `automation.marketing-workflow-design`,
`compliance.consent-assessment`.

## MCP mappings

- Prompts: `lifecycle_campaign`, `create_automation_workflow`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
