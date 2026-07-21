/**
 * Deterministic marketing metric calculations.
 *
 * These are pure functions kept separate from any LLM reasoning. Every result
 * exposes the formula, the inputs used and any warnings, so calculations are
 * transparent and auditable. Definitions align with config/metrics-catalogue.yaml.
 */

export interface MetricResult {
  metric: string;
  value: number | null;
  unit: string;
  formula: string;
  inputs: Record<string, number>;
  warnings: string[];
}

function safeDivide(numerator: number, denominator: number, warnings: string[]): number | null {
  if (denominator === 0) {
    warnings.push('Denominator is zero; result is undefined.');
    return null;
  }
  return numerator / denominator;
}

export const MetricEngine = {
  ctr(clicks: number, impressions: number): MetricResult {
    const warnings: string[] = [];
    const value = safeDivide(clicks, impressions, warnings);
    return {
      metric: 'ctr',
      value: value === null ? null : value * 100,
      unit: 'percentage',
      formula: '(clicks / impressions) * 100',
      inputs: { clicks, impressions },
      warnings,
    };
  },

  cpc(cost: number, clicks: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'cpc',
      value: safeDivide(cost, clicks, warnings),
      unit: 'currency',
      formula: 'cost / clicks',
      inputs: { cost, clicks },
      warnings,
    };
  },

  cpm(cost: number, impressions: number): MetricResult {
    const warnings: string[] = [];
    const perImp = safeDivide(cost, impressions, warnings);
    return {
      metric: 'cpm',
      value: perImp === null ? null : perImp * 1000,
      unit: 'currency',
      formula: '(cost / impressions) * 1000',
      inputs: { cost, impressions },
      warnings,
    };
  },

  conversionRate(conversions: number, denominator: number): MetricResult {
    const warnings: string[] = [];
    const value = safeDivide(conversions, denominator, warnings);
    return {
      metric: 'conversion_rate',
      value: value === null ? null : value * 100,
      unit: 'percentage',
      formula: '(conversions / denominator) * 100',
      inputs: { conversions, denominator },
      warnings: [
        ...warnings,
        'State the denominator explicitly (sessions, users or clicks) and keep it stable across periods.',
      ],
    };
  },

  cpa(cost: number, conversions: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'cost_per_conversion',
      value: safeDivide(cost, conversions, warnings),
      unit: 'currency',
      formula: 'cost / conversions',
      inputs: { cost, conversions },
      warnings,
    };
  },

  cpl(cost: number, leads: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'cost_per_lead',
      value: safeDivide(cost, leads, warnings),
      unit: 'currency',
      formula: 'cost / leads',
      inputs: { cost, leads },
      warnings: [...warnings, 'Lead quality varies; pair CPL with qualified-lead metrics.'],
    };
  },

  cac(marketingCost: number, salesCost: number, newCustomers: number): MetricResult {
    const warnings: string[] = [];
    const value = safeDivide(marketingCost + salesCost, newCustomers, warnings);
    return {
      metric: 'cac',
      value,
      unit: 'currency',
      formula: '(marketing_cost + sales_cost) / new_customers',
      inputs: { marketingCost, salesCost, newCustomers },
      warnings: [
        ...warnings,
        'State whether this is blended or paid-only CAC and which costs are included.',
      ],
    };
  },

  roas(attributedRevenue: number, adSpend: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'roas',
      value: safeDivide(attributedRevenue, adSpend, warnings),
      unit: 'ratio',
      formula: 'attributed_revenue / ad_spend',
      inputs: { attributedRevenue, adSpend },
      warnings: [
        ...warnings,
        'Attribution-dependent. State model and window. ROAS is not profit or incrementality.',
      ],
    };
  },

  mer(totalRevenue: number, totalMarketingSpend: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'mer',
      value: safeDivide(totalRevenue, totalMarketingSpend, warnings),
      unit: 'ratio',
      formula: 'total_revenue / total_marketing_spend',
      inputs: { totalRevenue, totalMarketingSpend },
      warnings,
    };
  },

  marketingRoi(attributedGrossProfit: number, marketingCost: number): MetricResult {
    const warnings: string[] = [];
    const value = safeDivide(attributedGrossProfit - marketingCost, marketingCost, warnings);
    return {
      metric: 'marketing_roi',
      value: value === null ? null : value * 100,
      unit: 'percentage',
      formula: '((attributed_gross_profit - marketing_cost) / marketing_cost) * 100',
      inputs: { attributedGrossProfit, marketingCost },
      warnings: [...warnings, 'Use gross profit, not revenue, for a true ROI.'],
    };
  },

  aov(revenue: number, orders: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'aov',
      value: safeDivide(revenue, orders, warnings),
      unit: 'currency',
      formula: 'revenue / orders',
      inputs: { revenue, orders },
      warnings,
    };
  },

  ltv(
    avgOrderValue: number,
    purchaseFrequency: number,
    grossMargin: number,
    avgLifespan: number,
  ): MetricResult {
    const warnings: string[] = [];
    const value = avgOrderValue * purchaseFrequency * grossMargin * avgLifespan;
    if (grossMargin > 1) warnings.push('grossMargin appears to be a percentage > 1; use a 0-1 ratio.');
    return {
      metric: 'ltv',
      value,
      unit: 'currency',
      formula: 'avg_order_value * purchase_frequency * gross_margin * avg_lifespan',
      inputs: { avgOrderValue, purchaseFrequency, grossMargin, avgLifespan },
      warnings: [...warnings, 'Model-dependent; state whether this is revenue-LTV or profit-LTV.'],
    };
  },

  ltvCacRatio(ltv: number, cac: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'ltv_cac_ratio',
      value: safeDivide(ltv, cac, warnings),
      unit: 'ratio',
      formula: 'ltv / cac',
      inputs: { ltv, cac },
      warnings: [...warnings, 'A ~3:1 heuristic is context-dependent, not a universal rule.'],
    };
  },

  cacPayback(cac: number, monthlyGrossProfitPerCustomer: number): MetricResult {
    const warnings: string[] = [];
    return {
      metric: 'cac_payback',
      value: safeDivide(cac, monthlyGrossProfitPerCustomer, warnings),
      unit: 'months',
      formula: 'cac / monthly_gross_profit_per_customer',
      inputs: { cac, monthlyGrossProfitPerCustomer },
      warnings,
    };
  },

  churnRate(customersLost: number, customersAtStart: number): MetricResult {
    const warnings: string[] = [];
    const value = safeDivide(customersLost, customersAtStart, warnings);
    return {
      metric: 'churn_rate',
      value: value === null ? null : value * 100,
      unit: 'percentage',
      formula: '(customers_lost / customers_at_start) * 100',
      inputs: { customersLost, customersAtStart },
      warnings: [...warnings, 'Track logo churn and revenue churn separately.'],
    };
  },

  nrr(startingMrr: number, expansion: number, contraction: number, churn: number): MetricResult {
    const warnings: string[] = [];
    const value = safeDivide(startingMrr + expansion - contraction - churn, startingMrr, warnings);
    return {
      metric: 'nrr',
      value: value === null ? null : value * 100,
      unit: 'percentage',
      formula: '((starting_mrr + expansion - contraction - churn) / starting_mrr) * 100',
      inputs: { startingMrr, expansion, contraction, churn },
      warnings,
    };
  },
} as const;

export type MetricName = keyof typeof MetricEngine;
