---
id: ads-policy.meta-ads-policy-compliance
name: Meta Ads Policy Compliance
version: 1.0.0
status: stable
description: Review Meta ads (Facebook & Instagram) content, targeting and destinations against Meta Advertising Standards, incl. special ad categories. Summary, not legal advice.
category: advertising-policy
sub_category: meta
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions, special-category]
outputs: [policy-findings, special-category-flags, required-changes]
related_skills: [ads-policy.special-ad-categories-compliance, ads-policy.ad-policy-preflight-review, paid-social.creative-brief-development]
resources: [marketing://policies/meta-ads, marketing://policies/catalogue]
mcp_prompts: [plan_meta_ads, review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [meta-ads, facebook, instagram, policy]
---

## Overview

Screens a Meta ad — for Facebook and Instagram placements — against Meta's Advertising Standards:
prohibited content, the **personal attributes** rule, restricted verticals, **Special Ad
Categories** targeting limits, and required disclosures.

> **Important:** Facebook and Instagram share Meta's Advertising Standards (placement/format
> differs, not policy). This is a summary; policies change and vary by region. Verify at
> `facebook.com/policies/ads` and route regulated/high-risk ads to legal. Not legal advice.

## Business purpose

Meta rejections, account/Business-Manager restrictions and ad-account bans are costly; pre-flight
review protects delivery and account standing.

## When to use / when not to use

- **Use** before launching/editing Facebook or Instagram ads.
- **Do not use** as legal sign-off, or to evade prohibited-content or personal-attributes rules.

## Inputs

### Required
- Ad content, destination URL, product or vertical.

### Optional
- Targeting, regions, special category.

## Outputs

- **Policy findings** (prohibited/restricted/personal-attributes).
- **Special-category flags** (credit/employment/housing/social-political).
- **Required changes**.

## Methodology

1. Check prohibited content: illegal, discriminatory, tobacco/drugs/weapons, adult, infringing,
   sensational/shocking, misinformation.
2. Check the **personal attributes** rule: no copy implying/asserting knowledge of protected/
   sensitive traits ("Are you diabetic?" → violation; reframe to general).
3. Check restricted verticals: alcohol, dating, gambling, financial/crypto, health/wellness (no
   negative body image/BMI), social/political.
4. Determine if the ad falls in a **Special Ad Category**; if so, apply restricted targeting.
5. Verify disclosures (political authorisation + "Paid for by", AI-content where required); output
   required changes.

## Decision rules

- Personal-attributes violations are common — always reframe to non-personal language.
- Special Ad Category ⇒ restricted targeting is mandatory, not optional.
- Restricted verticals require the specific authorisation/region conditions.

## Quality checklist

- [ ] Prohibited content + personal-attributes checked.
- [ ] Restricted verticals reviewed.
- [ ] Special-category + disclosures verified.

## Compliance checklist

- [ ] Cross-checked against Meta Advertising Standards.
- [ ] Special Ad Category targeting applied where relevant.
- [ ] Regulated/high-risk content escalated to legal.

## Failure conditions and escalation

- Missing ad content/destination/vertical → `insufficient_data`.
- Prohibited/regulated content → escalate; do not submit.

## Examples

- **SaaS:** B2B financing ad → Credit special category.
- **E-commerce:** health-supplement claim + body-image review.
- **Real estate:** listing ad → Housing special category targeting.
- **Retail:** alcohol age/region rules.

## KPIs and metrics

Rejection rate, account-restriction incidents, time-to-approval.

## Related skills

`ads-policy.special-ad-categories-compliance`, `ads-policy.ad-policy-preflight-review`,
`paid-social.creative-brief-development`.

## MCP mappings

- Resources: `marketing://policies/meta-ads`, `marketing://policies/catalogue`
- Prompts: `plan_meta_ads`, `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
