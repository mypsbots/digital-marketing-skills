---
id: analytics.tracking-plan-design
name: Tracking Plan Design
version: 1.0.0
status: stable
description: Design an event/parameter tracking plan with naming conventions, consent handling and validation so analytics data is trustworthy.
category: analytics-measurement
sub_category: tracking
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [reliable-data, enable-analysis]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [conversion-definitions, key-user-actions, platforms]
optional_inputs: [current-tags, consent-mode-status]
outputs: [event-taxonomy, parameter-spec, naming-conventions, validation-steps]
related_skills: [analytics.event-taxonomy, analytics.utm-governance, analytics.measurement-strategy]
resources: []
mcp_prompts: [build_tracking_plan]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, tracking, events]
---

## Overview

Specifies the events, parameters and naming conventions to capture — with consent handling and
validation steps — so downstream reporting is consistent and trustworthy.

## Business purpose

Bad tracking silently corrupts every decision; a plan makes data an asset.

## When to use / when not to use

- **Use** to define tracking before implementation.
- **Do not use** to capture PII beyond need or bypass consent.

## Inputs

### Required
- Conversion definitions, key user actions, platforms.

### Optional
- Current tags, consent-mode status.

## Outputs

- An **event taxonomy** and **parameter spec**.
- **Naming conventions** and governance.
- **Validation steps** (QA checklist).

## Methodology

1. List key actions/conversions mapped to the funnel.
2. Define events + parameters with consistent naming (snake/case rules).
3. Specify identity/consent handling; minimise PII; mark sensitive fields.
4. Define QA/validation (debug view, test cases) and ownership.
5. Version the plan and document changes.

## Decision rules

- One canonical name per event; no duplicates.
- Consent-gated tags for tracking where required.
- Minimise and mark any PII.

## Quality checklist

- [ ] Events map to funnel/conversions.
- [ ] Naming consistent and documented.
- [ ] Validation steps defined.

## Compliance checklist

- [ ] Consent mode/gating respected.
- [ ] PII minimised and flagged.
- [ ] Production tag changes require approval.

## Failure conditions and escalation

- Missing conversions/actions/platforms → `insufficient_data`.
- Production changes → require approval.

## Examples

- **SaaS:** signup, activation, feature_used, upgrade events.
- **E-commerce:** view_item, add_to_cart, begin_checkout, purchase.
- **Real estate:** view_listing, save_listing, enquiry_submitted.
- **Retail:** store_locator_use, offer_view, bopis_start.

## KPIs and metrics

Data-quality score, event coverage, validation pass rate.

## Related skills

`analytics.event-taxonomy`, `analytics.utm-governance`, `analytics.measurement-strategy`.

## MCP mappings

- Prompts: `build_tracking_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
