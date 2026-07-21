---
id: compliance.email-permission-assessment
name: Email Permission Assessment
version: 1.0.0
status: stable
description: Assess whether an email audience can be lawfully contacted — lawful basis/consent, source, jurisdiction rules (GDPR/PECR/CAN-SPAM), suppression and unsubscribe.
category: compliance-privacy
sub_category: email
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [ensure-lawful-contact, reduce-risk]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [audience-source, intended-message-type, jurisdictions]
optional_inputs: [consent-records, suppression-lists]
outputs: [permission-findings, lawful-basis, required-actions]
related_skills: [compliance.consent-assessment, email.email-deliverability-assessment, compliance.marketing-compliance-assessment]
resources: [marketing://policies/email/anti-spam, marketing://compliance-rules]
mcp_prompts: [review_compliance]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [compliance, email, consent]
---

## Overview

Determines whether a given email audience may be contacted for a given message type — checking
lawful basis/consent, how the list was collected, jurisdiction-specific rules (GDPR, PECR,
CAN-SPAM, CASL), suppression and unsubscribe handling — and lists required actions. Advisory, not
legal advice.

## Business purpose

Sending without permission risks fines, blocklisting and lost trust; a permission check prevents
unlawful sends.

## When to use / when not to use

- **Use** before emailing a new/uncertain audience or new message type.
- **Do not use** as a substitute for legal counsel on high-risk cases; escalate when uncertain.

## Inputs

### Required
- Audience source, intended message type, jurisdictions.

### Optional
- Consent records, suppression lists.

## Outputs

- **Permission findings** (can/cannot/conditionally contact).
- **Lawful basis** determination (consent vs legitimate interest / soft opt-in).
- **Required actions** before sending.

## Methodology

1. Classify the message (marketing vs transactional) and audience relationship.
2. Determine applicable regimes by recipient jurisdiction.
3. Check lawful basis: explicit consent, soft opt-in (existing customers, similar products), or B2B rules.
4. Verify sender identity, unsubscribe and suppression handling.
5. Output can/cannot/conditional with required remediations; escalate high-risk to legal.

## Decision rules

- No marketing email without a valid lawful basis.
- Honour unsubscribe/suppression before send.
- When basis is unclear, do not send — escalate.

## Quality checklist

- [ ] Message type + jurisdiction identified.
- [ ] Lawful basis determined.
- [ ] Required actions listed.

## Compliance checklist

- [ ] GDPR/PECR/CAN-SPAM/CASL considered.
- [ ] Unsubscribe + sender ID + suppression verified.
- [ ] PII handled lawfully.

## Failure conditions and escalation

- Missing source/message type/jurisdiction → `insufficient_data`.
- Unclear/high-risk basis → escalate to legal.

## Examples

- **SaaS:** B2B legitimate interest vs consent by region.
- **E-commerce:** soft opt-in for existing customers only.
- **Real estate:** consented enquiry follow-up.
- **Retail:** loyalty opt-in scope check.

## KPIs and metrics

% audiences with valid basis, complaint rate, violations avoided.

## Related skills

`compliance.consent-assessment`, `email.email-deliverability-assessment`,
`compliance.marketing-compliance-assessment`.

## MCP mappings

- Resources: `marketing://policies/email/anti-spam`, `marketing://compliance-rules`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
