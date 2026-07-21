---
id: real-estate.lead-qualification
name: Real Estate Lead Qualification
version: 1.0.0
status: stable
description: Define qualification criteria and scoring for real-estate leads (budget, timeline, financing, intent) to prioritise agent time and speed-to-lead.
category: real-estate-marketing
sub_category: qualification
industries: [real-estate]
business_models: [b2c, b2b, b2b2c]
funnel_stages: [consideration, decision]
objectives: [prioritise-leads, improve-conversion]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [lead-source, offering, sales-process]
optional_inputs: [crm-data, historical-conversion]
outputs: [qualification-criteria, scoring-model, routing-rules]
related_skills: [real-estate.lead-generation-campaign, real-estate.agent-follow-up-workflow, crm.lifecycle-stage-design]
resources: []
mcp_prompts: [real_estate_lead_plan]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [real-estate, qualification, scoring]
---

## Overview

Establishes objective qualification criteria and a scoring/routing model so agents focus on the
highest-intent, best-fit leads and respond fast.

## Business purpose

Agent time is scarce; qualification maximises conversion per hour and lead ROI.

## When to use / when not to use

- **Use** to prioritise and route leads.
- **Do not use** criteria that proxy for protected characteristics.

## Inputs

### Required
- Lead source, offering, sales process.

### Optional
- CRM data, historical conversion.

## Outputs

- **Qualification criteria** (budget, timeline, financing, area, intent).
- A **scoring model** and **routing rules** (hot/warm/cold + SLAs).

## Methodology

1. Define fit and intent criteria relevant to the offering.
2. Weight by predictive value (from data where available).
3. Set tiers with response SLAs (hot = immediate).
4. Route by tier/area to the right agent.
5. Feed outcomes back to refine scoring.

## Decision rules

- Criteria must be lawful and non-discriminatory.
- Prioritise speed for high-intent leads.
- Refine with outcome data.

## Quality checklist

- [ ] Fit + intent criteria.
- [ ] Tiers with SLAs.
- [ ] Routing rules.

## Compliance checklist

- [ ] No protected-class proxies.
- [ ] PII protected; consent for contact.

## Failure conditions and escalation

- Missing source/offering/process → `insufficient_data`.

## Examples

- **Resale:** budget + timeline + financing readiness scoring.
- **New build:** area + unit-type fit + deposit readiness.
- **Rental:** move-in date + affordability checks.

## KPIs and metrics

Lead-to-viewing, qualification accuracy, speed-to-lead, conversion by tier.

## Related skills

`real-estate.lead-generation-campaign`, `real-estate.agent-follow-up-workflow`,
`crm.lifecycle-stage-design`.

## MCP mappings

- Prompts: `real_estate_lead_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
