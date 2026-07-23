---
id: market-research.perceptual-positioning-map
name: Perceptual Positioning Map
version: 1.0.0
status: stable
description: Build a perceptual map plotting brands on the two attributes buyers care about most to reveal positioning, crowding and white-space opportunities.
category: market-research
sub_category: positioning-analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [understand-context, differentiate-offer]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [category, competitor-set, buyer-decision-attributes]
optional_inputs: [customer-perception-data, survey-data, review-mining]
outputs: [perceptual-map, positioning-gaps, white-space-opportunities]
related_skills: [strategy.positioning-strategy, market-research.competitor-positioning-analysis, market-research.market-segmentation, offer-and-messaging.messaging-framework]
resources: []
mcp_prompts: [analyse_competitors, create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [perceptual-map, positioning, differentiation, white-space]
---

## Overview

Constructs a perceptual (positioning) map: choose the two attributes that most drive buyer
choice, place them on X and Y axes, and plot each brand by how buyers perceive it — revealing
where the category is crowded, where a brand actually sits vs where it wants to, and where
defensible white space exists.

## Business purpose

Positioning is relative; a map makes competitive perception visual, exposing differentiation
opportunities and misalignment between intended and perceived position.

## When to use / when not to use

- **Use** to find differentiation white space, validate a positioning choice, or brief messaging.
- **Do not use** with axes that don't matter to buyers, or by plotting on opinion alone — ground
  in perception data where possible and label confidence.

## Inputs

### Required
- Category, competitor set, buyer decision attributes.

### Optional
- Customer perception data, survey data, review mining.

## Outputs

- A **perceptual map** with brands plotted on two buyer-relevant axes.
- **Positioning gaps** (intended vs perceived; crowded zones).
- **White-space opportunities** (viable, defensible, demanded).

## Methodology

1. Identify the attributes that most drive choice in the category (not vanity attributes).
2. Select two (or run several maps) for the axes; define poles clearly.
3. Gather perception evidence (surveys, reviews, interviews) rather than internal opinion.
4. Plot each competitor and your brand by perceived position.
5. Identify crowded zones, your true vs desired position, and open white space.
6. Validate white space is genuinely valued and defensible (not empty for a reason).
7. Feed conclusions into positioning strategy and messaging.

## Decision rules

- Axes must reflect real buyer decision drivers.
- Prefer perception data over internal assumption; grade confidence.
- White space is only an opportunity if buyers want it and you can own it.

## Quality checklist

- [ ] Axes are buyer-relevant decision drivers.
- [ ] Positions grounded in evidence where possible.
- [ ] White space validated for demand and defensibility.

## Compliance checklist

- [ ] Perception/survey data collected and stored lawfully.
- [ ] Competitor claims fair and substantiated.

## Failure conditions and escalation

- Missing category/competitor/attribute inputs → `insufficient_data`.
- Perception data involving PII → privacy review.

## Examples

- **SaaS:** price vs depth-of-features; find under-served simple-yet-powerful space.
- **E-commerce:** premium vs value against sustainability; spot demanded white space.
- **Real estate:** service level vs fee model perception.
- **Retail:** convenience vs experience positioning across competitors.

## KPIs and metrics

Qualitative; informs positioning strategy, messaging differentiation, and brand tracking over time.

## Related skills

`strategy.positioning-strategy`, `market-research.competitor-positioning-analysis`,
`market-research.market-segmentation`, `offer-and-messaging.messaging-framework`.

## MCP mappings

- Prompts: `analyse_competitors`, `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
