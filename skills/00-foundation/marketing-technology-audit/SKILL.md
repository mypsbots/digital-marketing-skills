---
id: foundation.marketing-technology-audit
name: Marketing Technology Audit
version: 1.0.0
status: stable
description: Audit the martech stack for coverage, integration, data flow, cost and compliance, identifying gaps, overlaps and consolidation opportunities.
category: foundation
sub_category: martech
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [rationalise-stack, improve-data-flow]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: days
required_inputs: [current-tools, key-use-cases]
optional_inputs: [costs, integrations, data-flows]
outputs: [stack-map, gaps-and-overlaps, recommendations]
related_skills: [foundation.marketing-maturity-assessment, analytics.tracking-plan-design, automation.marketing-workflow-design]
resources: []
mcp_prompts: [audit_digital_marketing]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [martech, audit, foundation]
---

## Overview

Maps the marketing technology stack against required capabilities and data flows, exposing gaps,
overlaps, integration breaks, cost and compliance risks, and consolidation opportunities.

## Business purpose

A rationalised, well-integrated stack reduces cost and data errors and speeds execution.

## When to use / when not to use

- **Use** to review or plan the martech stack.
- **Do not use** to recommend tools without mapping to real use cases and data flow.

## Inputs

### Required
- Current tools, key use cases.

### Optional
- Costs, integrations, data flows.

## Outputs

- A **stack map** by capability (CMS, analytics, ESP/CRM, ads, automation, CDP).
- **Gaps and overlaps** with risk/cost notes.
- **Recommendations** (consolidate/integrate/replace).

## Methodology

1. List required capabilities from use cases; map tools to them.
2. Identify gaps (unmet needs) and overlaps (redundant tools).
3. Trace data flows and integration breaks (identity, events, consent).
4. Assess cost, adoption and compliance risk per tool.
5. Recommend consolidation/integration with a prioritised sequence.

## Decision rules

- Map tools to use cases and data flow, not features in isolation.
- Prefer fewer, well-integrated tools over sprawl.
- Flag consent/data-handling risks explicitly.

## Quality checklist

- [ ] Capability coverage mapped.
- [ ] Gaps/overlaps identified.
- [ ] Data-flow/integration reviewed.

## Compliance checklist

- [ ] Data-processing/consent handling reviewed.
- [ ] Vendor data-sharing risks flagged.

## Failure conditions and escalation

- Missing tools/use cases → `insufficient_data`.

## Examples

- **SaaS:** product analytics + CRM + CDP integration review.
- **E-commerce:** platform + ESP + ads + reviews stack.
- **Real estate:** portal feeds + CRM + dialer integration.
- **Retail:** POS + loyalty + email/SMS + local listings.

## KPIs and metrics

Tool utilisation, integration coverage, cost per capability, data-quality score.

## Related skills

`foundation.marketing-maturity-assessment`, `analytics.tracking-plan-design`,
`automation.marketing-workflow-design`.

## MCP mappings

- Prompts: `audit_digital_marketing`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
