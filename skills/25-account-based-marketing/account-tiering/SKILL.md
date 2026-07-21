---
id: account-based-marketing.account-tiering
name: Account Tiering
version: 1.0.0
status: stable
description: Segment target accounts into tiers (1:1, 1:few, 1:many) by fit and potential to focus ABM investment and personalisation appropriately.
category: account-based-marketing
sub_category: targeting
industries: [saas, common]
business_models: [b2b, b2b2c]
funnel_stages: [awareness, consideration, decision]
objectives: [focus-abm-investment, prioritise-accounts]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [target-account-list, fit-criteria]
optional_inputs: [intent-data, revenue-potential, current-relationship]
outputs: [account-tiers, tier-criteria, investment-model]
related_skills: [customer-research.firmographic-segmentation, customer-research.ideal-customer-profile, crm.lead-scoring]
resources: []
mcp_prompts: [create_full_funnel_campaign, create_marketing_strategy]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [abm, account-tiering, b2b]
---

## Overview

Sorts target accounts into tiers — Tier 1 (1:1 deep personalisation), Tier 2 (1:few by segment),
Tier 3 (1:many programmatic) — based on strategic fit and revenue potential, so ABM effort and
personalisation match each account's value.

## Business purpose

Tiering concentrates expensive personalisation on the accounts that justify it and scales lighter
motions for the rest, maximising ABM ROI.

## When to use / when not to use

- **Use** to structure an ABM target list and investment.
- **Do not use** to tier on non-legitimate attributes or without a defined ICP.

## Inputs

### Required
- Target account list, fit criteria.

### Optional
- Intent data, revenue potential, current relationship.

## Outputs

- **Account tiers** (1:1 / 1:few / 1:many) with assignments.
- **Tier criteria** (fit + potential thresholds).
- An **investment model** (effort/personalisation per tier).

## Methodology

1. Define fit from the ICP (industry, size, use case) and strategic value.
2. Estimate revenue potential and win propensity (intent/relationship signals).
3. Set thresholds for each tier and assign accounts.
4. Define the motion and personalisation depth per tier.
5. Align sales/marketing on tier ownership and cadence.

## Decision rules

- Reserve 1:1 for genuinely high-value, winnable accounts.
- Base tiers on fit + potential, not just size.
- Keep tiers reviewable as signals change.

## Quality checklist

- [ ] Tiers defined with criteria.
- [ ] Accounts assigned.
- [ ] Investment model per tier.

## Compliance checklist

- [ ] Account data handled lawfully.
- [ ] No sensitive/protected attributes in criteria.

## Failure conditions and escalation

- Missing account list/fit criteria → `insufficient_data`.

## Examples

- **SaaS:** Tier 1 strategic logos (1:1); Tier 2 vertical clusters; Tier 3 programmatic.
- **B2B services:** named enterprise vs mid-market segments.

## KPIs and metrics

Engagement by tier, pipeline/win rate by tier, ABM ROI.

## Related skills

`customer-research.firmographic-segmentation`, `customer-research.ideal-customer-profile`,
`crm.lead-scoring`.

## MCP mappings

- Prompts: `create_full_funnel_campaign`, `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
