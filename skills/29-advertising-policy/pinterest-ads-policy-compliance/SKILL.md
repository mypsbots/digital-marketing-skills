---
id: ads-policy.pinterest-ads-policy-compliance
name: Pinterest Ads Policy Compliance
version: 1.0.0
status: stable
description: Review Pinterest ad creative, targeting and destinations against Pinterest advertising guidelines before submission. Summary, not legal advice.
category: advertising-policy
sub_category: pinterest
industries: [common, ecommerce, retail, real-estate]
business_models: [b2c, d2c, b2b2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions]
outputs: [policy-findings, rejection-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, ads-policy.restricted-industry-advertising, platform.pinterest-content]
resources: [marketing://policies/pinterest-ads, marketing://policies/catalogue]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [pinterest-ads, policy, compliance]
---

## Overview

Screens a Pinterest ad against Pinterest's advertising guidelines — prohibited/restricted content,
creative-quality standards, and its notable rules against body-shaming/negative self-image and
sensational content.

> **Important:** Summary only; policies change and vary by region. Verify at
> `policy.pinterest.com/advertising-guidelines` and route regulated/high-risk ads to legal. Not
> legal advice.

## Business purpose

Pinterest rejects low-quality or non-compliant creative; compliance protects reach on a high-intent
visual-discovery platform.

## When to use / when not to use

- **Use** before launching/editing Pinterest ads.
- **Do not use** as legal sign-off or to run prohibited/deceptive creative.

## Inputs

### Required
- Ad content, destination URL, product or vertical.

### Optional
- Targeting, regions.

## Outputs

- **Policy findings** (prohibited/restricted/creative-quality).
- **Rejection risks**.
- **Required changes**.

## Methodology

1. Check prohibited content: illegal/dangerous products, weapons, drugs, tobacco, adult, hate.
2. Check Pinterest-specific rules: no body-shaming/negative self-image; no sensational/shocking;
   no misleading claims.
3. Check restricted verticals: alcohol, financial services, health/wellness claims, political.
4. Check creative quality and destination accuracy/relevance.
5. Output required changes; escalate regulated content.

## Decision rules

- No body-shaming or negative self-image messaging.
- Prohibited content = block; restricted only under conditions.
- High-quality, accurate, non-deceptive creative and destinations.

## Quality checklist

- [ ] Prohibited + Pinterest-specific rules checked.
- [ ] Restricted verticals reviewed.
- [ ] Creative quality + destination.

## Compliance checklist

- [ ] Cross-checked against Pinterest guidelines.
- [ ] Health/financial claims substantiated.
- [ ] Regulated content escalated.

## Failure conditions and escalation

- Missing ad content/destination/vertical → `insufficient_data`.
- Prohibited/regulated content → escalate.

## Examples

- **E-commerce:** product creative + claim review.
- **Retail:** seasonal promo compliance.
- **Real estate:** listing creative accuracy.
- **Common:** wellness-claim/self-image review.

## KPIs and metrics

Rejection rate, delivery health, time-to-approval.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ads-policy.restricted-industry-advertising`,
`platform.pinterest-content`.

## MCP mappings

- Resources: `marketing://policies/pinterest-ads`, `marketing://policies/catalogue`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
