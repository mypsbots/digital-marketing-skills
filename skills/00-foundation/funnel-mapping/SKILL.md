---
id: foundation.funnel-mapping
name: Funnel Mapping
version: 1.0.0
status: stable
description: Map the marketing and sales funnel stages, conversion points and metrics so the team shares one view of how prospects become customers.
category: foundation
sub_category: funnel
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [align-funnel, enable-measurement]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [business-model, conversion-actions]
optional_inputs: [current-metrics, channels]
outputs: [funnel-map, conversion-points, stage-metrics]
related_skills: [foundation.customer-journey-mapping, cro.funnel-drop-off-analysis, analytics.funnel-analysis]
resources: [marketing://funnel-stages]
mcp_prompts: [audit_digital_marketing]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [funnel, mapping, foundation]
---

## Overview

Produces a shared funnel map: the stages a prospect passes through, the conversion action between
each, and the metric that measures each transition — the backbone for diagnosis and reporting.

## Business purpose

A shared funnel definition prevents conflicting reporting and reveals where prospects are lost.

## When to use / when not to use

- **Use** to establish a common funnel model.
- **Do not use** to over-model stages the team cannot measure or maintain.

## Inputs

### Required
- Business model, conversion actions.

### Optional
- Current metrics, channels.

## Outputs

- A **funnel map** (stages + transitions).
- **Conversion points** with definitions.
- **Stage metrics** and expected data sources.

## Methodology

1. Define stages fitting the model (e.g. visit → lead → MQL → SQL → customer, or view → cart →
   purchase → repeat).
2. Specify the conversion action between each stage.
3. Attach one metric per transition and its data source.
4. Note typical drop-off risks per stage.
5. Align with lifecycle/CRM stages for consistency.

## Decision rules

- Every transition needs a measurable action and metric.
- Keep the model as simple as measurable.
- Align funnel with lifecycle definitions.

## Quality checklist

- [ ] Stages and transitions defined.
- [ ] One metric per transition.
- [ ] Data sources identified.

## Compliance checklist

- [ ] Aggregated data; no PII in the model.

## Failure conditions and escalation

- Missing model/conversion actions → `insufficient_data`.

## Examples

- **SaaS:** visit → signup → activation → paid → expansion.
- **E-commerce:** visit → product view → cart → purchase → repeat.
- **Real estate:** visit → enquiry → viewing → offer → completion.
- **Retail:** reach → visit → purchase → loyalty.

## KPIs and metrics

Stage conversion rates, overall conversion, leakage by stage.

## Related skills

`foundation.customer-journey-mapping`, `cro.funnel-drop-off-analysis`,
`analytics.funnel-analysis`.

## MCP mappings

- Resources: `marketing://funnel-stages`
- Prompts: `audit_digital_marketing`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
