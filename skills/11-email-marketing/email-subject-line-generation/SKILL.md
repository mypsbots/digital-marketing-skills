---
id: email.email-subject-line-generation
name: Email Subject Line Generation
version: 1.0.0
status: stable
description: Generate relevant, honest, high-open-rate subject lines and preview text matched to the email content and audience, avoiding spam triggers and deception.
category: email-marketing
sub_category: copy
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [improve-open-rate, drive-engagement]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes
required_inputs: [email-purpose-or-content, audience]
optional_inputs: [brand-voice, personalisation-tokens]
outputs: [subject-line-variants, preview-text, testing-guidance]
related_skills: [email.email-body-creation, email.email-deliverability-assessment, offer-and-messaging.cta-creation]
resources: [marketing://policies/email/anti-spam]
mcp_prompts: [email_nurture_sequence]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [email, subject-line, copy]
---

## Overview

Produces subject-line and preview-text variants that accurately represent the email, spark
relevant curiosity or value, render well on mobile, and avoid spammy or deceptive patterns — ready
for A/B testing.

## Business purpose

Subject lines gate opens; honest, relevant lines lift engagement without harming deliverability or
trust.

## When to use / when not to use

- **Use** to create/test subject lines for a specific email.
- **Do not use** deceptive subjects (false "Re:", fake urgency) that violate anti-spam rules.

## Inputs

### Required
- Email purpose or content, audience.

### Optional
- Brand voice, personalisation tokens.

## Outputs

- **Subject-line variants** across angles.
- **Preview text** complementing the subject.
- **Testing guidance**.

## Methodology

1. Anchor to the email's actual value/content (no bait).
2. Generate variants: value, curiosity, personalisation, urgency (genuine), question.
3. Optimise length for mobile; pair with preview text.
4. Avoid spam-trigger patterns and ALL-CAPS/excess punctuation.
5. Recommend an A/B test with a clear metric.

## Decision rules

- Subject must reflect the email honestly.
- No deceptive "Re:/Fwd:" or false urgency.
- Optimise for mobile truncation.

## Quality checklist

- [ ] Accurate to content.
- [ ] Multiple angles + preview text.
- [ ] Mobile-friendly length.

## Compliance checklist

- [ ] Anti-spam rules (no deceptive subjects).
- [ ] Claims substantiated.

## Failure conditions and escalation

- Missing purpose/audience → `insufficient_data`.

## Examples

- **SaaS:** "Your trial ends Friday — here's what to do".
- **E-commerce:** "Back in stock: [item]".
- **Real estate:** "3 new listings in [area]".
- **Retail:** "Members: early access starts today".

## KPIs and metrics

Open rate, click-to-open, spam-complaint rate.

## Related skills

`email.email-body-creation`, `email.email-deliverability-assessment`,
`offer-and-messaging.cta-creation`.

## MCP mappings

- Resources: `marketing://policies/email/anti-spam`
- Prompts: `email_nurture_sequence`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
