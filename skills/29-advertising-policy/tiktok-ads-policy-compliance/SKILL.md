---
id: ads-policy.tiktok-ads-policy-compliance
name: TikTok Ads Policy Compliance
version: 1.0.0
status: stable
description: Review TikTok ad creative, targeting and destinations against TikTok advertising policies (incl. prohibited political ads, audio licensing, youth protections). Summary, not legal advice.
category: advertising-policy
sub_category: tiktok
industries: [common, ecommerce, retail, saas]
business_models: [b2c, d2c, b2b2c, b2b]
funnel_stages: [awareness, consideration]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions, audio-source]
outputs: [policy-findings, rejection-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, ads-policy.restricted-industry-advertising, content-production.short-form-video-script]
resources: [marketing://policies/tiktok-ads, marketing://policies/catalogue]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [tiktok-ads, policy, compliance]
---

## Overview

Screens a TikTok ad against TikTok's advertising policies: prohibited content (including
**political advertising, which is prohibited**), restricted verticals, audio/music licensing,
creative quality, and youth-audience protections.

> **Important:** Summary only; TikTok policies change and vary by region. Verify at
> `ads.tiktok.com/help` and route regulated/high-risk ads to legal. Not legal advice.

## Business purpose

TikTok rejects non-compliant or low-quality creative and restricts accounts; pre-flight review
protects delivery and spend.

## When to use / when not to use

- **Use** before launching/editing TikTok ads.
- **Do not use** as legal sign-off, or to run political ads (prohibited) or unlicensed audio.

## Inputs

### Required
- Ad content, destination URL, product or vertical.

### Optional
- Targeting, regions, audio source.

## Outputs

- **Policy findings** (prohibited/restricted/creative/audio).
- **Rejection risks**.
- **Required changes**.

## Methodology

1. Check prohibited content: illegal/dangerous products, weapons, drugs, tobacco/vaping, adult,
   hate, shocking/violent, **political advertising**.
2. Check restricted verticals per region (alcohol, gambling, financial, health).
3. Check audio/music licensing (use commercially-cleared/licensed audio).
4. Check creative quality/authenticity rules (no misleading, low-quality, or deceptive creative).
5. Check youth-audience protections/age gating; output required changes.

## Decision rules

- Political advertising is not allowed — block.
- Use only commercially-licensed audio in ads.
- Restricted verticals only where regionally permitted with conditions.

## Quality checklist

- [ ] Prohibited (incl. political) checked.
- [ ] Restricted verticals + audio licensing.
- [ ] Creative quality + youth protections.

## Compliance checklist

- [ ] Cross-checked against TikTok ad policies.
- [ ] Audio rights cleared; disclosures present.
- [ ] Regulated content escalated.

## Failure conditions and escalation

- Missing ad content/destination/vertical → `insufficient_data`.
- Political/prohibited content → block; escalate.

## Examples

- **E-commerce:** product demo audio-licensing + claims check.
- **Retail:** age-gated product region rules.
- **SaaS:** B2B creative authenticity/quality.
- **Common:** restricted-vertical eligibility by region.

## KPIs and metrics

Rejection rate, account restrictions, time-to-approval.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ads-policy.restricted-industry-advertising`,
`content-production.short-form-video-script`.

## MCP mappings

- Resources: `marketing://policies/tiktok-ads`, `marketing://policies/catalogue`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
