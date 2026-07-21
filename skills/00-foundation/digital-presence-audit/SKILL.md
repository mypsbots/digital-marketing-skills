---
id: foundation.digital-presence-audit
name: Digital Presence Audit
version: 1.0.0
status: stable
description: >-
  Audit an organisation's owned, earned and paid digital footprint (website, search, social,
  reviews, listings) to identify visibility, credibility and conversion gaps.
category: foundation
sub_category: discovery
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [organic-search, organic-social, local, content]
objectives: [establish-baseline, improve-visibility, improve-credibility]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 1-3 days
required_inputs: [website-url, brand-name, target-market]
optional_inputs: [analytics-access, competitor-list, social-profiles]
outputs: [presence-inventory, findings-by-surface, prioritised-fixes]
dependencies: []
related_skills:
  - foundation.marketing-maturity-assessment
  - seo.seo-audit
  - community-reputation.reputation-monitoring
resources: [marketing://channels/catalogue]
mcp_tools: [marketing_fetch_analytics]
mcp_prompts: [audit_digital_marketing]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [audit, presence, visibility, discovery]
---

## Overview

A rapid, structured inventory of every place a prospect encounters the brand online, scored
for visibility, credibility and conversion readiness. It is the "map of the territory" before
any channel strategy.

## Business purpose

Buyers research across many surfaces (search, social, reviews, marketplaces, listings) before
converting. Weaknesses on any high-intent surface silently lose demand. This audit finds those
weak points quickly.

## When to use / when not to use

- **Use** at onboarding, before a relaunch, or when acquisition feels inefficient.
- **Do not use** as a substitute for a deep technical SEO audit (`seo.technical-seo-audit`).

## Inputs

### Required
- Website URL, brand name, target market/locale.

### Optional
- Read-only analytics, competitor list, known social profiles.

## Outputs

- **Presence inventory** across surfaces with status (present/incomplete/absent).
- **Findings by surface** with severity and evidence.
- **Prioritised fixes** with effort and expected (qualified) impact.

## Methodology

1. **Inventory surfaces:** website, blog, organic search visibility, Google Business Profile
   and map listings, review platforms, each relevant social profile, marketplaces, app stores,
   directories and comparison sites relevant to the industry.
2. **Assess each surface** on three axes: visibility (findable?), credibility (trust signals,
   recency, reviews), conversion readiness (clear next step, working forms, mobile).
3. **Capture evidence** (screenshots, URLs, metrics). Separate observed facts from assumptions.
4. **Check consistency:** NAP (name/address/phone), branding, messaging and claims across
   surfaces.
5. **Score and prioritise** fixes by impact × confidence ÷ effort.

## Decision rules

- Broken or missing conversion paths on high-intent surfaces are always top priority.
- Inconsistent NAP or contradictory claims are credibility risks; flag immediately.
- If a surface is irrelevant to the audience, mark N/A and explain rather than forcing it.

## Quality checklist

- [ ] Every relevant surface inventoried, with N/A justified where excluded.
- [ ] Findings evidenced; facts vs assumptions separated.
- [ ] Fixes prioritised with effort and qualified impact.
- [ ] No guarantees of ranking, traffic or leads.

## Compliance checklist

- [ ] Claims and testimonials observed are flagged if potentially unsubstantiated.
- [ ] Accessibility issues on key pages noted.
- [ ] Regional advertising/privacy concerns flagged for specialist review.

## Failure conditions and escalation

- Missing website/market → `insufficient_data`.
- If regulated claims or accessibility failures are found, escalate to specialist review.

## Examples

- **SaaS:** Strong site, thin review-platform presence (G2/Capterra) → prioritise review
  generation and comparison pages.
- **E-commerce:** Great product pages, weak marketplace and reviews → prioritise reviews and
  feed presence.
- **Real estate:** Incomplete Google Business Profile, inconsistent NAP → fix listings first.
- **Retail:** Store hours wrong across listings → correct local data before promotion.

## KPIs and metrics

Branded search visibility, review count/rating, listing completeness %, conversion-path
health, cross-surface consistency score.

## Related skills

`foundation.marketing-maturity-assessment`, `seo.seo-audit`, `seo.local-seo-audit`,
`community-reputation.reputation-monitoring`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `audit_digital_marketing`
- Tools: `marketing_fetch_analytics`, `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
