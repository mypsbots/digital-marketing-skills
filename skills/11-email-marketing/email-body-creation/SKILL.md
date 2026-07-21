---
id: email.email-body-creation
name: Email Body Creation
version: 1.0.0
status: stable
description: Write clear, on-brand marketing email bodies with one goal, strong structure, honest claims and accessible formatting.
category: email-marketing
sub_category: copy
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
channels: [email]
objectives: [improve-engagement, drive-action]
risk_level: medium
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [email-goal, audience, offer-or-message]
optional_inputs: [brand-voice, proof-points]
outputs: [email-body, subject-and-preview-options]
related_skills: [email.email-subject-line-generation, email.lead-nurture-series, offer-and-messaging.cta-creation]
resources: [marketing://policies/email/anti-spam]
mcp_prompts: [email_nurture_sequence]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [email, copywriting]
---

## Overview

Produces an email body focused on a single goal with a clear structure (hook, value, proof,
CTA) and accessible, deliverability-friendly formatting.

## Business purpose

Well-written email drives action and protects sender reputation.

## When to use / when not to use

- **Use** to draft marketing email content.
- **Do not use** to write deceptive subject lines or unsubstantiated claims.

## Inputs

### Required
- Email goal, audience, offer/message.

### Optional
- Brand voice, proof points.

## Outputs

- An **email body** with one clear CTA.
- **Subject and preview** options (for testing).

## Methodology

1. Define the single goal and CTA.
2. Open with a relevant hook; keep to the point.
3. Present value and proof; use scannable structure.
4. Place a clear primary CTA (and optional secondary).
5. Provide accessible formatting (alt text, contrast, plain-text friendly).
6. Draft 2–3 subject/preview options for testing.

## Decision rules

- One primary goal/CTA per email.
- Honest subject lines that match the body.
- Avoid spam-trigger patterns and excessive images-only content.

## Quality checklist

- [ ] Single goal/CTA.
- [ ] Scannable and on-brand.
- [ ] Claims supported.
- [ ] Accessible formatting.

## Compliance checklist

- [ ] No deceptive subject/preview.
- [ ] Unsubscribe and sender identity present (template-level).
- [ ] Regulated claims flagged.

## Failure conditions and escalation

- Missing goal/audience/message → `insufficient_data`.

## Examples

- **SaaS:** feature-adoption nudge with one CTA to the feature.
- **E-commerce:** offer email with clear shop CTA.
- **Real estate:** new-listing alert matching saved criteria.
- **Retail:** event/offer invite with store CTA.

## KPIs and metrics

CTOR, conversion, unsubscribe/complaint rate, revenue per email.

## Related skills

`email.email-subject-line-generation`, `email.lead-nurture-series`,
`offer-and-messaging.cta-creation`.

## MCP mappings

- Resources: `marketing://policies/email/anti-spam`
- Prompts: `email_nurture_sequence`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
