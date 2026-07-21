---
id: paid-search.keyword-planning
name: Paid Search Keyword Planning
version: 1.0.0
status: stable
description: Plan paid-search keywords and match types with negatives, mapping intent to budget-efficient targeting.
category: paid-search
sub_category: keywords
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
channels: [paid-search]
objectives: [efficient-capture]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [objective, target-market, budget]
optional_inputs: [keyword-data, existing-search-terms]
outputs: [keyword-plan, match-types, negative-list]
related_skills: [paid-search.campaign-architecture, paid-search.negative-keyword-planning, seo.keyword-discovery]
resources: []
mcp_prompts: [plan_google_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, keywords, ppc]
---

## Overview

Selects keywords and match types that capture high-intent demand efficiently, with a negative
list to prevent waste.

## Business purpose

Keyword choices directly drive spend efficiency and lead/sale quality.

## When to use / when not to use

- **Use** when planning paid-search targeting.
- **Do not use** to launch without approval.

## Inputs

### Required
- Objective, target market, budget.

### Optional
- Keyword data, existing search-term reports.

## Outputs

- A **keyword plan** grouped by ad group/intent.
- **Match types** per keyword with rationale.
- A **negative list** (shared + campaign-level).

## Methodology

1. Prioritise high commercial-intent terms aligned to the offer.
2. Assign match types balancing reach and control (phrase/exact for control; broad only with
   strong negatives and smart bidding + monitoring).
3. Build a negative list from irrelevant themes and prior search terms.
4. Estimate volume/CPC directionally and check against budget.
5. Map keywords to ad groups and landing pages.

## Decision rules

- Do not use broad match without robust negatives and conversion tracking.
- Exclude low-intent/irrelevant terms proactively.
- Align keyword intent to landing-page content.

## Quality checklist

- [ ] Intent-aligned keywords.
- [ ] Match types justified.
- [ ] Negative list present.
- [ ] Budget feasibility checked.

## Compliance checklist

- [ ] No trademark/policy violations.
- [ ] Restricted-category terms flagged.

## Failure conditions and escalation

- Missing objective/market/budget → `insufficient_data`.
- Launch → requires approval.

## Examples

- **SaaS:** exact/phrase on solution terms; competitor terms only where compliant.
- **E-commerce:** product + attribute terms; negatives for research queries.
- **Real estate:** "[service] [area]" with location negatives.
- **Retail:** local high-intent with non-buying negatives.

## KPIs and metrics

CPA/CPL, conversion rate, search-term relevance, wasted spend.

## Related skills

`paid-search.campaign-architecture`, `paid-search.negative-keyword-planning`,
`seo.keyword-discovery`.

## MCP mappings

- Prompts: `plan_google_ads`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
