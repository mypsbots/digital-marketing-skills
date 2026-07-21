---
id: compliance.customer-list-upload-assessment
name: Customer List Upload Assessment
version: 1.0.0
status: stable
description: Assess whether uploading a customer list to an ad platform for matching/audiences is lawful and permitted — consent, transparency, platform terms and data minimisation.
category: compliance-privacy
sub_category: advertising
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [ensure-lawful-targeting, reduce-risk]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [list-source, intended-platform, jurisdictions]
optional_inputs: [consent-records, privacy-policy]
outputs: [upload-assessment, lawful-basis, required-actions]
related_skills: [compliance.consent-assessment, paid-social.lookalike-audience-planning, compliance.marketing-compliance-assessment]
resources: [marketing://compliance-rules, marketing://policies/meta-ads/policies]
mcp_prompts: [review_compliance]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [compliance, custom-audiences, privacy]
---

## Overview

Evaluates whether a customer list can lawfully be uploaded to an advertising platform (for custom
audiences/matching), covering lawful basis/consent, privacy-notice transparency, platform terms,
sensitive-data exclusions, and data minimisation. Advisory, not legal advice.

## Business purpose

Custom-audience uploads are powerful but carry real privacy/legal risk; a pre-check prevents
unlawful data sharing and platform violations.

## When to use / when not to use

- **Use** before uploading any customer/contact list to an ad platform.
- **Do not use** to justify uploading non-consented, purchased, or sensitive-category data;
  escalate uncertain cases.

## Inputs

### Required
- List source, intended platform, jurisdictions.

### Optional
- Consent records, privacy policy.

## Outputs

- An **upload assessment** (permitted / not / conditional).
- **Lawful basis** and transparency determination.
- **Required actions** (notice, consent, exclusions, hashing).

## Methodology

1. Establish how the list was collected and the relationship/consent basis.
2. Check the privacy notice discloses ad-platform sharing/matching.
3. Review platform customer-data terms and prohibited/sensitive data.
4. Apply data minimisation (only necessary fields; platform-side hashing).
5. Output permitted/conditional/blocked with required actions; escalate high-risk.

## Decision rules

- Upload only with a valid basis and transparent notice.
- Never upload sensitive-category or non-consented/purchased data.
- Minimise fields; rely on platform hashing/matching terms.

## Quality checklist

- [ ] Source + basis established.
- [ ] Notice transparency checked.
- [ ] Platform terms + minimisation applied.

## Compliance checklist

- [ ] GDPR/relevant privacy law considered.
- [ ] Privacy notice covers sharing.
- [ ] No sensitive/prohibited data.

## Failure conditions and escalation

- Missing source/platform/jurisdiction → `insufficient_data`.
- Unclear basis/sensitive data → escalate to legal; block upload.

## Examples

- **SaaS:** upload consented customers for lookalikes.
- **E-commerce:** purchasers audience with disclosed sharing.
- **Real estate:** consented past-client list only.
- **Retail:** loyalty members with opt-in for ads.

## KPIs and metrics

% lists cleared, violations avoided, match rate (post-approval).

## Related skills

`compliance.consent-assessment`, `paid-social.lookalike-audience-planning`,
`compliance.marketing-compliance-assessment`.

## MCP mappings

- Resources: `marketing://compliance-rules`, `marketing://policies/meta-ads/policies`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
