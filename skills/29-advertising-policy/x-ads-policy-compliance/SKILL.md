---
id: ads-policy.x-ads-policy-compliance
name: X (Twitter) Ads Policy Compliance
version: 1.0.0
status: stable
description: Review X (Twitter) ad content, targeting and destinations against X advertising policies, including restricted political-content rules. Summary, not legal advice.
category: advertising-policy
sub_category: x-twitter
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions]
outputs: [policy-findings, rejection-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, ads-policy.restricted-industry-advertising, platform.x-twitter-content]
resources: [marketing://policies/x-ads, marketing://policies/catalogue]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [x-ads, twitter, policy]
---

## Overview

Screens an X (Twitter) ad against X's advertising policies — prohibited/restricted content,
deceptive-content rules, and its restricted, certification-dependent political-content advertising.

> **Important:** Summary only; policies change and vary by region. Verify at
> `business.x.com/help/ads-policies` and route regulated/high-risk ads to legal. Not legal advice.

## Business purpose

Compliance avoids rejections/account issues and keeps campaigns delivering on X.

## When to use / when not to use

- **Use** before launching/editing X ads.
- **Do not use** as legal sign-off, or to run uncertified political/prohibited content.

## Inputs

### Required
- Ad content, destination URL, product or vertical.

### Optional
- Targeting, regions.

## Outputs

- **Policy findings** (prohibited/restricted/deceptive).
- **Rejection risks**.
- **Required changes**.

## Methodology

1. Check prohibited content: illegal/dangerous products, weapons, drugs, tobacco, adult, hate/abuse,
   malware, counterfeit.
2. Check deceptive/misleading-claim rules.
3. Check restricted verticals: alcohol, gambling, financial services, health.
4. Check political-content rules (restricted; certification/region-dependent).
5. Output required changes; escalate regulated content.

## Decision rules

- Prohibited content = block.
- Political advertising only where permitted and certified.
- Restricted verticals only under conditions.

## Quality checklist

- [ ] Prohibited + deceptive checked.
- [ ] Restricted verticals reviewed.
- [ ] Political-content rules verified.

## Compliance checklist

- [ ] Cross-checked against X ad policies.
- [ ] Political certification where applicable.
- [ ] Regulated content escalated.

## Failure conditions and escalation

- Missing ad content/destination/vertical → `insufficient_data`.
- Prohibited/political/regulated content → escalate.

## Examples

- **SaaS:** claim/deception review on promoted posts.
- **E-commerce:** restricted-product eligibility.
- **Real estate:** financial-claim review.
- **Retail:** alcohol/age rules by region.

## KPIs and metrics

Rejection rate, account health, time-to-approval.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ads-policy.restricted-industry-advertising`,
`platform.x-twitter-content`.

## MCP mappings

- Resources: `marketing://policies/x-ads`, `marketing://policies/catalogue`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
