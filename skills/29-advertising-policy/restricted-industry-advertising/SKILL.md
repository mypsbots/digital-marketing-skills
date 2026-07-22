---
id: ads-policy.restricted-industry-advertising
name: Restricted Industry Advertising
version: 1.0.0
status: stable
description: Assess whether a restricted vertical (alcohol, gambling, financial, health/pharma, crypto, CBD, dating) can be advertised on a given network and what certifications, gating and disclosures are required. Not legal advice.
category: advertising-policy
sub_category: cross-network
industries: [common, ecommerce, retail, saas]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-ad-compliance, avoid-rejection]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [industry-or-product, network, regions]
optional_inputs: [certifications-held, target-audience]
outputs: [eligibility-verdict, required-certifications, gating-and-disclosures]
related_skills: [ads-policy.ad-policy-preflight-review, ads-policy.google-ads-policy-compliance, compliance.marketing-compliance-assessment]
resources: [marketing://policies/catalogue, marketing://compliance-rules]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [restricted-industries, alcohol, gambling, financial, health]
---

## Overview

For a restricted vertical — alcohol, gambling, financial services, healthcare/pharma, crypto, CBD/
supplements, dating — determines whether ads are **eligible** on a given network/region and what
**certifications, age/geo gating, and disclosures** are required to run legally and within policy.

> **Important:** Summary only; restricted-vertical rules change frequently and are region-specific.
> Verify against the network's official policy and local law; route to legal. Not legal advice.

## Business purpose

Restricted verticals are the most common source of blanket disapprovals and account bans; knowing
eligibility and requirements up front prevents wasted spend and account loss.

## When to use / when not to use

- **Use** before advertising any restricted/regulated product on any network.
- **Do not use** to disguise a restricted product to evade review.

## Inputs

### Required
- Industry or product, network, regions.

### Optional
- Certifications held, target audience.

## Outputs

- An **eligibility verdict** (allowed / allowed-with-conditions / prohibited) per network+region.
- **Required certifications** (e.g. gambling licence, financial authorisation).
- **Gating and disclosures** (age/geo gating, mandatory disclaimers).

## Methodology

1. Classify the product against restricted-industry definitions.
2. For the network+region, determine eligibility and required certifications.
3. Define age/geo gating and audience restrictions (no minors, permitted regions only).
4. Define mandatory disclosures (APR/terms, responsible-gambling, health disclaimers).
5. Output verdict + requirements; escalate to legal where regulated.

## Decision rules

- No certification/authorisation held ⇒ not eligible until obtained.
- Always apply age/geo gating for age-restricted products.
- Prohibited-in-region ⇒ do not run.

## Quality checklist

- [ ] Product correctly classified.
- [ ] Eligibility + certifications determined.
- [ ] Gating + disclosures defined.

## Compliance checklist

- [ ] Cross-checked against network policy + local law.
- [ ] Certifications verified as held.
- [ ] Legal review for regulated verticals.

## Failure conditions and escalation

- Missing product/network/region → `insufficient_data`.
- Regulated/licensed vertical → legal review before launch.

## Examples

- **Alcohol (retail):** age/geo gating + responsible messaging.
- **Fintech:** authorisation + APR/terms disclosures.
- **Gambling:** licence + region + responsible-gambling.
- **Health/supplements:** claim limits + disclaimers.

## KPIs and metrics

Eligibility-check accuracy, restricted-vertical disapproval rate, account bans avoided.

## Related skills

`ads-policy.ad-policy-preflight-review`, `ads-policy.google-ads-policy-compliance`,
`compliance.marketing-compliance-assessment`.

## MCP mappings

- Resources: `marketing://policies/catalogue`, `marketing://compliance-rules`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
