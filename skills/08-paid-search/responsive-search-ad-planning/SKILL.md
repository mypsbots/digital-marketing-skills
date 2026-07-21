---
id: paid-search.responsive-search-ad-planning
name: Responsive Search Ad Planning
version: 1.0.0
status: stable
description: Plan responsive search ad assets (headlines, descriptions, pinning) aligned to keywords and intent, maximising ad strength without misleading claims.
category: paid-search
sub_category: creative
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [improve-relevance, improve-ctr]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [ad-group-theme, keywords, offer]
optional_inputs: [brand-voice, landing-page, usp]
outputs: [rsa-assets, pinning-plan, asset-guidance]
related_skills: [paid-search.search-ad-copy, paid-search.landing-page-alignment, offer-and-messaging.cta-creation]
resources: [marketing://policies/google-ads/policies]
mcp_prompts: [plan_google_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, rsa, creative]
---

## Overview

Plans a full responsive search ad: distinct headlines and descriptions covering benefits, USPs,
CTAs and keyword relevance, with a sensible pinning strategy — built for strong ad strength and
honest, policy-compliant claims.

## Business purpose

Well-structured RSA assets improve relevance, ad strength, CTR and Quality Score.

## When to use / when not to use

- **Use** to build RSA assets for an ad group.
- **Do not use** for misleading claims, excessive pinning that defeats optimisation, or
  trademark/policy violations.

## Inputs

### Required
- Ad-group theme, keywords, offer.

### Optional
- Brand voice, landing page, USP.

## Outputs

- **RSA assets** (headlines + descriptions, varied angles).
- A **pinning plan** (pin only where necessary).
- **Asset guidance** (relevance, diversity, ad strength).

## Methodology

1. Reflect the ad-group theme/keywords for relevance.
2. Write diverse headlines: benefit, USP, keyword, CTA, trust, offer.
3. Write descriptions expanding value + CTA; keep within limits.
4. Pin sparingly (only claims that must always show, e.g. legal/price).
5. Aim for high ad strength and alignment with the landing page.

## Decision rules

- Maximise asset diversity; avoid redundancy.
- Pin only when required; over-pinning hurts optimisation.
- Claims must be accurate and policy-compliant.

## Quality checklist

- [ ] Diverse, relevant headlines/descriptions.
- [ ] Minimal, justified pinning.
- [ ] Landing-page match.

## Compliance checklist

- [ ] Ad policies and trademark rules respected.
- [ ] Claims substantiated.

## Failure conditions and escalation

- Missing theme/keywords/offer → `insufficient_data`.
- Live ad publishing → human approval.

## Examples

- **SaaS:** headlines on outcome + free trial + integration.
- **E-commerce:** offer + delivery + returns trust.
- **Real estate:** local + speed + valuation CTA.
- **Retail:** in-store + price + availability.

## KPIs and metrics

Ad strength, CTR, Quality Score, conversion rate.

## Related skills

`paid-search.search-ad-copy`, `paid-search.landing-page-alignment`,
`offer-and-messaging.cta-creation`.

## MCP mappings

- Resources: `marketing://policies/google-ads/policies`
- Prompts: `plan_google_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
