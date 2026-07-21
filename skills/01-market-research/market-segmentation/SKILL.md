---
id: market-research.market-segmentation
name: Market Segmentation
version: 1.0.0
status: stable
description: Divide a market into meaningful, reachable segments by needs, behaviour, value and firmographics/demographics to focus targeting and messaging.
category: market-research
sub_category: segmentation
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [focus-targeting, prioritise-segments]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: days
required_inputs: [market-definition, customer-data-or-hypotheses]
optional_inputs: [firmographics, behaviour-data, value-data]
outputs: [segmentation-model, segment-profiles, prioritisation]
related_skills: [customer-research.ideal-customer-profile, customer-research.firmographic-segmentation, market-research.pestle-analysis]
resources: []
mcp_prompts: [create_marketing_strategy, generate_buyer_persona]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [segmentation, research, targeting]
---

## Overview

Builds a segmentation model that groups the market by the dimensions that best predict behaviour
and value (needs, behaviour, value, firmographics/demographics), then profiles and prioritises
segments for targeting.

## Business purpose

Focused segments concentrate spend where returns and fit are highest and sharpen messaging.

## When to use / when not to use

- **Use** to decide who to target and prioritise.
- **Do not use** to create segments the business cannot identify or reach, or to segment on
  sensitive/protected attributes.

## Inputs

### Required
- Market definition, customer data or hypotheses.

### Optional
- Firmographics, behaviour data, value data.

## Outputs

- A **segmentation model** (dimensions + segments).
- **Segment profiles** (needs, size, value, reachability).
- **Prioritisation** with rationale.

## Methodology

1. Choose segmentation dimensions that predict behaviour/value (avoid vanity splits).
2. Form segments that are distinct, sizeable, reachable and actionable.
3. Profile each: needs, size, value potential, reachability, fit.
4. Prioritise using value, fit and ability to serve.
5. Link priority segments to ICP/persona work.

## Decision rules

- Segments must be distinct, sizeable, reachable and actionable.
- Avoid protected/sensitive attributes for targeting.
- Prioritise on value and fit, not size alone.

## Quality checklist

- [ ] Predictive dimensions chosen.
- [ ] Segments actionable and reachable.
- [ ] Prioritisation justified.

## Compliance checklist

- [ ] No targeting on protected characteristics.
- [ ] Data used lawfully.

## Failure conditions and escalation

- Missing market definition/data → `insufficient_data`.

## Examples

- **SaaS:** by company size + use case + maturity.
- **E-commerce:** by value tier + category affinity.
- **Real estate:** by intent (buy/sell), area, budget band.
- **Retail:** by shopper mission + loyalty status.

## KPIs and metrics

Segment conversion/value, CAC/LTV by segment, share within segment.

## Related skills

`customer-research.ideal-customer-profile`, `customer-research.firmographic-segmentation`,
`market-research.pestle-analysis`.

## MCP mappings

- Prompts: `create_marketing_strategy`, `generate_buyer_persona`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
