---
id: market-research.competitor-positioning-analysis
name: Competitor Positioning Analysis
version: 1.0.0
status: stable
description: Analyse how competitors position, message and differentiate to find a defensible, distinct position for the brand.
category: market-research
sub_category: competitors
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [find-differentiation, inform-positioning]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 1-3 days
required_inputs: [own-brand, competitor-set-or-category, target-market]
optional_inputs: [pricing, messaging-samples, review-data]
outputs: [positioning-map, differentiation-opportunities, evidence-grade]
related_skills: [market-research.swot-analysis, positioning.positioning-statement, market-research.share-of-voice-analysis]
resources: [marketing://frameworks/positioning]
mcp_prompts: [analyse_competitors]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [competitors, positioning, differentiation]
---

## Overview

A structured comparison of competitor positioning, messaging, proof and pricing to locate an
open, credible and defensible position for the brand.

## Business purpose

Distinct positioning lowers acquisition cost and improves conversion. Copying competitors
commoditises the category and forces a price war.

## When to use / when not to use

- **Use** before positioning, GTM or a rebrand.
- **Do not use** to fabricate competitor internals; work only from observable evidence.

## Inputs

### Required
- Own brand, competitor set (or category), target market.

### Optional
- Public pricing, messaging samples, review/complaint themes.

## Outputs

- A **positioning map** on two decision-relevant axes.
- **Differentiation opportunities** ranked by defensibility and audience relevance.
- An **evidence grade** per claim (observed / inferred / assumed).

## Methodology

1. Confirm the competitor set (direct, indirect, substitute) and the audience's real
   alternatives.
2. Collect observable signals: homepage promise, category language, proof points, pricing
   model, tone, and review themes.
3. Choose two axes that reflect how buyers actually decide (not vanity axes).
4. Plot competitors and identify white space that is both credible for the brand and valued
   by the audience.
5. Grade every data point by evidence quality; never present inference as fact.
6. Recommend a candidate position and the proof required to own it.

## Decision rules

- Reject white space the brand cannot credibly deliver or defend.
- Prefer axes tied to purchase criteria over abstract traits.
- Do not fabricate proprietary competitor data (revenue, internal metrics).

## Quality checklist

- [ ] Competitor set reflects real buyer alternatives.
- [ ] Axes reflect purchase criteria.
- [ ] Every claim carries an evidence grade.
- [ ] Recommended position is credible and defensible.

## Compliance checklist

- [ ] No scraped private data or IP infringement.
- [ ] Comparative claims are fair and substantiable; flag any that need legal review.

## Failure conditions and escalation

- No competitor set or market → `insufficient_data`.
- Reliance on unverifiable data → downgrade evidence grade and warn.

## Examples

- **SaaS:** Crowded "all-in-one" space → position on a specific workflow + integration depth.
- **E-commerce:** Undifferentiated price competition → position on provenance/quality + proof.
- **Real estate:** Sameness among agencies → position on local specialism and transparency.
- **Retail:** Big-box competition → position on curation, service and community.

## KPIs and metrics

Message resonance (qualitative), branded search lift, win rate vs named competitors, share of
voice (directional).

## Related skills

`market-research.swot-analysis`, `positioning.positioning-statement`,
`market-research.share-of-voice-analysis`.

## MCP mappings

- Resources: `marketing://frameworks/positioning`
- Prompts: `analyse_competitors`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
