---
id: market-research.bcg-growth-share-matrix
name: BCG Growth-Share Matrix
version: 1.0.0
status: stable
description: Classify products or lines as Stars, Cash Cows, Question Marks or Dogs by market growth and relative share to guide investment, budget and marketing focus.
category: market-research
sub_category: portfolio-analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [understand-context, prioritise-investment]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [product-or-line-portfolio, market-growth-data, relative-share-data]
optional_inputs: [margin-data, trend-history, competitor-share]
outputs: [portfolio-matrix, quadrant-classification, investment-recommendations]
related_skills: [market-research.competitor-positioning-analysis, budgeting.channel-budget-allocation, strategy.annual-marketing-strategy, strategy.pricing-strategy, market-research.market-segmentation]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [bcg, portfolio, growth-share, investment, strategy]
---

## Overview

Plots each product, line or business unit on the BCG matrix by **market growth rate** (vertical)
and **relative market share** (horizontal), classifying them as **Stars**, **Cash Cows**,
**Question Marks** or **Dogs**, to guide where to invest, harvest, question or divest marketing
resources.

## Business purpose

Marketing budget is finite; a portfolio view prevents over-investing in declining lines and
under-investing in high-growth opportunities, aligning spend with strategic role.

## When to use / when not to use

- **Use** to allocate budget across a portfolio, prioritise focus, or review product-line roles.
- **Do not use** as the sole basis for decisions — it simplifies; combine with margin, strategic
  fit and customer data, and beware unreliable share/growth estimates.

## Inputs

### Required
- Product/line portfolio, market growth data, relative share data.

### Optional
- Margin data, trend history, competitor share.

## Outputs

- A **portfolio matrix** placing each item in a quadrant.
- **Quadrant classification** with rationale.
- **Investment recommendations** (invest, hold/harvest, selectively grow, divest).

## Methodology

1. Define the unit of analysis (product, line, segment) and the relevant market.
2. Estimate market growth rate for each; set the high/low growth threshold.
3. Compute relative market share (share ÷ largest competitor's share).
4. Plot each item; classify into Stars, Cash Cows, Question Marks, Dogs.
5. Assign a strategic role and marketing investment stance per item.
6. Sanity-check against margin, strategic fit and data confidence.

## Decision rules

- Fund Stars to defend/grow; use Cash Cows to fund growth; decide Question Marks deliberately;
  minimise or exit Dogs unless strategically necessary.
- Grade data confidence; flag estimated growth/share as assumptions.
- Do not divest on the matrix alone — consider margin and portfolio synergies.

## Quality checklist

- [ ] Market and unit of analysis clearly defined.
- [ ] Growth and relative-share estimates evidenced.
- [ ] Each item classified with an investment stance.

## Compliance checklist

- [ ] Market-share/competitor data lawful and non-confidential.

## Failure conditions and escalation

- Missing portfolio/growth/share data → `insufficient_data`.
- Divestment/major budget shifts → business stakeholder approval.

## Examples

- **SaaS:** high-growth new module (Question Mark) funded by mature flagship (Cash Cow).
- **E-commerce:** trending category (Star) vs declining SKUs (Dogs) to rationalise.
- **Real estate:** growth segments/areas vs saturated ones for marketing focus.
- **Retail:** category roles guiding promotion and shelf/marketing investment.

## KPIs and metrics

Portfolio ROI, budget allocation shift, growth of Stars/Question Marks, margin from Cash Cows.

## Related skills

`market-research.competitor-positioning-analysis`, `budgeting.channel-budget-allocation`,
`strategy.annual-marketing-strategy`, `strategy.pricing-strategy`,
`market-research.market-segmentation`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
