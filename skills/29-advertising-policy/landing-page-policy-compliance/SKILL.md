---
id: ads-policy.landing-page-policy-compliance
name: Landing Page Policy Compliance
version: 1.0.0
status: stable
description: Review an ad's destination/landing page against network destination requirements - functional, relevant, transparent, no cloaking, honest claims, and required legal pages. Not legal advice.
category: advertising-policy
sub_category: cross-network
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [ensure-ad-compliance, avoid-disapproval]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [destination-url, ad-content, network]
optional_inputs: [product-or-vertical, regions]
outputs: [destination-findings, disapproval-risks, required-changes]
related_skills: [ads-policy.ad-policy-preflight-review, paid-search.landing-page-alignment, cro.landing-page-audit]
resources: [marketing://policies/catalogue]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [landing-page, destination, cloaking, policy]
---

## Overview

Reviews an ad's **destination** against ad-network requirements: the page must be functional,
relevant to the ad, transparent about the business and offer, free of cloaking/circumvention, honest
in its claims, and carry required legal pages (privacy, terms, contact) and any regulated
disclosures.

> **Important:** Summary only; destination policies change and vary by network/region. Verify against
> each network's official policy centre. Not legal advice.

## Business purpose

Destination violations (broken pages, mismatched offers, cloaking, missing legal pages) are a top
cause of disapprovals and suspensions even when the ad itself is fine.

## When to use / when not to use

- **Use** for every ad, alongside content review, before launch.
- **Do not use** to justify cloaking or a bait-and-switch destination.

## Inputs

### Required
- Destination URL, ad content, network.

### Optional
- Product or vertical, regions.

## Outputs

- **Destination findings** (functionality/relevance/transparency/claims/legal).
- **Disapproval risks**.
- **Required changes**.

## Methodology

1. **Functionality:** page loads, works on mobile, no broken elements, safe (no malware).
2. **Relevance:** page matches the ad's offer/keyword/intent (no mismatch).
3. **Transparency:** clear business identity, contact, and offer terms.
4. **No cloaking:** users and reviewers see the same page; no circumvention.
5. **Claims + legal:** claims honest/substantiated; privacy/terms present; regulated disclosures
   (pricing/APR/health) as required; output changes.

## Decision rules

- Broken/malware/cloaked destination = block.
- Ad-to-page mismatch must be fixed before launch.
- Regulated offers need the required legal pages/disclosures.

## Quality checklist

- [ ] Functionality + safety checked.
- [ ] Relevance/transparency verified.
- [ ] Claims + legal pages present.

## Compliance checklist

- [ ] Cross-checked against network destination policy.
- [ ] No cloaking/circumvention.
- [ ] Regulated disclosures present.

## Failure conditions and escalation

- Missing URL/ad/network → `insufficient_data`.
- Cloaking/malware/regulated gaps → block; escalate.

## Examples

- **SaaS:** ad-to-page message-match + privacy/terms.
- **E-commerce:** product page relevance + pricing accuracy.
- **Real estate:** listing accuracy + contact/legal.
- **Retail:** promo landing works + terms present.

## KPIs and metrics

Destination-related disapprovals, landing-page quality issues, time-to-approval.

## Related skills

`ads-policy.ad-policy-preflight-review`, `paid-search.landing-page-alignment`,
`cro.landing-page-audit`.

## MCP mappings

- Resources: `marketing://policies/catalogue`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
