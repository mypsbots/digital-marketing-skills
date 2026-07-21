---
id: content-production.ugc-brief
name: UGC Brief
version: 1.0.0
status: stable
description: Brief creators/customers to produce authentic user-generated content with clear direction, disclosure requirements, usage rights and honest messaging.
category: content-production
sub_category: creator
industries: [common, ecommerce, retail, saas]
business_models: [b2c, d2c, b2b2c, b2b]
funnel_stages: [awareness, consideration, decision]
objectives: [build-trust, scale-authentic-content]
risk_level: medium
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [product-or-message, creator-or-audience]
optional_inputs: [brand-guidelines, do-and-dont, offer]
outputs: [ugc-brief, content-direction, disclosure-and-rights]
related_skills: [content-production.short-form-video-script, paid-social.creative-brief-development, offer-and-messaging.claim-substantiation-checklist]
resources: [marketing://compliance-rules]
mcp_prompts: [create_content_brief]
data_sensitivity: internal
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ugc, creator, authentic]
---

## Overview

Provides creators or customers a brief for authentic UGC — the message and hooks to explore, do's
and don'ts, mandatory disclosures (#ad/partnership), usage rights, and claim limits — preserving
authenticity while staying compliant.

## Business purpose

UGC builds trust and scales native-feeling content; unmanaged UGC risks false claims and
disclosure/rights violations.

## When to use / when not to use

- **Use** to direct creator/customer content for organic or paid use.
- **Do not use** to script inauthentic testimonials, hide sponsorship, or encourage unsupported claims.

## Inputs

### Required
- Product or message, creator or audience.

### Optional
- Brand guidelines, do-and-don't, offer.

## Outputs

- A **UGC brief** (goal, message, hooks to try).
- **Content direction** (formats, do's/don'ts, examples) preserving creator voice.
- **Disclosure and rights** (FTC/ASA disclosure, usage licence, whitelisting).

## Methodology

1. Define the goal and core message; leave room for creator authenticity.
2. Suggest hooks/angles and formats without over-scripting.
3. Specify mandatory disclosures and honest-claim boundaries.
4. Secure usage rights/licensing and whitelisting terms.
5. Set review/approval and performance expectations.

## Decision rules

- Preserve authentic creator voice; avoid rigid scripts.
- Require clear sponsorship disclosure.
- Only substantiated claims; secure rights before use.

## Quality checklist

- [ ] Clear goal + message, creator freedom.
- [ ] Disclosure + claim boundaries.
- [ ] Usage rights secured.

## Compliance checklist

- [ ] FTC/ASA disclosure (#ad).
- [ ] Claims substantiated; rights/consent obtained.
- [ ] PII/likeness handled lawfully.

## Failure conditions and escalation

- Missing product/creator → `insufficient_data`.
- Health/finance claims → legal review.

## Examples

- **E-commerce:** unboxing/try-on with #ad + rights.
- **Retail:** in-store haul, disclosed.
- **SaaS:** customer workflow testimonial (verified).
- **B2C services:** authentic result story with disclosure.

## KPIs and metrics

Engagement/CTR of UGC, conversion lift, cost per authentic asset, trust.

## Related skills

`content-production.short-form-video-script`, `paid-social.creative-brief-development`,
`offer-and-messaging.claim-substantiation-checklist`.

## MCP mappings

- Resources: `marketing://compliance-rules`
- Prompts: `create_content_brief`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
