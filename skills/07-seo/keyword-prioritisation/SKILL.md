---
id: seo.keyword-prioritisation
name: Keyword Prioritisation
version: 1.0.0
status: stable
description: Score and rank keyword opportunities by relevance, intent, volume, difficulty and business value to sequence SEO investment.
category: seo
sub_category: research
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [prioritise-seo-effort, maximise-roi]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [keyword-list]
optional_inputs: [volume, difficulty, current-rankings, business-value]
outputs: [scored-keywords, priority-tiers, rationale]
related_skills: [seo.keyword-discovery, seo.search-intent-analysis, seo.keyword-mapping]
resources: []
mcp_prompts: [seo_audit, seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, keywords, prioritisation]
---

## Overview

Applies a transparent scoring model to keyword candidates — relevance, intent value, volume,
difficulty vs domain authority, and business value — to produce priority tiers and a defensible
sequence of what to target first.

## Business purpose

Prioritisation focuses limited SEO effort on winnable, valuable terms instead of vanity volume.

## When to use / when not to use

- **Use** to sequence keyword targets after discovery.
- **Do not use** to chase high-volume terms with no relevance or realistic chance to rank.

## Inputs

### Required
- Keyword list.

### Optional
- Volume, difficulty, current rankings, business value.

## Outputs

- **Scored keywords** with the model shown.
- **Priority tiers** (quick wins / strategic / long-term).
- **Rationale** per tier.

## Methodology

1. Score relevance and intent/business value first.
2. Weigh volume against difficulty relative to domain authority.
3. Identify quick wins (existing rankings on page 2, low difficulty).
4. Combine into a weighted score and tier the list.
5. Sequence: quick wins, then strategic clusters, then long-term.

## Decision rules

- Relevance and business value gate volume.
- Prefer winnable terms given authority.
- Surface the scoring model transparently.

## Quality checklist

- [ ] Transparent scoring model.
- [ ] Quick wins identified.
- [ ] Tiers with rationale.

## Compliance checklist

- [ ] Third-party keyword data used within terms.

## Failure conditions and escalation

- No keyword list → `insufficient_data`.

## Examples

- **SaaS:** high-intent "alternative to X" over broad terms.
- **E-commerce:** category + commercial terms first.
- **Real estate:** local transactional terms prioritised.
- **Retail:** "near me" + product terms.

## KPIs and metrics

Ranking gains on prioritised terms, organic traffic/conversions, effort-to-result.

## Related skills

`seo.keyword-discovery`, `seo.search-intent-analysis`, `seo.keyword-mapping`.

## MCP mappings

- Prompts: `seo_audit`, `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
