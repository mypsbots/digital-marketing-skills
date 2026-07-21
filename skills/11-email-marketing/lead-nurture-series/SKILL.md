---
id: email.lead-nurture-series
name: Lead Nurture Email Series
version: 1.0.0
status: stable
description: Design a consent-based lead-nurture email series that builds trust and moves leads toward conversion, with suppression and compliance checks.
category: email-marketing
sub_category: lifecycle
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
channels: [email]
objectives: [nurture-leads, improve-conversion]
risk_level: high
execution_mode: planning
human_approval_required: true
estimated_duration: days
required_inputs: [segment, objective, offer]
optional_inputs: [esp, existing-content, consent-status]
outputs: [sequence-map, email-briefs, compliance-checks]
related_skills: [email.email-body-creation, email.email-deliverability-assessment, compliance.email-permission-assessment]
resources: [marketing://policies/email/anti-spam]
mcp_prompts: [email_nurture_sequence]
data_sensitivity: confidential
pii_expected: true
external_side_effects: true
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [email, nurture, lifecycle]
---

## Overview

A planned nurture sequence that delivers value and addresses objections over time, designed to
be sent only to consenting, suppressed-checked recipients. Sending requires human approval.

## Business purpose

Nurture converts not-yet-ready leads efficiently and improves lead-to-customer rates.

## When to use / when not to use

- **Use** to plan nurture for opted-in leads.
- **Do not use** to email non-consenting contacts or bypass suppression.

## Inputs

### Required
- Segment, objective, offer.

### Optional
- ESP, existing content, consent status.

## Outputs

- A **sequence map** (triggers, timing, goals per email).
- **Email briefs** (subject, angle, CTA).
- **Compliance checks** (consent, suppression, unsubscribe, sender identity).

## Methodology

1. Define the entry trigger and the desired next action.
2. Map 4–7 emails: welcome/value → education → proof → objection-handling → offer.
3. Set timing and exit conditions (converted/unsubscribed).
4. Brief each email (one goal, one primary CTA).
5. Specify personalisation using only permitted data.
6. Run compliance checks before any send.

## Decision rules

- Only send to consented contacts; honour suppression and unsubscribes immediately.
- One primary CTA per email.
- Value before ask; avoid over-mailing.

## Quality checklist

- [ ] Clear goal/CTA per email.
- [ ] Sensible timing and exits.
- [ ] Personalisation uses permitted data only.

## Compliance checklist

- [ ] Lawful basis/consent verified (GDPR/PECR/CAN-SPAM as applicable).
- [ ] Suppression and unsubscribe honoured; physical address/sender identity present.
- [ ] Spam-risk reviewed; no deceptive subject lines.

## Failure conditions and escalation

- No consent basis → block; do not send.
- Missing segment/objective/offer → `insufficient_data`.
- Sending → requires approval (`marketing_request_approval`).

## Examples

- **SaaS:** trial nurture toward activation and upgrade.
- **E-commerce:** post-signup welcome + first-purchase incentive.
- **Real estate:** buyer nurture with listings and process guidance.
- **Retail:** welcome + loyalty enrolment.

## KPIs and metrics

Open (directional), CTOR, conversion, unsubscribe/complaint rate, revenue per email.

## Related skills

`email.email-body-creation`, `email.email-deliverability-assessment`,
`compliance.email-permission-assessment`.

## MCP mappings

- Resources: `marketing://policies/email/anti-spam`
- Prompts: `email_nurture_sequence`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
