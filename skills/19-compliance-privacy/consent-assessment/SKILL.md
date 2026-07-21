---
id: compliance.consent-assessment
name: Consent Assessment
version: 1.0.0
status: stable
description: Assess whether there is a valid lawful basis and consent to contact or process a given audience on a given channel, before any outbound activity.
category: compliance-privacy
sub_category: consent
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [ensure-consent, reduce-risk]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [audience-and-source, channel, region]
optional_inputs: [consent-records, opt-in-method]
outputs: [consent-finding, gaps, required-actions]
related_skills: [compliance.marketing-compliance-assessment, crm.workflow-design, email.lead-nurture-series]
resources: [marketing://regional-settings]
mcp_prompts: [review_compliance]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [compliance, consent, privacy]
---

## Overview

Determines whether outbound contact/processing is permitted: lawful basis, consent quality
(opt-in method, timing, scope), suppression status and regional rules — failing safe when unclear.

## Business purpose

Contacting people without valid consent breaks law and platform rules and harms trust.

## When to use / when not to use

- **Use** before any outbound send or new data processing.
- **Do not use** to justify contact when consent is unclear (fail safe).

## Inputs

### Required
- Audience and how it was sourced, channel, region.

### Optional
- Consent records, opt-in method.

## Outputs

- A **consent finding** (permitted / not / needs-verification).
- **Gaps** in consent/records.
- **Required actions** before proceeding.

## Methodology

1. Identify region rules (e.g. opt-in vs opt-out for email/SMS).
2. Verify lawful basis and consent quality (freely given, specific, informed).
3. Check scope (does consent cover this channel/purpose) and recency.
4. Confirm suppression/unsubscribe honoured.
5. Conclude permitted/not; list actions if gaps exist. Fail safe on doubt.

## Decision rules

- No valid consent/basis → do not contact.
- Consent must match channel and purpose.
- Honour suppression globally.

## Quality checklist

- [ ] Region rules applied.
- [ ] Consent quality/scope verified.
- [ ] Suppression checked.

## Compliance checklist

- [ ] Lawful basis documented.
- [ ] Opt-in method appropriate for region/channel.
- [ ] Data minimisation respected.

## Failure conditions and escalation

- Missing audience/channel/region → `insufficient_data`.
- Unclear consent → block and escalate.

## Examples

- **SaaS:** B2B outreach basis check by region.
- **E-commerce:** email marketing opt-in verification.
- **Real estate:** enquiry-to-marketing consent scope.
- **Retail:** loyalty SMS opt-in check.

## KPIs and metrics

Consent coverage, complaint/unsubscribe rate, violations avoided.

## Related skills

`compliance.marketing-compliance-assessment`, `crm.workflow-design`,
`email.lead-nurture-series`.

## MCP mappings

- Resources: `marketing://regional-settings`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
