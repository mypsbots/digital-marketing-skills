---
id: ads-policy.linkedin-ads-policy-compliance
name: LinkedIn Ads Policy Compliance
version: 1.0.0
status: stable
description: Review LinkedIn ad content, targeting and destinations against LinkedIn advertising policies for the professional context. Summary, not legal advice.
category: advertising-policy
sub_category: linkedin
industries: [common, saas, real-estate, retail]
business_models: [b2b, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions]
outputs: [policy-findings, targeting-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, ads-policy.special-ad-categories-compliance, platform.linkedin-content]
resources: [marketing://policies/linkedin-ads, marketing://policies/catalogue]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [linkedin-ads, policy, compliance]
---

## Overview

Screens a LinkedIn ad against LinkedIn's advertising policies — prohibited/restricted content,
professional-context standards, and restrictions on targeting by sensitive/protected attributes.

> **Important:** Summary only; policies change and vary by region. Verify at
> `linkedin.com/legal/ads-policy` and route regulated/high-risk ads to legal. Not legal advice.

## Business purpose

LinkedIn's B2B inventory is premium; rejections and restrictions waste high CPMs. Compliance keeps
campaigns delivering.

## When to use / when not to use

- **Use** before launching/editing LinkedIn ads.
- **Do not use** as legal sign-off or to target on protected attributes.

## Inputs

### Required
- Ad content, destination URL, product or vertical.

### Optional
- Targeting, regions.

## Outputs

- **Policy findings** (prohibited/restricted/professional-standards).
- **Targeting risks** (sensitive-attribute/special-category).
- **Required changes**.

## Methodology

1. Check prohibited content: illegal, weapons, drugs, tobacco, adult, hate/discrimination,
   deceptive/false claims, infringement.
2. Check restricted verticals: alcohol, gambling, financial services, political (restricted),
   dating (restricted).
3. Check professional-context standards (tone, no sensational/clickbait).
4. Check targeting: no protected/sensitive attributes; apply special-category rules where relevant.
5. Confirm sponsored-content identification; output required changes.

## Decision rules

- Keep content professional and non-deceptive.
- No targeting on protected/sensitive characteristics.
- Restricted verticals only under stated conditions.

## Quality checklist

- [ ] Prohibited/restricted content checked.
- [ ] Professional standards + destination.
- [ ] Targeting compliance verified.

## Compliance checklist

- [ ] Cross-checked against LinkedIn ad policies.
- [ ] Sensitive-attribute targeting avoided.
- [ ] Regulated content escalated.

## Failure conditions and escalation

- Missing ad content/destination/vertical → `insufficient_data`.
- Prohibited/regulated content → escalate.

## Examples

- **SaaS:** B2B lead-gen ad claims/targeting review.
- **B2B services:** professional-tone + proof check.
- **Real estate (commercial):** financial-claim review.
- **Retail (B2B):** trade-offer compliance.

## KPIs and metrics

Rejection rate, delivery health, time-to-approval.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ads-policy.special-ad-categories-compliance`,
`platform.linkedin-content`.

## MCP mappings

- Resources: `marketing://policies/linkedin-ads`, `marketing://policies/catalogue`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
