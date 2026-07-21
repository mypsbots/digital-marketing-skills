# Example: SaaS growth plan (PLG)

> Illustrative example. Numbers are synthetic and for demonstration only — not benchmarks,
> targets, or guarantees.

## Context

- Product: a team collaboration SaaS, self-serve free trial, ~$40/seat/month.
- Motion: product-led (PLG) with sales-assist for larger teams.
- Current (synthetic): 2,000 trials/month, 22% activation, 12% trial→paid, NRR 98%.

## Objective

Grow net new ARR by improving activation and expansion without increasing CAC, over two quarters.

## Method (skills applied)

1. **`analytics.kpi-framework`** — north-star = weekly active teams; inputs = trials, activation
   rate, trial→paid, NRR.
2. **`plg.activation-metric-definition`** — activation = "invite ≥1 teammate AND create a project
   within 7 days" (correlated with retention in synthetic cohort data).
3. **`cro.funnel-drop-off-analysis`** — biggest leak (synthetic): 55% of trials never invite a
   teammate; mobile onboarding worst.
4. **`saas.saas-go-to-market`** — prioritise activation experiments over new acquisition spend.
5. **`saas.expansion-revenue`** — seat-expansion play triggered at team-growth signal.
6. **`email.lead-nurture-series`** (consent-based) — onboarding nudges toward the activation action.

## Illustrative output

**North-star:** Weekly active teams.

**Prioritised experiments (ICE-ranked, synthetic):**

| Experiment | Hypothesis | Primary metric | Guardrail |
| --- | --- | --- | --- |
| Guided "invite teammate" step | Prompting invite in setup lifts activation | Activation rate | Trial→paid |
| Mobile onboarding fix | Removing mobile friction lifts activation | Mobile activation | Support tickets |
| Seat-expansion nudge | Surfacing seat value at team growth lifts NRR | Expansion MRR | Downgrade rate |

**Plan of record:** hold acquisition spend flat; reinvest effort into activation; add a
consent-based onboarding email sequence; introduce seat-expansion prompts.

## Measurement

Activation rate, time-to-activate, activated-cohort retention, trial→paid, NRR, expansion MRR;
each experiment via `experimentation.ab-test-design` with pre-computed sample size.

## Safety & approvals

- Forecasts presented as ranges with assumptions; no guaranteed outcomes.
- Onboarding emails require verified consent and pass the `email-nurture-launch` approval gate.
- No paid spend changes without approval.
