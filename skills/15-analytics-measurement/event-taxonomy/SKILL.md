---
id: analytics.event-taxonomy
name: Event Taxonomy
version: 1.0.0
status: stable
description: Define a consistent, extensible event and property taxonomy with naming rules so analytics remains clean as the product and channels grow.
category: analytics-measurement
sub_category: tracking
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [reliable-data]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [key-user-actions, platforms]
optional_inputs: [existing-events, object-model]
outputs: [event-list, property-schema, naming-conventions]
related_skills: [analytics.tracking-plan-design, analytics.utm-governance]
resources: []
mcp_prompts: [build_tracking_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, taxonomy, events]
---

## Overview

Establishes an object–action naming model and property schema for events so tracking stays
consistent and analysable as the business scales.

## Business purpose

A shared taxonomy avoids duplicate/inconsistent events that break analysis.

## When to use / when not to use

- **Use** to standardise event naming.
- **Do not use** to embed PII in event/property names.

## Inputs

### Required
- Key user actions, platforms.

### Optional
- Existing events, object model.

## Outputs

- An **event list** with an object–action convention.
- A **property schema** (types, required/optional).
- **Naming conventions** and governance rules.

## Methodology

1. Choose a convention (e.g. `object_action`, snake_case, past tense).
2. Model objects and their actions across the funnel.
3. Define shared properties and typed values; mark required.
4. Set governance (who can add events; review process).
5. Provide migration notes for legacy events.

## Decision rules

- Consistent tense/case; one name per concept.
- Reuse shared properties; avoid free-text sprawl.
- No PII in names.

## Quality checklist

- [ ] Convention documented.
- [ ] Properties typed and consistent.
- [ ] Governance defined.

## Compliance checklist

- [ ] No PII in event/property names.

## Failure conditions and escalation

- Missing actions/platforms → `insufficient_data`.

## Examples

- **SaaS:** `account_created`, `feature_used`.
- **E-commerce:** `product_viewed`, `order_completed`.
- **Real estate:** `listing_viewed`, `enquiry_submitted`.
- **Retail:** `offer_viewed`, `store_located`.

## KPIs and metrics

Naming consistency, duplicate-event rate.

## Related skills

`analytics.tracking-plan-design`, `analytics.utm-governance`.

## MCP mappings

- Prompts: `build_tracking_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
