---
id: crm.lifecycle-stage-design
name: Lifecycle Stage Design
version: 1.0.0
status: stable
description: Define clear lifecycle stages, entry/exit criteria and ownership across marketing and sales to align the funnel end to end.
category: crm-lifecycle
sub_category: lifecycle
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [align-funnel, improve-handoffs]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [business-model, funnel-overview]
optional_inputs: [crm-data, sales-process]
outputs: [lifecycle-stages, criteria, ownership-map]
related_skills: [crm.workflow-design, crm.lead-scoring, crm.sales-handoff]
resources: [marketing://funnel-stages]
mcp_prompts: [lifecycle_campaign]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [crm, lifecycle, funnel]
---

## Overview

Defines the stages a contact/account moves through, with objective entry/exit criteria and
clear ownership, so reporting and handoffs are reliable.

## Business purpose

Ambiguous stages break reporting and cause leads to fall through cracks between teams.

## When to use / when not to use

- **Use** to design/repair a lifecycle model.
- **Do not use** to over-engineer stages beyond what the team can maintain.

## Inputs

### Required
- Business model, funnel overview.

### Optional
- CRM data, sales process.

## Outputs

- **Lifecycle stages** (e.g. subscriber → lead → MQL → SQL → opportunity → customer → advocate).
- **Entry/exit criteria** per stage.
- An **ownership map** (marketing/sales/CS).

## Methodology

1. Map current reality before designing the ideal.
2. Define stages relevant to the model (PLG vs SLG vs e-commerce vs property).
3. Set objective, data-backed entry/exit criteria.
4. Assign ownership and SLAs for transitions (e.g. MQL follow-up time).
5. Define reporting per stage and conversion between stages.

## Decision rules

- Every stage must have objective criteria and an owner.
- Keep the model as simple as the business allows.
- Align definitions with sales to avoid disputes.

## Quality checklist

- [ ] Objective entry/exit criteria.
- [ ] Ownership and SLAs defined.
- [ ] Stage conversion reporting defined.

## Compliance checklist

- [ ] Lawful basis for processing contact data.
- [ ] Data minimisation in stage attributes.

## Failure conditions and escalation

- Missing model/funnel → `insufficient_data`.

## Examples

- **SaaS:** PQL stage for PLG; MQL/SQL for sales-assist.
- **E-commerce:** subscriber → first purchase → repeat → VIP.
- **Real estate:** enquiry → qualified → viewing → offer → completion.
- **Retail:** member → active → lapsing → lapsed.

## KPIs and metrics

Stage conversion rates, velocity, SLA adherence, leakage.

## Related skills

`crm.workflow-design`, `crm.lead-scoring`, `crm.sales-handoff`.

## MCP mappings

- Resources: `marketing://funnel-stages`
- Prompts: `lifecycle_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
