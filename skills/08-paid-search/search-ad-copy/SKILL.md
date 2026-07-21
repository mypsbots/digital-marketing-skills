---
id: paid-search.search-ad-copy
name: Search Ad Copy
version: 1.0.0
status: stable
description: Write responsive search ad copy (headlines, descriptions, assets) that matches intent, differentiates and complies with policy.
category: paid-search
sub_category: creative
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
channels: [paid-search]
objectives: [improve-ctr, improve-conversion]
risk_level: medium
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [ad-group-theme, value-proposition, landing-page]
optional_inputs: [offer, competitor-messaging]
outputs: [headlines, descriptions, asset-recommendations]
related_skills: [paid-search.responsive-search-ad-planning, paid-search.landing-page-alignment, offer-and-messaging.cta-creation]
resources: [marketing://policies/google-ads/policies]
mcp_prompts: [plan_google_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, ad-copy, rsa]
---

## Overview

Produces intent-matched, differentiated and compliant responsive search ad assets aligned to
the landing page.

## Business purpose

Ad copy affects CTR, Quality Score and conversion; strong copy lowers CPA.

## When to use / when not to use

- **Use** to create/refresh search ad assets.
- **Do not use** to make unsubstantiated claims or misleading offers.

## Inputs

### Required
- Ad-group theme, value proposition, landing page.

### Optional
- Offer, competitor messaging.

## Outputs

- **Headlines** (multiple, varied angles).
- **Descriptions**.
- **Asset recommendations** (sitelinks, callouts, structured snippets).

## Methodology

1. Reflect the query intent in at least some headlines.
2. Lead with the differentiated benefit; include proof and a clear CTA.
3. Vary angles (benefit, offer, trust, urgency-if-true) for RSA testing.
4. Ensure message match with the landing page.
5. Check character limits and policy compliance.

## Decision rules

- Include the core keyword/intent in headlines where natural.
- No unverified claims, superlatives without proof, or false urgency.
- Align promise to landing-page reality.

## Quality checklist

- [ ] Intent reflected; benefit-led.
- [ ] Varied angles for testing.
- [ ] Message match to landing page.
- [ ] Within limits and policy-compliant.

## Compliance checklist

- [ ] Claims substantiated; regulated claims flagged.
- [ ] No trademark/policy violations.
- [ ] Pricing/offers accurate.

## Failure conditions and escalation

- Missing theme/value prop/landing page → `insufficient_data`.
- Launch → requires approval.

## Examples

- **SaaS:** "Onboard hires 3x faster — free trial" (with proof) + feature sitelinks.
- **E-commerce:** benefit + shipping + genuine offer.
- **Real estate:** "Free valuation in [area] — book online".
- **Retail:** "In stock at [store] — reserve online".

## KPIs and metrics

CTR, conversion rate, CPA, Quality Score (directional), policy approval rate.

## Related skills

`paid-search.responsive-search-ad-planning`, `paid-search.landing-page-alignment`,
`offer-and-messaging.cta-creation`.

## MCP mappings

- Resources: `marketing://policies/google-ads/policies`
- Prompts: `plan_google_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
