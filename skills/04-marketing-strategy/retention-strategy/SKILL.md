---
id: strategy.retention-strategy
name: Retention Strategy
version: 1.0.0
status: stable
description: Design a cross-channel retention strategy that reduces churn and grows lifetime value through onboarding, engagement, lifecycle and win-back, consent-based.
category: marketing-strategy
sub_category: retention
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [retention, advocacy]
objectives: [reduce-churn, grow-ltv]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [business-model, retention-data-or-hypotheses, objective]
optional_inputs: [churn-reasons, segments, lifecycle-map]
outputs: [retention-strategy, lifecycle-plays, churn-interventions, measurement]
related_skills: [crm.lifecycle-stage-design, ecommerce.repeat-purchase, analytics.kpi-framework]
resources: [marketing://metrics]
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [retention, churn, ltv]
---

## Overview

Builds a retention strategy across the customer lifecycle — onboarding to value, sustained
engagement, expansion, and win-back — targeting the specific drivers of churn, with consent-based
communication and clear measurement.

## Business purpose

Retention compounds LTV and lowers reliance on costly acquisition; small churn improvements have
outsized profit impact.

## When to use / when not to use

- **Use** to reduce churn and grow LTV systematically.
- **Do not use** to contact customers without consent, or to use dark-pattern retention (hard-to-cancel).

## Inputs

### Required
- Business model, retention data or hypotheses, objective.

### Optional
- Churn reasons, segments, lifecycle map.

## Outputs

- A **retention strategy** with prioritised plays.
- **Lifecycle plays** (onboarding, engagement, expansion, win-back).
- **Churn interventions** and **measurement** (retention/churn/LTV).

## Methodology

1. Diagnose churn: type (voluntary/involuntary), timing and drivers by segment.
2. Prioritise interventions where churn value is highest.
3. Design lifecycle plays: fast time-to-value onboarding, engagement/education, expansion, and
   consent-based win-back.
4. Address involuntary churn (e.g. failed payments/dunning) where relevant.
5. Define retention metrics, guardrails and review cadence.

## Decision rules

- Prioritise by value of churn prevented, not just churn rate.
- All outbound retention comms require consent; no dark patterns.
- Fix root causes, not just symptoms (e.g. onboarding, not just discounts).

## Quality checklist

- [ ] Churn diagnosed by driver/segment.
- [ ] Lifecycle plays mapped.
- [ ] Retention metrics + guardrails.

## Compliance checklist

- [ ] Consent for retention communications.
- [ ] Easy cancellation; no dark patterns.
- [ ] PII minimised.

## Failure conditions and escalation

- Missing model/retention basis/objective → `insufficient_data`.
- Scaled outbound → requires approval at execution.

## Examples

- **SaaS:** onboarding-to-activation + at-risk playbooks + dunning.
- **E-commerce:** replenishment + VIP + win-back (consent-based).
- **Real estate:** past-client nurture + referral programme.
- **Retail:** loyalty engagement + lapsing-member win-back.

## KPIs and metrics

Gross/net churn, retention curves, LTV, repeat rate, NRR, save rate.

## Related skills

`crm.lifecycle-stage-design`, `ecommerce.repeat-purchase`, `analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
