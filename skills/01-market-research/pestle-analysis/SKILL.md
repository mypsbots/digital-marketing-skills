---
id: market-research.pestle-analysis
name: PESTLE Analysis
version: 1.0.0
status: stable
description: Analyse Political, Economic, Social, Technological, Legal and Environmental macro factors and translate them into marketing opportunities and risks.
category: market-research
sub_category: macro-analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [understand-context, anticipate-risk]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [market-or-region, category]
optional_inputs: [time-horizon, known-trends]
outputs: [pestle-findings, opportunities, risks, implications]
related_skills: [market-research.swot-analysis, market-research.market-segmentation, strategy.annual-marketing-strategy]
resources: []
mcp_prompts: [analyse_competitors, create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [pestle, macro, research]
---

## Overview

Examines macro-environmental factors — Political, Economic, Social, Technological, Legal,
Environmental — and converts each into concrete marketing implications, opportunities and risks,
grading the evidence.

## Business purpose

Macro forces shape demand, channels and compliance; anticipating them de-risks strategy.

## When to use / when not to use

- **Use** to frame external context before strategy or market entry.
- **Do not use** to present speculation as fact; grade evidence and note uncertainty.

## Inputs

### Required
- Market/region, category.

### Optional
- Time horizon, known trends.

## Outputs

- **PESTLE findings** per factor.
- **Opportunities** and **risks**.
- Marketing **implications** with evidence grade.

## Methodology

1. For each factor, identify the most material forces for this market/category.
2. Assess direction, magnitude and likelihood; grade the evidence.
3. Translate each into a marketing implication (demand, channel, message, compliance).
4. Separate opportunities from risks and prioritise.
5. Feed into SWOT and strategy.

## Decision rules

- Focus on material, decision-relevant factors, not an exhaustive list.
- Grade evidence; flag assumptions and uncertainty.
- Always translate factors into marketing implications.

## Quality checklist

- [ ] All six factors considered; material ones deepened.
- [ ] Implications, not just observations.
- [ ] Evidence graded.

## Compliance checklist

- [ ] Legal/regulatory factors flagged for specialist review where material.

## Failure conditions and escalation

- Missing market/category → `insufficient_data`.

## Examples

- **SaaS:** data-regulation shifts affecting positioning and compliance.
- **E-commerce:** economic sentiment affecting discretionary spend.
- **Real estate:** interest-rate/policy effects on demand.
- **Retail:** local economic and environmental/packaging rules.

## KPIs and metrics

Qualitative; informs strategy assumptions and scenario planning.

## Related skills

`market-research.swot-analysis`, `market-research.market-segmentation`,
`strategy.annual-marketing-strategy`.

## MCP mappings

- Prompts: `analyse_competitors`, `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
