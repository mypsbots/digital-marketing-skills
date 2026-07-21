---
id: analytics.measurement-strategy
name: Measurement Strategy
version: 1.0.0
status: stable
description: Design a measurement strategy that links business objectives to KPIs, data sources, tracking and decision rules, privacy-first.
category: analytics-measurement
sub_category: strategy
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [measure-what-matters, enable-decisions]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [business-objectives, funnel-overview]
optional_inputs: [current-stack, data-access, constraints]
outputs: [measurement-plan, kpi-tree, data-source-map, decision-rules]
related_skills: [analytics.kpi-framework, analytics.tracking-plan-design, reporting.monthly-marketing-report]
resources: [marketing://metrics]
mcp_prompts: [audit_digital_marketing, build_tracking_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, measurement, kpi]
---

## Overview

Creates a coherent measurement strategy: from business objectives to KPIs, the data sources and
events that feed them, and the decisions each metric should drive — with privacy by design.

## Business purpose

Measurement should enable decisions, not vanity dashboards; a strategy prevents metric sprawl.

## When to use / when not to use

- **Use** to define what to measure and why before building dashboards.
- **Do not use** to justify collecting personal data without lawful basis.

## Inputs

### Required
- Business objectives, funnel overview.

### Optional
- Current stack, data access, constraints.

## Outputs

- A **measurement plan** (objective → KPI → source → decision).
- A **KPI tree** with a north-star and supporting metrics.
- A **data-source map** and **decision rules**.

## Methodology

1. Translate objectives into a KPI tree (north-star + inputs).
2. For each KPI, define formula, source, owner, and cadence.
3. Map to tracking events/data sources; identify gaps.
4. Define decision rules (what action each metric threshold triggers).
5. Apply privacy by design (minimise PII, respect consent).
6. Prioritise a minimal, trustworthy metric set.

## Decision rules

- Every KPI must map to a decision and an owner.
- Prefer fewer, trusted metrics over many noisy ones.
- Data minimisation and consent are non-negotiable.

## Quality checklist

- [ ] KPI tree tied to objectives.
- [ ] Sources/owners/cadence defined.
- [ ] Decision rules explicit.

## Compliance checklist

- [ ] Lawful basis and consent honoured.
- [ ] Data minimisation applied.
- [ ] PII avoided in reporting layer.

## Failure conditions and escalation

- Missing objectives/funnel → `insufficient_data`.

## Examples

- **SaaS:** north-star = activated accounts; inputs across AARRR.
- **E-commerce:** north-star = contribution margin; ROAS/MER/AOV inputs.
- **Real estate:** north-star = qualified enquiries; CPL inputs.
- **Retail:** north-star = omnichannel revenue; footfall/loyalty inputs.

## KPIs and metrics

North-star, KPI-tree coverage, data-quality/trust score.

## Related skills

`analytics.kpi-framework`, `analytics.tracking-plan-design`,
`reporting.monthly-marketing-report`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `audit_digital_marketing`, `build_tracking_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
