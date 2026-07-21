---
id: crm.sales-handoff
name: Sales Handoff
version: 1.0.0
status: stable
description: Design the marketing-to-sales handoff (definitions, SLAs, context passed, routing and feedback) so qualified leads are followed up fast and consistently.
category: crm-lifecycle
sub_category: handoff
industries: [common, saas, real-estate, retail]
business_models: [b2b, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [improve-conversion, align-sales-marketing]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [qualification-definitions, sales-process]
optional_inputs: [crm-setup, current-slas, feedback-data]
outputs: [handoff-process, slas, context-payload, feedback-loop]
related_skills: [crm.lead-scoring, crm.lifecycle-stage-design, real-estate.agent-follow-up-workflow]
resources: []
mcp_prompts: [lifecycle_campaign]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [crm, sales-handoff, alignment]
---

## Overview

Defines how qualified leads pass from marketing to sales: shared definitions (MQL/SQL), response
SLAs, the context/enrichment passed with each lead, routing rules, and a feedback loop that
recycles rejected leads and improves scoring.

## Business purpose

Fast, consistent handoff and follow-up is one of the highest-leverage conversion improvements; slow
or context-poor handoffs waste demand.

## When to use / when not to use

- **Use** to design or fix the lead handoff between marketing and sales.
- **Do not use** to pass leads without consent context or to bypass agreed qualification.

## Inputs

### Required
- Qualification definitions, sales process.

### Optional
- CRM setup, current SLAs, feedback data.

## Outputs

- A **handoff process** (trigger → route → accept/reject).
- **SLAs** (speed-to-lead, response windows).
- A **context payload** (enrichment, source, consent).
- A **feedback loop** (recycling, scoring refinement).

## Methodology

1. Agree shared qualification definitions and acceptance criteria.
2. Set speed-to-lead SLAs (minutes for hot leads).
3. Define the context passed (source, behaviour, consent status, enrichment).
4. Set routing (territory/round-robin/specialisation) and rejection/recycle rules.
5. Establish a feedback loop to refine scoring and definitions.

## Decision rules

- Speed-to-lead matters most for hot leads; enforce SLAs.
- Pass enough context (incl. consent) to act.
- Recycle, don't discard, rejected leads.

## Quality checklist

- [ ] Shared definitions + SLAs.
- [ ] Context payload defined.
- [ ] Feedback/recycle loop.

## Compliance checklist

- [ ] Consent status passed with lead.
- [ ] PII handled lawfully in CRM.

## Failure conditions and escalation

- Missing definitions/process → `insufficient_data`.

## Examples

- **SaaS:** PQL/MQL → AE within minutes with product context.
- **Real estate:** enquiry → agent within 5 minutes.
- **Retail:** high-value lead → store/clienteling follow-up.
- **B2B:** territory routing with enrichment + intent.

## KPIs and metrics

Speed-to-lead, acceptance rate, MQL→SQL→win, recycled-lead conversion.

## Related skills

`crm.lead-scoring`, `crm.lifecycle-stage-design`,
`real-estate.agent-follow-up-workflow`.

## MCP mappings

- Prompts: `lifecycle_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
