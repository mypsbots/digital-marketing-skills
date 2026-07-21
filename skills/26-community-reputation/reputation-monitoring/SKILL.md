---
id: community-reputation.reputation-monitoring
name: Reputation Monitoring
version: 1.0.0
status: stable
description: Set up monitoring of reviews, social mentions and ratings across platforms to track sentiment, surface issues and guide honest response — no fake reviews.
category: community-reputation
sub_category: monitoring
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention, advocacy]
objectives: [protect-reputation, improve-sentiment]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [brand-and-platforms, monitoring-scope]
optional_inputs: [competitors, historical-reviews, response-owners]
outputs: [monitoring-plan, sentiment-baseline, response-guidelines]
related_skills: [foundation.digital-presence-audit, reporting.campaign-performance-report, market-research.share-of-voice-analysis]
resources: []
mcp_prompts: [audit_digital_marketing]
data_sensitivity: internal
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reputation, reviews, monitoring]
---

## Overview

Establishes how the brand tracks reviews, ratings and social mentions across relevant platforms —
what to monitor, alert thresholds, sentiment baseline, and honest response guidelines — so issues
are caught early and reputation is managed ethically.

## Business purpose

Reviews and reputation strongly influence conversion, especially locally; monitoring protects
trust and surfaces product/service issues.

## When to use / when not to use

- **Use** to set up or improve reputation monitoring and response.
- **Do not use** to solicit fake reviews, suppress honest ones, or gate reviews unfairly.

## Inputs

### Required
- Brand and platforms, monitoring scope.

### Optional
- Competitors, historical reviews, response owners.

## Outputs

- A **monitoring plan** (platforms, keywords, alerts, cadence).
- A **sentiment baseline** and issue themes.
- **Response guidelines** (tone, timing, escalation).

## Methodology

1. Identify platforms that matter (review sites, app stores, social, local listings).
2. Define what to track: mentions, ratings, sentiment, recurring themes.
3. Set alert thresholds and response SLAs by severity.
4. Baseline current sentiment/ratings and top issue themes.
5. Define honest response guidelines and escalation to product/support.

## Decision rules

- Respond honestly and promptly; never fake or buy reviews.
- Route recurring issues to product/service owners.
- Follow platform review-gating rules.

## Quality checklist

- [ ] Platforms + keywords defined.
- [ ] Alerts + SLAs set.
- [ ] Response guidelines + escalation.

## Compliance checklist

- [ ] No fake/incentivised-for-positive reviews.
- [ ] Platform review policies honoured; PII handled carefully.

## Failure conditions and escalation

- Missing brand/platforms/scope → `insufficient_data`.

## Examples

- **SaaS:** G2/Capterra + app store + social monitoring.
- **E-commerce:** product reviews + trustmarks + social.
- **Real estate:** Google/agent-review platforms.
- **Retail:** Google Business Profile + local review sites.

## KPIs and metrics

Average rating, review volume/velocity, sentiment, response rate/time.

## Related skills

`foundation.digital-presence-audit`, `reporting.campaign-performance-report`,
`market-research.share-of-voice-analysis`.

## MCP mappings

- Prompts: `audit_digital_marketing`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
