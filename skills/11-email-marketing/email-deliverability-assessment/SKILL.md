---
id: email.email-deliverability-assessment
name: Email Deliverability Assessment
version: 1.0.0
status: stable
description: Assess factors affecting inbox placement — authentication, list hygiene, reputation, engagement, content and consent — and prioritise remediation.
category: email-marketing
sub_category: deliverability
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [improve-inbox-placement, protect-reputation]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [sending-setup-or-metrics]
optional_inputs: [authentication-records, engagement-data, list-practices]
outputs: [deliverability-findings, risk-areas, remediation-plan]
related_skills: [email.email-body-creation, compliance.email-permission-assessment, email.lead-nurture-series]
resources: [marketing://policies/email/anti-spam]
mcp_prompts: [email_nurture_sequence, review_compliance]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [email, deliverability, reputation]
---

## Overview

Reviews the drivers of inbox placement — authentication (SPF/DKIM/DMARC), sender reputation, list
hygiene and consent, engagement signals, content/spam factors, and infrastructure — then
prioritises fixes to protect the sending program.

## Business purpose

Email only works if it reaches the inbox; deliverability problems silently destroy program ROI.

## When to use / when not to use

- **Use** to diagnose or prevent deliverability issues.
- **Do not use** to justify mailing non-consented or purchased lists (root cause of many issues).

## Inputs

### Required
- Sending setup or metrics.

### Optional
- Authentication records, engagement data, list practices.

## Outputs

- **Deliverability findings** across factors.
- **Risk areas** ranked.
- A **remediation plan**.

## Methodology

1. Verify authentication (SPF/DKIM/DMARC) and domain/IP reputation basics.
2. Review list hygiene: consent source, bounce handling, sunsetting inactive.
3. Check engagement signals (opens/clicks vs complaints/spam traps).
4. Assess content/spam factors and sending patterns (volume ramps, consistency).
5. Prioritise remediation by placement impact.

## Decision rules

- Consent + engagement are the foundation of deliverability.
- Authenticate all sending domains.
- Sunset unengaged contacts; never buy lists.

## Quality checklist

- [ ] Authentication verified.
- [ ] List hygiene/consent reviewed.
- [ ] Remediation prioritised.

## Compliance checklist

- [ ] Consent + anti-spam (unsubscribe, sender ID) verified.
- [ ] PII handled securely.

## Failure conditions and escalation

- No sending setup/metrics → `insufficient_data`.
- Legal consent gaps → compliance review.

## Examples

- **SaaS:** DMARC + re-engagement of dormant trial users.
- **E-commerce:** suppress inactive; fix complaint spikes.
- **Real estate:** authenticate agent sending domains.
- **Retail:** segment engaged; sunset lapsed subscribers.

## KPIs and metrics

Inbox placement, bounce/complaint rate, engagement rate, spam-trap hits.

## Related skills

`email.email-body-creation`, `compliance.email-permission-assessment`,
`email.lead-nurture-series`.

## MCP mappings

- Resources: `marketing://policies/email/anti-spam`
- Prompts: `email_nurture_sequence`, `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
