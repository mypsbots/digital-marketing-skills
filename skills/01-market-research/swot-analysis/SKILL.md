---
id: market-research.swot-analysis
name: SWOT Analysis
version: 1.0.0
status: stable
description: Produce an evidence-based SWOT that converts into prioritised, actionable strategic moves.
category: market-research
sub_category: strategy-analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [assess-position, inform-strategy]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [business-context, market-context]
optional_inputs: [competitor-analysis, performance-data]
outputs: [swot-matrix, strategic-moves]
related_skills: [market-research.competitor-positioning-analysis, market-research.pestle-analysis, strategy.annual-marketing-strategy]
resources: []
mcp_prompts: [analyse_competitors]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [swot, strategy]
---

## Overview

A disciplined SWOT that avoids generic bullet lists by grading evidence and translating the
matrix into TOWS strategic moves (SO/ST/WO/WT).

## Business purpose

SWOT is only useful if it drives decisions. This skill forces each entry to be evidenced and
converted into a prioritised move.

## When to use / when not to use

- **Use** as an input to strategy or GTM.
- **Do not use** as the sole basis for major investment; pair with quantitative analysis.

## Inputs

### Required
- Business context (capabilities, assets) and market context (trends, competition).

### Optional
- Competitor analysis, performance data.

## Outputs

- A **SWOT matrix** with evidence grades.
- **Strategic moves** via TOWS, prioritised.

## Methodology

1. Gather internal factors (strengths/weaknesses) and external factors
   (opportunities/threats), each with evidence.
2. Keep internal vs external strictly separate (a market trend is not a strength).
3. Grade each item (fact / inference / assumption).
4. Apply TOWS: combine to create SO (leverage), ST (defend), WO (improve), WT (mitigate) moves.
5. Prioritise moves by impact × confidence ÷ effort.

## Decision rules

- Discard unevidenced entries or mark clearly as assumptions.
- Every high-priority move must trace to at least one SWOT pairing.

## Quality checklist

- [ ] Internal/external not confused.
- [ ] Evidence grades present.
- [ ] TOWS moves prioritised and actionable.

## Compliance checklist

- [ ] No confidential/third-party data misused.
- [ ] Regulatory threats flagged for specialist review.

## Failure conditions and escalation

- Insufficient context → `insufficient_data`.

## Examples

- **SaaS:** Strength (integration depth) + opportunity (new category) → SO: integration-led GTM.
- **E-commerce:** Weakness (retention) + threat (rising CAC) → WT: lifecycle programme.
- **Real estate:** Strength (local reputation) → SO: local content and reviews.
- **Retail:** Threat (online competition) + strength (service) → ST: omnichannel service edge.

## KPIs and metrics

Tracked via the resulting strategic initiatives, not SWOT itself.

## Related skills

`market-research.competitor-positioning-analysis`, `market-research.pestle-analysis`,
`strategy.annual-marketing-strategy`.

## MCP mappings

- Prompts: `analyse_competitors`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
