---
id: optimisation.cro-strategy
name: CRO Strategy (Conversion Rate Optimisation)
version: 1.0.0
status: stable
description: Design a structured, research-led conversion-rate-optimisation programme - prioritised hypotheses, experimentation cadence and guardrails - that ties the tactical CRO skills into one system.
category: optimisation-disciplines
sub_category: cro
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [increase-conversion-rate, increase-revenue-per-visitor, reduce-friction]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [conversion-goal, funnel-or-page, analytics]
optional_inputs: [qualitative-research, traffic-volume, current-conversion-rate]
outputs: [cro-programme, prioritised-hypotheses, experiment-roadmap]
related_skills: [cro.landing-page-audit, cro.funnel-drop-off-analysis, cro.value-proposition-clarity-review]
resources: [marketing://skills/catalogue]
mcp_prompts: [plan_cro_experiment]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [cro, conversion, experimentation, optimisation]
---

## Overview

Defines a **CRO programme** — how the business will systematically raise conversion and revenue per
visitor through research, prioritised hypotheses, and disciplined experimentation — and sequences the
tactical `cro.*` skills (page audits, funnel drop-off analysis, value-prop clarity) into a repeatable
system with statistical guardrails.

## Business purpose

CRO compounds the value of *all* traffic: a higher conversion rate improves the ROI of every other
channel. A programme (not one-off tests) creates durable, evidence-based gains.

## When to use / when not to use

- **Use** to stand up or improve a conversion-optimisation programme across key funnels/pages.
- **Do not use** for a single copy tweak (use the specific `cro.*` skill), or to run underpowered
  tests you cannot interpret.

## Inputs

### Required
- Conversion goal, funnel or page, analytics.

### Optional
- Qualitative research, traffic volume, current conversion rate.

## Outputs

- A **CRO programme** (research inputs, prioritisation model, cadence, guardrails).
- **Prioritised hypotheses** (backed by evidence, scored e.g. ICE/PIE).
- An **experiment roadmap** (sequence, required sample sizes, decision rules).

## Methodology

1. **Research:** combine quantitative (`cro.funnel-drop-off-analysis`, analytics) and qualitative
   (session replays, surveys, heatmaps) to locate the biggest friction.
2. **Diagnose pages:** run `cro.landing-page-audit` and `cro.value-proposition-clarity-review` on
   priority pages.
3. **Hypotheses:** write evidence-based, testable hypotheses ("Because [evidence], changing [X] will
   improve [metric]"); prioritise with ICE/PIE.
4. **Experiment design:** define the primary metric, MDE, sample size/duration, and stopping rules to
   avoid peeking/false positives.
5. **Run, analyse, institutionalise:** ship winners, document learnings (incl. losers), and feed
   insights back into the backlog and messaging.

## Decision rules

- No test without a hypothesis and a pre-defined primary metric.
- Respect sample-size/duration; don't stop on early noise.
- Prioritise high-traffic, high-impact pages first.

## Quality checklist

- [ ] Research (quant + qual) informs hypotheses.
- [ ] Hypotheses prioritised + testable.
- [ ] Experiments powered with clear decision rules.

## Compliance checklist

- [ ] No dark patterns/deceptive experiments (see ethical-persuasion-review).
- [ ] Privacy-respecting analytics/consent.

## Failure conditions and escalation

- Missing goal/funnel/analytics → `insufficient_data`.
- Traffic too low for valid tests → recommend qualitative/UX changes instead.

## Examples

- **SaaS:** trial-signup and activation-funnel experiments.
- **E-commerce:** PDP/cart/checkout drop-off tests.
- **Real estate:** lead-form and enquiry optimisation.
- **Retail:** local lead/booking conversion.

## KPIs and metrics

Conversion rate, revenue per visitor, win rate, velocity (tests/quarter), cumulative uplift.

## Related skills

`cro.landing-page-audit`, `cro.funnel-drop-off-analysis`, `cro.value-proposition-clarity-review`.

## MCP mappings

- Resources: `marketing://skills/catalogue`
- Prompts: `plan_cro_experiment`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
