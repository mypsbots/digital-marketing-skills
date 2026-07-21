---
id: paid-search.campaign-architecture
name: Paid Search Campaign Architecture
version: 1.0.0
status: stable
description: Design a scalable paid-search account structure (campaigns, ad groups, match types, themes) aligned to intent and budget control.
category: paid-search
sub_category: structure
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
channels: [paid-search]
objectives: [efficient-capture, budget-control]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [objective, budget, target-market, conversion-definition]
optional_inputs: [keywords, landing-pages, account-data]
outputs: [account-structure, ad-group-themes, settings-recommendations]
related_skills: [paid-search.keyword-planning, paid-search.search-ad-copy, paid-search.bid-strategy-selection]
resources: [marketing://policies/google-ads/policies]
mcp_prompts: [plan_google_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, ppc, structure]
---

## Overview

A clean, intent-aligned account structure that makes budgets controllable, testing meaningful
and reporting clear. Planning only — launching or changing live campaigns requires approval.

## Business purpose

Structure determines how efficiently budget maps to intent and how easily performance can be
optimised.

## When to use / when not to use

- **Use** to plan or restructure a paid-search account.
- **Do not use** to launch or edit live campaigns without approval.

## Inputs

### Required
- Objective, budget, target market, conversion definition.

### Optional
- Keywords, landing pages, existing account data.

## Outputs

- An **account structure** (campaigns → ad groups).
- **Ad-group themes** by intent.
- **Settings recommendations** (networks, geo, schedule, bidding intent).

## Methodology

1. Segment campaigns by objective, budget control and match/theme (brand vs non-brand,
   generic vs high-intent, by product/service line, by geo where budgets differ).
2. Build tightly-themed ad groups so ads and landing pages align to intent.
3. Plan match-type and negative strategy to control query matching.
4. Align each ad group to a specific landing page.
5. Recommend conversion tracking, geo, schedule and bid-strategy intent.

## Decision rules

- Separate brand and non-brand for clean measurement and control.
- Keep ad groups tightly themed for relevance/Quality Score.
- Do not overspend on broad match without strong negatives and monitoring.

## Quality checklist

- [ ] Structure maps to intent and budget control.
- [ ] Each ad group has a matching landing page.
- [ ] Negative strategy planned.
- [ ] Conversion tracking specified.

## Compliance checklist

- [ ] Ad policy compliance considered (restricted categories flagged).
- [ ] Trademark rules respected.
- [ ] Landing-page claims substantiated.

## Failure conditions and escalation

- Missing objective/budget/conversion → `insufficient_data`.
- Launch/edit of live campaigns → requires approval (`marketing_request_approval`).

## Examples

- **SaaS:** brand / non-brand / competitor (policy-compliant) / high-intent solution terms.
- **E-commerce:** Shopping + brand + category search.
- **Real estate:** geo-segmented service campaigns.
- **Retail:** local high-intent + brand.

## KPIs and metrics

CPA/CPL, conversion rate, impression share, wasted spend, Quality Score (directional).

## Related skills

`paid-search.keyword-planning`, `paid-search.search-ad-copy`,
`paid-search.bid-strategy-selection`.

## MCP mappings

- Resources: `marketing://policies/google-ads/policies`
- Prompts: `plan_google_ads`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
