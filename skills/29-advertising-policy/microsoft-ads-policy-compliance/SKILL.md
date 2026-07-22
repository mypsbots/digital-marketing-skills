---
id: ads-policy.microsoft-ads-policy-compliance
name: Microsoft Advertising Policy Compliance
version: 1.0.0
status: stable
description: Review Microsoft Advertising (Bing) ad content, targeting and destinations against Microsoft ad policies before submission. Summary, not legal advice.
category: advertising-policy
sub_category: microsoft
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [ensure-ad-compliance, avoid-disapproval]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions]
outputs: [policy-findings, disapproval-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, ads-policy.google-ads-policy-compliance, paid-search.search-ad-copy]
resources: [marketing://policies/microsoft-ads, marketing://policies/catalogue]
mcp_prompts: [plan_google_ads, review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [microsoft-ads, bing, policy]
---

## Overview

Screens a Microsoft Advertising (Bing) ad against Microsoft ad policies — prohibited/restricted
content, editorial/technical rules, and targeting restrictions. Rules broadly parallel Google's but
have their own specifics.

> **Important:** Summary only; policies change and vary by region. Verify at
> `about.ads.microsoft.com/resources/policies` and route regulated/high-risk ads to legal. Not
> legal advice.

## Business purpose

Compliance prevents disapprovals and account issues on Bing/Microsoft Audience Network and keeps
search campaigns delivering.

## When to use / when not to use

- **Use** before launching/editing Microsoft Advertising campaigns.
- **Do not use** as legal sign-off or to bypass prohibited-content rules.

## Inputs

### Required
- Ad content, destination URL, product or vertical.

### Optional
- Targeting, regions.

## Outputs

- **Policy findings** (prohibited/restricted/editorial).
- **Disapproval risks**.
- **Required changes**.

## Methodology

1. Check prohibited content: counterfeit, dangerous products/weapons/drugs, dishonest-behaviour
   enablement, offensive/inappropriate content.
2. Check restricted verticals: adult, alcohol, gambling, healthcare/pharmacy, financial, trademarks.
3. Check editorial/technical: accuracy, functional/relevant destination, clear formatting.
4. Check targeting/sensitive-category and housing/employment/credit rules (US).
5. Output required changes; escalate regulated content.

## Decision rules

- Prohibited content = block.
- Restricted verticals only with required conditions.
- Destination must be functional, accurate and relevant.

## Quality checklist

- [ ] Prohibited + restricted checked.
- [ ] Editorial/technical + destination.
- [ ] Targeting rules verified.

## Compliance checklist

- [ ] Cross-checked against Microsoft ad policies.
- [ ] Restricted verticals meet conditions.
- [ ] Regulated content escalated.

## Failure conditions and escalation

- Missing ad content/destination/vertical → `insufficient_data`.
- Prohibited/regulated content → escalate.

## Examples

- **SaaS:** trademark/claim review on search ads.
- **E-commerce:** restricted-product + pricing claims.
- **Real estate:** housing targeting rules (US).
- **Retail:** pharmacy/health product rules.

## KPIs and metrics

Disapproval rate, account health, time-to-approval.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ads-policy.google-ads-policy-compliance`,
`paid-search.search-ad-copy`.

## MCP mappings

- Resources: `marketing://policies/microsoft-ads`, `marketing://policies/catalogue`
- Prompts: `plan_google_ads`, `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
