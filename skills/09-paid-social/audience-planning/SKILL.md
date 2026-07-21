---
id: paid-social.audience-planning
name: Paid Social Audience Planning
version: 1.0.0
status: stable
description: Plan prospecting, lookalike, custom and retargeting audiences with exclusions and compliant targeting.
category: paid-social
sub_category: audiences
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [paid-social]
objectives: [reach-right-people, reduce-waste]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [audience-definition, objective]
optional_inputs: [customer-list-consent, pixel-data]
outputs: [audience-plan, exclusions, compliance-notes]
related_skills: [paid-social.social-campaign-architecture, paid-social.lookalike-audience-planning, compliance.customer-list-upload-assessment]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, audiences, targeting]
---

## Overview

Defines the audience architecture — who to prospect, who to retarget, who to exclude — with
consent and platform-policy compliance.

## Business purpose

Right audiences reduce waste and improve efficiency; wrong or non-compliant audiences risk
spend and policy violations.

## When to use / when not to use

- **Use** to plan paid-social audiences.
- **Do not use** to upload customer lists without a lawful basis and approval.

## Inputs

### Required
- Audience definition, objective.

### Optional
- Customer-list consent status, pixel data.

## Outputs

- An **audience plan** (prospecting/lookalike/custom/retargeting).
- **Exclusions** (customers, converters, poor-fit).
- **Compliance notes**.

## Methodology

1. Define prospecting audiences (broad, interest, lookalike seeds).
2. Define retargeting tiers by engagement depth/recency.
3. Set exclusions (existing customers, recent converters, irrelevant segments).
4. For custom-list audiences, verify consent/lawful basis (see compliance skill).
5. Note special-category restrictions (housing/credit/employment).

## Decision rules

- Exclude converters/customers from prospecting to reduce waste.
- Only upload lists with a lawful basis and approval; minimise PII.
- Broad + strong signal often outperforms narrow interest stacks.

## Quality checklist

- [ ] Prospecting and retargeting defined.
- [ ] Exclusions set.
- [ ] Consent verified for lists.

## Compliance checklist

- [ ] Lawful basis and consent for customer lists (PII).
- [ ] Special ad category rules applied.
- [ ] No sensitive-attribute targeting.

## Failure conditions and escalation

- Missing audience/objective → `insufficient_data`.
- Customer-list upload → high-risk; requires approval and PII minimisation.

## Examples

- **SaaS:** lookalikes of paying customers; retarget trial non-activators.
- **E-commerce:** cart/PDP retargeting; exclude recent buyers.
- **Real estate:** compliant broad local targeting (housing rules).
- **Retail:** local radius + loyalty lookalikes (with consent).

## KPIs and metrics

Audience-level CPA/ROAS, overlap, frequency, exclusion coverage.

## Related skills

`paid-social.social-campaign-architecture`, `paid-social.lookalike-audience-planning`,
`compliance.customer-list-upload-assessment`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
