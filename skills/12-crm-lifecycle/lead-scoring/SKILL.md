---
id: crm.lead-scoring
name: Lead Scoring
version: 1.0.0
status: stable
description: Design a transparent lead-scoring model (fit + engagement) with thresholds and decay to prioritise follow-up and route leads, avoiding unfair or opaque criteria.
category: crm-lifecycle
sub_category: scoring
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [prioritise-leads, improve-conversion]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [icp-or-fit-criteria, engagement-signals]
optional_inputs: [historical-conversion-data, sales-feedback]
outputs: [scoring-model, thresholds, routing-rules]
related_skills: [crm.lifecycle-stage-design, crm.sales-handoff, customer-research.ideal-customer-profile]
resources: []
mcp_prompts: [lifecycle_campaign]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [crm, lead-scoring, prioritisation]
---

## Overview

Builds a lead-scoring model combining fit (how well a lead matches the ICP) and engagement
(behavioural intent), with thresholds, decay and routing — transparent and validated against real
conversion data, never using protected attributes.

## Business purpose

Scoring focuses limited sales/nurture capacity on the leads most likely to convert, improving
conversion and speed.

## When to use / when not to use

- **Use** to prioritise and route leads.
- **Do not use** protected characteristics, or opaque scores that can't be explained/audited.

## Inputs

### Required
- ICP or fit criteria, engagement signals.

### Optional
- Historical conversion data, sales feedback.

## Outputs

- A **scoring model** (fit + engagement dimensions and weights).
- **Thresholds** (MQL/SQL) and score **decay**.
- **Routing rules** to sales/nurture.

## Methodology

1. Define fit criteria from ICP (firmographic/demographic, non-protected).
2. Define engagement signals and weight by intent strength.
3. Calibrate weights/thresholds against historical conversion (where available).
4. Add decay so stale engagement doesn't inflate scores.
5. Define routing and a feedback loop with sales to refine.

## Decision rules

- Combine fit and engagement; neither alone suffices.
- Exclude protected characteristics; keep the model explainable.
- Validate and recalibrate with outcomes.

## Quality checklist

- [ ] Fit + engagement modelled.
- [ ] Thresholds + decay set.
- [ ] Routing + feedback loop defined.

## Compliance checklist

- [ ] No protected-attribute scoring.
- [ ] PII handled lawfully; model explainable.

## Failure conditions and escalation

- Missing fit criteria/signals → `insufficient_data`.

## Examples

- **SaaS:** ICP fit + product/site engagement → SQL.
- **E-commerce:** value/RFM + browse signals for VIP nurture.
- **Real estate:** budget/area fit + enquiry intent.
- **Retail:** loyalty + engagement for targeted offers.

## KPIs and metrics

MQL→SQL and SQL→win rates, speed-to-lead, sales acceptance rate.

## Related skills

`crm.lifecycle-stage-design`, `crm.sales-handoff`,
`customer-research.ideal-customer-profile`.

## MCP mappings

- Prompts: `lifecycle_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
