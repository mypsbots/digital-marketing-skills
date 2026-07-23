---
id: community-reputation.referral-marketing
name: Referral and Social-proof Marketing
version: 1.0.0
status: stable
description: Design referral programmes and social-proof mechanics that turn satisfied customers into advocates and use honest social norms to influence purchase decisions.
category: community-reputation
sub_category: advocacy
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [decision, retention, advocacy]
objectives: [drive-word-of-mouth, generate-leads, increase-conversion]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [customer-base, offering, incentive-budget-or-value]
optional_inputs: [nps-or-satisfaction-data, existing-testimonials, referral-history]
outputs: [referral-programme-design, social-proof-plan, incentive-structure, disclosure-guidelines]
related_skills: [community-reputation.community-building, community-reputation.reputation-monitoring, strategy.retention-strategy, offer-and-messaging.ethical-persuasion-review, offer-and-messaging.claim-substantiation-checklist]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [referral, social-proof, word-of-mouth, advocacy, social-norms]
---

## Overview

Designs referral programmes (incentivised or organic) and social-proof mechanics — reviews,
testimonials, ratings, "most customers choose X" social norms — that turn satisfied customers
into a growth channel and use honest evidence to influence decisions.

## Business purpose

Referred customers convert better, cost less and retain longer; genuine social proof reduces
perceived risk. Together they compound trust-based, lower-cost growth.

## When to use / when not to use

- **Use** to build a referral/advocacy programme or add honest social proof to the funnel.
- **Do not use** to fabricate reviews/testimonials, buy fake endorsements, or use misleading
  social-norm claims ("most customers buy X" when untrue).

## Inputs

### Required
- Customer base, offering, incentive budget/value.

### Optional
- NPS/satisfaction data, existing testimonials, referral history.

## Outputs

- A **referral programme design** (mechanic, incentive, trigger, sharing UX).
- A **social-proof plan** (which proof, where in the funnel).
- An **incentive structure** (one- or two-sided, thresholds).
- **Disclosure guidelines** (incentives, endorsements, testimonials).

## Methodology

1. Confirm satisfaction/value first — don't amplify referrals for a weak product.
2. Choose a referral mechanic and incentive (one-sided/two-sided) fit to margin and segment.
3. Trigger referral asks at moments of realised value (post-purchase, milestone, high NPS).
4. Make sharing effortless and trackable; attribute referrals cleanly.
5. Add honest social proof (real reviews, ratings, accurate "popular choice" norms) at decision points.
6. Set disclosure for incentives/endorsements and guard against fraud/gaming.
7. Measure referral rate, quality, and social-proof lift; iterate.

## Decision rules

- Ask for referrals only after realised value; quality over volume.
- All social proof and social-norm claims must be true and verifiable.
- Disclose material incentives and endorsements; monitor for abuse/fraud.

## Quality checklist

- [ ] Referral triggered at value moments; sharing frictionless and tracked.
- [ ] Incentives fit margin; fraud controls in place.
- [ ] Social proof is genuine and placed at decision points.

## Compliance checklist

- [ ] No fake/incentivised-but-undisclosed reviews (FTC/consumer-protection rules).
- [ ] Social-norm/popularity claims substantiated (`offer-and-messaging.claim-substantiation-checklist`).
- [ ] Referrer/referee PII handled lawfully; consent for contact.

## Failure conditions and escalation

- Missing customer base/incentive inputs → `insufficient_data`.
- Endorsement disclosure or testimonial claims → legal/compliance review.

## Examples

- **SaaS:** two-sided credit referral triggered at activation; G2 review proof.
- **E-commerce:** refer-a-friend discount + verified review stars on PDP.
- **Real estate:** past-client referral programme + testimonials/case studies.
- **Retail:** member referral perks + "bestseller/most-loved" honest social norms.

## KPIs and metrics

Referral rate, referred-customer conversion/retention/LTV, cost per referred acquisition, and
social-proof conversion lift.

## Related skills

`community-reputation.community-building`, `community-reputation.reputation-monitoring`,
`strategy.retention-strategy`, `offer-and-messaging.ethical-persuasion-review`,
`offer-and-messaging.claim-substantiation-checklist`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
