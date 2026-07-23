---
id: market-research.porters-five-forces
name: Porter's Five Forces Analysis
version: 1.0.0
status: stable
description: Assess industry attractiveness and competitive pressure across the five forces and translate each into marketing positioning, channel and pricing implications.
category: market-research
sub_category: industry-analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [understand-context, anticipate-risk, differentiate-offer]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [market-or-category, competitive-landscape]
optional_inputs: [supplier-and-buyer-data, substitute-products, entry-barriers]
outputs: [five-forces-findings, attractiveness-assessment, marketing-implications]
related_skills: [market-research.swot-analysis, market-research.pestle-analysis, market-research.competitor-positioning-analysis, strategy.positioning-strategy, strategy.pricing-strategy]
resources: []
mcp_prompts: [analyse_competitors, create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [porter, five-forces, industry-analysis, competition]
---

## Overview

Analyses the structural competitive pressure in an industry across five forces — rivalry among
existing competitors, threat of new entrants, threat of substitutes, bargaining power of buyers
and bargaining power of suppliers — and converts each into marketing implications for
positioning, differentiation, channel and pricing.

## Business purpose

Industry structure determines how much value a business can capture; understanding the forces
guides where to differentiate, how to price, and which channels/partnerships to defend.

## When to use / when not to use

- **Use** to assess a market's attractiveness before entry, or to explain competitive pressure
  shaping strategy and pricing.
- **Do not use** as a one-off snapshot treated as permanent; revisit as the market shifts, and
  do not present assumptions as verified fact.

## Inputs

### Required
- Market/category, competitive landscape.

### Optional
- Supplier and buyer data, substitute products, entry barriers.

## Outputs

- **Five-forces findings** (rated pressure per force with evidence).
- An **attractiveness assessment** (overall and by force).
- **Marketing implications** for positioning, differentiation, channel and pricing.

## Methodology

1. Rivalry: assess number/strength of competitors, growth, differentiation, switching costs.
2. New entrants: gauge barriers (capital, brand, network effects, regulation).
3. Substitutes: identify alternative ways buyers meet the same need and their price/performance.
4. Buyer power: concentration, price sensitivity, switching costs, information availability.
5. Supplier power: concentration, uniqueness, switching costs for inputs/platforms.
6. Rate each force (low/medium/high) with evidence and grade confidence.
7. Translate the overall picture into positioning, differentiation, pricing and channel moves.

## Decision rules

- Focus on the forces most material to value capture in this market.
- Grade evidence; separate observed facts from assumptions.
- Always end in marketing/strategic implications, not just ratings.

## Quality checklist

- [ ] All five forces assessed with evidence.
- [ ] Overall attractiveness synthesised, not just per-force.
- [ ] Implications for positioning/pricing/channel stated.

## Compliance checklist

- [ ] Competitive-intelligence sources lawful and non-confidential.
- [ ] No anti-competitive coordination implied or recommended.

## Failure conditions and escalation

- Missing market/competitive data → `insufficient_data`.
- Signals of collusion/anti-competitive practice → legal review.

## Examples

- **SaaS:** low entry barriers + high substitute threat → differentiate on integrations/switching costs.
- **E-commerce:** high buyer power and price transparency → compete on experience, not price alone.
- **Real estate:** local rivalry and substitutes (DIY/portals) → service differentiation.
- **Retail:** supplier power and private-label substitutes → assortment and loyalty strategy.

## KPIs and metrics

Qualitative; informs positioning, pricing strategy, and scenario planning assumptions.

## Related skills

`market-research.swot-analysis`, `market-research.pestle-analysis`,
`market-research.competitor-positioning-analysis`, `strategy.positioning-strategy`,
`strategy.pricing-strategy`.

## MCP mappings

- Prompts: `analyse_competitors`, `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
