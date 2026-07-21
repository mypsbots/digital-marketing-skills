---
id: real-estate.agent-follow-up-workflow
name: Agent Follow-up Workflow
version: 1.0.0
status: stable
description: Design a speed-to-lead follow-up workflow for real-estate agents with multi-touch cadence, tasks and consent-based nurture to convert enquiries.
category: real-estate-marketing
sub_category: follow-up
industries: [real-estate]
business_models: [b2c, b2b, b2b2c]
funnel_stages: [consideration, decision, retention]
objectives: [improve-conversion, reduce-lead-leakage]
risk_level: high
execution_mode: planning
human_approval_required: true
estimated_duration: hours-to-days
required_inputs: [lead-tiers, channels, sales-process]
optional_inputs: [crm, templates, consent-status]
outputs: [follow-up-cadence, task-and-message-map, compliance-gates]
related_skills: [real-estate.lead-qualification, crm.workflow-design, compliance.consent-assessment]
resources: []
mcp_prompts: [real_estate_lead_plan]
data_sensitivity: confidential
pii_expected: true
external_side_effects: true
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [real-estate, follow-up, workflow]
---

## Overview

Defines a rapid, persistent, multi-touch follow-up cadence (call/SMS/email) with agent tasks and
consent-based nurture, gated for compliance, to stop enquiries going cold.

## Business purpose

Most real-estate leads are lost to slow/absent follow-up; a disciplined cadence wins deals.

## When to use / when not to use

- **Use** to design agent follow-up cadences.
- **Do not use** to auto-contact without consent/approval.

## Inputs

### Required
- Lead tiers, channels, sales process.

### Optional
- CRM, templates, consent status.

## Outputs

- A **follow-up cadence** by tier (timing/channel/touches).
- A **task and message map** for agents.
- **Compliance gates** (consent/suppression/approval).

## Methodology

1. Set speed-to-lead target (e.g. first contact in minutes for hot).
2. Define multi-touch cadence by tier over days/weeks.
3. Mix agent tasks (calls) with consent-based automated nurture.
4. Provide templates aligned to intent; personalise.
5. Add consent checks and approval gates for automated outbound.

## Decision rules

- First contact fast; persist across multiple touches.
- Automated outbound requires consent + approval.
- Log outcomes; exit on conversion or opt-out.

## Quality checklist

- [ ] Speed-to-lead target set.
- [ ] Multi-touch cadence by tier.
- [ ] Templates + personalisation.

## Compliance checklist

- [ ] Consent for SMS/email; suppression honoured.
- [ ] PII protected.
- [ ] Approval before automated outbound.

## Failure conditions and escalation

- Missing tiers/channels/process → `insufficient_data`.
- Automated outbound → requires approval.

## Examples

- **Hot buyer:** immediate call + SMS + email, daily touches week 1.
- **Warm:** value nurture + periodic check-ins.
- **Seller:** valuation follow-up cadence.

## KPIs and metrics

Speed-to-lead, contact rate, lead-to-viewing, conversion.

## Related skills

`real-estate.lead-qualification`, `crm.workflow-design`,
`compliance.consent-assessment`.

## MCP mappings

- Prompts: `real_estate_lead_plan`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
