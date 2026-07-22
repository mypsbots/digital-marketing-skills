---
id: ads-policy.ad-disclosure-and-transparency
name: Ad Disclosure and Transparency
version: 1.0.0
status: stable
description: Ensure ads carry required disclosures - paid/sponsored labels, influencer #ad disclosure, political "paid for by", and AI-generated content labels - per platform and regulator rules. Not legal advice.
category: advertising-policy
sub_category: cross-network
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-transparency, ensure-ad-compliance]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes
required_inputs: [ad-or-content, ad-type, network]
optional_inputs: [is-influencer, is-political, uses-ai-content, regions]
outputs: [required-disclosures, placement-guidance, gaps]
related_skills: [ads-policy.ad-policy-preflight-review, offer-and-messaging.ethical-persuasion-review, content-production.ugc-brief]
resources: [marketing://policies/catalogue, marketing://compliance-rules]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [disclosure, transparency, ftc, influencer, political, ai-content]
---

## Overview

Checks that an ad or paid content carries the disclosures required by platform policy and regulators
(e.g. FTC, ASA): paid/sponsored labels, influencer/affiliate disclosure (`#ad`), political
"paid for by" disclaimers, and AI-generated/altered-content labels — and that they are clear,
prominent and correctly placed.

> **Important:** Summary only; disclosure rules vary by regulator, region and platform and change
> often. Verify against platform policy and regulator guidance (FTC/ASA/etc.); route political and
> regulated content to legal. Not legal advice.

## Business purpose

Missing/unclear disclosures cause takedowns, regulator action, fines and trust damage. Getting them
right protects the brand and creators.

## When to use / when not to use

- **Use** for any paid, sponsored, influencer, affiliate, political, or AI-generated ad/content.
- **Do not use** to design disclosures that are technically present but deliberately hard to notice.

## Inputs

### Required
- Ad or content, ad type, network.

### Optional
- Whether influencer, political, uses AI content; regions.

## Outputs

- **Required disclosures** for the case.
- **Placement guidance** (prominence, position, wording).
- **Gaps** where disclosures are missing/insufficient.

## Methodology

1. Classify the content: paid ad, influencer/affiliate, political/social, AI-generated/altered.
2. List required disclosures per platform + regulator for that classification and region.
3. Check presence, clarity, prominence and placement (not buried in hashtags/links).
4. Check platform-native disclosure tools are used (branded-content/paid-partnership labels).
5. Output gaps and specific fixes.

## Decision rules

- Disclosures must be clear, prominent and understandable — not hidden.
- Use platform-native paid-partnership tools where available.
- Political/AI-content disclosures are mandatory where required — never optional.

## Quality checklist

- [ ] Content classified correctly.
- [ ] Required disclosures listed + checked.
- [ ] Placement/prominence adequate.

## Compliance checklist

- [ ] Cross-checked against platform + regulator guidance.
- [ ] Influencer/affiliate `#ad` present and clear.
- [ ] Political/AI-content disclosures escalated as needed.

## Failure conditions and escalation

- Missing content/type/network → `insufficient_data`.
- Political/regulated disclosure → legal review.

## Examples

- **Influencer (retail):** `#ad` + paid-partnership label.
- **SaaS:** affiliate disclosure on comparison content.
- **Political:** "paid for by" + authorisation.
- **Any:** AI-generated imagery label where required.

## KPIs and metrics

Disclosure-compliance rate, takedowns/complaints avoided, regulator incidents.

## Related skills

`ads-policy.ad-policy-preflight-review`, `offer-and-messaging.ethical-persuasion-review`,
`content-production.ugc-brief`.

## MCP mappings

- Resources: `marketing://policies/catalogue`, `marketing://compliance-rules`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
