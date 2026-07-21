---
id: customer-research.ideal-customer-profile
name: Ideal Customer Profile (ICP) Creation
version: 1.0.0
status: stable
description: Define the ideal customer profile using evidence from best current customers, with explicit inclusion and exclusion criteria.
category: customer-research
sub_category: targeting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [define-icp, improve-targeting]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 1-2 days
required_inputs: [product-or-service, best-customers-or-hypotheses, market]
optional_inputs: [crm-segments, win-loss-data, firmographics]
outputs: [icp-definition, inclusion-exclusion-criteria, validation-plan]
related_skills: [customer-research.buyer-persona-development, customer-research.firmographic-segmentation, customer-research.negative-persona-creation]
resources: []
mcp_prompts: [define_icp]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [icp, targeting, segmentation]
---

## Overview

Defines the specific type of customer the business is best placed to serve profitably, derived
from evidence rather than aspiration, with clear inclusion/exclusion criteria.

## Business purpose

A sharp ICP concentrates spend on winnable, valuable demand, lowering CAC and raising retention.

## When to use / when not to use

- **Use** before targeting, messaging or channel selection.
- **Do not use** for individual-level personal profiling; ICP is a segment definition.

## Inputs

### Required
- Product/service, best current customers (or hypotheses), market.

### Optional
- CRM segments, win/loss data, firmographics.

## Outputs

- An **ICP definition** (who, context, need, value).
- **Inclusion/exclusion criteria**.
- A **validation plan** to test the ICP.

## Methodology

1. Identify best current customers by value signals (retention, margin, expansion, referrals),
   not just revenue.
2. Find common attributes: firmographics/demographics, trigger events, need, buying context.
3. Distinguish correlation from causation; mark unproven attributes as hypotheses.
4. Draft inclusion criteria (must-haves) and exclusion criteria (poor-fit signals).
5. Define a validation plan (interviews, cohort analysis, campaign tests).

## Decision rules

- Prefer behavioural/value signals over surface demographics.
- Exclude segments with structurally poor economics even if high volume.
- Keep the ICP narrow enough to guide decisions; broaden only with evidence.

## Quality checklist

- [ ] Grounded in best-customer evidence.
- [ ] Inclusion and exclusion criteria explicit.
- [ ] Hypotheses labelled; validation plan present.

## Compliance checklist

- [ ] No sensitive-category or discriminatory targeting attributes.
- [ ] Data used lawfully and minimally.

## Failure conditions and escalation

- No customer evidence and none obtainable → produce hypothesis-based ICP flagged as unvalidated.

## Examples

- **B2B SaaS:** 50–200 FTE, ops team present, integrates with Tool X, growth trigger.
- **B2C SaaS:** habit-formation need, mobile-first, willingness to pay for time saved.
- **E-commerce:** repeat-category buyers with above-median AOV and low return rate.
- **Real estate:** first-time buyers in a specific postcode set with a mortgage-in-principle.

## KPIs and metrics

Fit-weighted conversion rate, CAC by segment, retention/expansion by segment, win rate.

## Related skills

`customer-research.buyer-persona-development`, `customer-research.firmographic-segmentation`,
`customer-research.negative-persona-creation`.

## MCP mappings

- Prompts: `define_icp`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
