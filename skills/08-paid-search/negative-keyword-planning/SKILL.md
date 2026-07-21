---
id: paid-search.negative-keyword-planning
name: Negative Keyword Planning
version: 1.0.0
status: stable
description: Plan negative keywords and lists to block irrelevant queries, cut wasted spend and protect match relevance across paid search campaigns.
category: paid-search
sub_category: efficiency
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [reduce-waste, improve-relevance]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [campaign-themes-or-keywords]
optional_inputs: [search-terms-report, brand-terms, competitor-terms]
outputs: [negative-keyword-lists, match-type-guidance, structure-recommendations]
related_skills: [paid-search.keyword-planning, paid-search.campaign-architecture, paid-search.landing-page-alignment]
resources: [marketing://policies/google-ads/policies]
mcp_prompts: [plan_google_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, negatives, efficiency]
---

## Overview

Builds negative keyword lists (account/campaign/ad-group) and match-type rules to prevent ads
showing on irrelevant, low-intent or off-brand queries — a primary lever for reducing wasted spend.

## Business purpose

Negatives directly cut wasted clicks, improving CPA and relevance without touching bids.

## When to use / when not to use

- **Use** to plan negatives before/after launch and during optimisation.
- **Do not use** to block high-intent queries or over-restrict to the point of throttling volume.

## Inputs

### Required
- Campaign themes or keywords.

### Optional
- Search-terms report, brand terms, competitor terms.

## Outputs

- **Negative keyword lists** by level with match types.
- **Match-type guidance**.
- **Structure recommendations** (shared lists, brand/non-brand separation).

## Methodology

1. Predict irrelevant query themes (informational, wrong intent, unrelated products).
2. Mine the search-terms report (if available) for wasted spend.
3. Decide match types for negatives (careful with phrase/exact scope).
4. Organise into shared/campaign/ad-group lists; separate brand vs non-brand.
5. Set a review cadence to keep lists current.

## Decision rules

- Never negate high-intent/converting queries.
- Use precise negative match types to avoid over-blocking.
- Review search terms regularly.

## Quality checklist

- [ ] Irrelevant themes covered.
- [ ] Match types deliberate.
- [ ] Lists organised by level.

## Compliance checklist

- [ ] Platform policies respected.
- [ ] No trademark misuse in term choices.

## Failure conditions and escalation

- No themes/keywords → `insufficient_data`.
- Live account changes → human approval.

## Examples

- **SaaS:** negate "free", "jobs", "tutorial" where off-intent.
- **E-commerce:** negate wrong sizes/brands/"repair".
- **Real estate:** negate "rent" on sales campaigns.
- **Retail:** negate out-of-area or unrelated products.

## KPIs and metrics

Wasted-spend reduction, CTR/quality relevance, CPA.

## Related skills

`paid-search.keyword-planning`, `paid-search.campaign-architecture`,
`paid-search.landing-page-alignment`.

## MCP mappings

- Resources: `marketing://policies/google-ads/policies`
- Prompts: `plan_google_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
