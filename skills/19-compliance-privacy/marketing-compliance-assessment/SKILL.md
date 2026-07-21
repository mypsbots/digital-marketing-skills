---
id: compliance.marketing-compliance-assessment
name: Marketing Compliance Assessment
version: 1.0.0
status: stable
description: Screen a marketing activity for privacy, consent, advertising-standards and platform-policy risks, flagging items that need qualified legal review.
category: compliance-privacy
sub_category: assessment
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [reduce-risk, ensure-compliance]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [activity-description, audience-region, channel]
optional_inputs: [data-sources, claims, consent-basis]
outputs: [risk-findings, required-checks, legal-review-items, recommendation]
related_skills: [compliance.consent-assessment, crm.workflow-design]
resources: [marketing://regional-settings]
mcp_prompts: [review_compliance]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [compliance, privacy, risk]
---

## Overview

A structured risk screen across privacy (GDPR/CCPA and similar), consent/anti-spam, advertising
standards (truthful, substantiated claims) and platform policies — not legal advice, but a
practical checklist that flags what needs qualified review.

## Business purpose

Compliance failures cause fines, bans and reputational damage; early screening prevents them.

## When to use / when not to use

- **Use** to screen activities before launch.
- **Do not use** as a substitute for qualified legal advice.

## Inputs

### Required
- Activity description, audience/region, channel.

### Optional
- Data sources, claims, consent basis.

## Outputs

- **Risk findings** by area (privacy, consent, claims, platform).
- **Required checks** before launch.
- **Legal-review items** and an overall recommendation.

## Methodology

1. Identify applicable regimes by region/audience.
2. Check lawful basis/consent for data use and contact.
3. Review claims for truthfulness and substantiation.
4. Check channel/platform policy compliance.
5. Flag anything ambiguous or high-risk for legal review; recommend go/hold.

## Decision rules

- This is guidance, not legal advice; flag for legal when unsure.
- No unsubstantiated or misleading claims.
- Respect consent and data-minimisation.

## Quality checklist

- [ ] Applicable regimes identified.
- [ ] Consent/claims/platform checked.
- [ ] Legal-review items flagged.

## Compliance checklist

- [ ] Regional privacy rules considered.
- [ ] Anti-spam/consent verified.
- [ ] Advertising-standards claims substantiated.

## Failure conditions and escalation

- Missing activity/region/channel → `insufficient_data`.
- High-risk/ambiguous → escalate to legal.

## Examples

- **SaaS:** cold outreach lawful-basis screen by region.
- **E-commerce:** discount/claims + email consent screen.
- **Real estate:** fair-advertising + accuracy screen.
- **Retail:** prize/promo terms + consent screen.

## KPIs and metrics

Issues caught pre-launch, incidents avoided (qualitative).

## Related skills

`compliance.consent-assessment`, `crm.workflow-design`.

## MCP mappings

- Resources: `marketing://regional-settings`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
