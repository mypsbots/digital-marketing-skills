---
id: ads-policy.amazon-ads-policy-compliance
name: Amazon Ads Policy Compliance
version: 1.0.0
status: stable
description: Review Amazon Ads (Sponsored Ads, DSP) creative, claims and destinations against Amazon advertising and creative-acceptance policies. Summary, not legal advice.
category: advertising-policy
sub_category: amazon
industries: [ecommerce, retail, common]
business_models: [b2c, d2c, b2b2c]
funnel_stages: [consideration, decision]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, product-or-vertical]
optional_inputs: [destination-url, marketplace, claims]
outputs: [policy-findings, rejection-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, ecommerce.product-feed-optimisation, offer-and-messaging.claim-substantiation-checklist]
resources: [marketing://policies/amazon-ads, marketing://policies/catalogue]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [amazon-ads, retail-media, policy]
---

## Overview

Screens an Amazon Ads asset (Sponsored Products/Brands/Display, DSP) against Amazon's advertising
and creative-acceptance policies — prohibited/restricted products, claim substantiation, pricing/
savings-claim rules, competitor-reference limits, and destination rules.

> **Important:** Summary only; policies change and vary by marketplace. Verify at
> `advertising.amazon.com/resources/ad-policy` and route regulated/high-risk ads to legal. Not
> legal advice.

## Business purpose

Amazon rejects non-compliant creative and can suspend campaigns; compliance protects retail-media
spend and Buy Box/visibility.

## When to use / when not to use

- **Use** before submitting Amazon Sponsored/DSP creative.
- **Do not use** as legal sign-off, or to make unverifiable price/health claims.

## Inputs

### Required
- Ad content, product or vertical.

### Optional
- Destination URL, marketplace, claims.

## Outputs

- **Policy findings** (prohibited/restricted/claims/creative).
- **Rejection risks**.
- **Required changes**.

## Methodology

1. Check prohibited/illegal/unsafe/counterfeit products for the marketplace.
2. Check claim substantiation (no unverifiable "best", health, or savings claims).
3. Check pricing/savings-claim and competitor-reference rules.
4. Check creative-acceptance rules (language, quality, no external links unless permitted,
   functional destination).
5. Check restricted categories (alcohol, supplements/health) per marketplace; output changes.

## Decision rules

- Claims must be verifiable and substantiated.
- No prohibited/counterfeit/unsafe products.
- Follow creative-acceptance (language, destination, competitor-reference) rules.

## Quality checklist

- [ ] Prohibited/restricted products checked.
- [ ] Claims substantiated; pricing rules met.
- [ ] Creative-acceptance + destination.

## Compliance checklist

- [ ] Cross-checked against Amazon ad policies.
- [ ] Health/supplement claims substantiated.
- [ ] Regulated content escalated.

## Failure conditions and escalation

- Missing ad content/product → `insufficient_data`.
- Prohibited/regulated products/claims → escalate.

## Examples

- **E-commerce:** Sponsored Brands claim + savings review.
- **Retail:** supplement/health claim substantiation.
- **Common:** competitor-reference and language rules.

## KPIs and metrics

Creative rejection rate, campaign approval time, policy suspensions avoided.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ecommerce.product-feed-optimisation`,
`offer-and-messaging.claim-substantiation-checklist`.

## MCP mappings

- Resources: `marketing://policies/amazon-ads`, `marketing://policies/catalogue`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
