"""Deterministic marketing metric calculations.

Pure functions that mirror ``src/core/metric-engine.ts`` and align with
``config/metrics-catalogue.yaml``. Every result carries the formula, the inputs
used and any warnings, so calculations are transparent and auditable.
"""

from __future__ import annotations

from dataclasses import dataclass, field


@dataclass(frozen=True)
class MetricResult:
    """The outcome of a single metric calculation."""

    metric: str
    value: float | None
    unit: str
    formula: str
    inputs: dict[str, float]
    warnings: list[str] = field(default_factory=list)


def _safe_divide(numerator: float, denominator: float, warnings: list[str]) -> float | None:
    if denominator == 0:
        warnings.append("Denominator is zero; result is undefined.")
        return None
    return numerator / denominator


def ctr(clicks: float, impressions: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(clicks, impressions, warnings)
    return MetricResult(
        metric="ctr",
        value=None if value is None else value * 100,
        unit="percentage",
        formula="(clicks / impressions) * 100",
        inputs={"clicks": clicks, "impressions": impressions},
        warnings=warnings,
    )


def cpc(cost: float, clicks: float) -> MetricResult:
    warnings: list[str] = []
    return MetricResult(
        metric="cpc",
        value=_safe_divide(cost, clicks, warnings),
        unit="currency",
        formula="cost / clicks",
        inputs={"cost": cost, "clicks": clicks},
        warnings=warnings,
    )


def cpm(cost: float, impressions: float) -> MetricResult:
    warnings: list[str] = []
    per_imp = _safe_divide(cost, impressions, warnings)
    return MetricResult(
        metric="cpm",
        value=None if per_imp is None else per_imp * 1000,
        unit="currency",
        formula="(cost / impressions) * 1000",
        inputs={"cost": cost, "impressions": impressions},
        warnings=warnings,
    )


def conversion_rate(conversions: float, denominator: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(conversions, denominator, warnings)
    warnings.append(
        "State the denominator explicitly (sessions, users or clicks) and keep it stable."
    )
    return MetricResult(
        metric="conversion_rate",
        value=None if value is None else value * 100,
        unit="percentage",
        formula="(conversions / denominator) * 100",
        inputs={"conversions": conversions, "denominator": denominator},
        warnings=warnings,
    )


def cpa(cost: float, conversions: float) -> MetricResult:
    warnings: list[str] = []
    return MetricResult(
        metric="cost_per_conversion",
        value=_safe_divide(cost, conversions, warnings),
        unit="currency",
        formula="cost / conversions",
        inputs={"cost": cost, "conversions": conversions},
        warnings=warnings,
    )


def cac(marketing_cost: float, sales_cost: float, new_customers: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(marketing_cost + sales_cost, new_customers, warnings)
    warnings.append("State whether this is blended or paid-only CAC and which costs are included.")
    return MetricResult(
        metric="cac",
        value=value,
        unit="currency",
        formula="(marketing_cost + sales_cost) / new_customers",
        inputs={
            "marketing_cost": marketing_cost,
            "sales_cost": sales_cost,
            "new_customers": new_customers,
        },
        warnings=warnings,
    )


def roas(attributed_revenue: float, ad_spend: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(attributed_revenue, ad_spend, warnings)
    warnings.append(
        "Attribution-dependent. State model and window. ROAS is not profit or incrementality."
    )
    return MetricResult(
        metric="roas",
        value=value,
        unit="ratio",
        formula="attributed_revenue / ad_spend",
        inputs={"attributed_revenue": attributed_revenue, "ad_spend": ad_spend},
        warnings=warnings,
    )


def mer(total_revenue: float, total_marketing_spend: float) -> MetricResult:
    warnings: list[str] = []
    return MetricResult(
        metric="mer",
        value=_safe_divide(total_revenue, total_marketing_spend, warnings),
        unit="ratio",
        formula="total_revenue / total_marketing_spend",
        inputs={"total_revenue": total_revenue, "total_marketing_spend": total_marketing_spend},
        warnings=warnings,
    )


def aov(revenue: float, orders: float) -> MetricResult:
    warnings: list[str] = []
    return MetricResult(
        metric="aov",
        value=_safe_divide(revenue, orders, warnings),
        unit="currency",
        formula="revenue / orders",
        inputs={"revenue": revenue, "orders": orders},
        warnings=warnings,
    )


def ltv(
    avg_order_value: float,
    purchase_frequency: float,
    gross_margin: float,
    avg_lifespan: float,
) -> MetricResult:
    warnings: list[str] = []
    if gross_margin > 1:
        warnings.append("gross_margin appears to be a percentage > 1; use a 0-1 ratio.")
    warnings.append("Model-dependent; state whether this is revenue-LTV or profit-LTV.")
    return MetricResult(
        metric="ltv",
        value=avg_order_value * purchase_frequency * gross_margin * avg_lifespan,
        unit="currency",
        formula="avg_order_value * purchase_frequency * gross_margin * avg_lifespan",
        inputs={
            "avg_order_value": avg_order_value,
            "purchase_frequency": purchase_frequency,
            "gross_margin": gross_margin,
            "avg_lifespan": avg_lifespan,
        },
        warnings=warnings,
    )


def ltv_cac_ratio(ltv_value: float, cac_value: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(ltv_value, cac_value, warnings)
    warnings.append("A ~3:1 heuristic is context-dependent, not a universal rule.")
    return MetricResult(
        metric="ltv_cac_ratio",
        value=value,
        unit="ratio",
        formula="ltv / cac",
        inputs={"ltv": ltv_value, "cac": cac_value},
        warnings=warnings,
    )


def cac_payback(cac_value: float, monthly_gross_profit_per_customer: float) -> MetricResult:
    warnings: list[str] = []
    return MetricResult(
        metric="cac_payback",
        value=_safe_divide(cac_value, monthly_gross_profit_per_customer, warnings),
        unit="months",
        formula="cac / monthly_gross_profit_per_customer",
        inputs={
            "cac": cac_value,
            "monthly_gross_profit_per_customer": monthly_gross_profit_per_customer,
        },
        warnings=warnings,
    )


def churn_rate(customers_lost: float, customers_at_start: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(customers_lost, customers_at_start, warnings)
    warnings.append("Track logo churn and revenue churn separately.")
    return MetricResult(
        metric="churn_rate",
        value=None if value is None else value * 100,
        unit="percentage",
        formula="(customers_lost / customers_at_start) * 100",
        inputs={"customers_lost": customers_lost, "customers_at_start": customers_at_start},
        warnings=warnings,
    )


def nrr(starting_mrr: float, expansion: float, contraction: float, churn: float) -> MetricResult:
    warnings: list[str] = []
    value = _safe_divide(
        starting_mrr + expansion - contraction - churn, starting_mrr, warnings
    )
    return MetricResult(
        metric="nrr",
        value=None if value is None else value * 100,
        unit="percentage",
        formula="((starting_mrr + expansion - contraction - churn) / starting_mrr) * 100",
        inputs={
            "starting_mrr": starting_mrr,
            "expansion": expansion,
            "contraction": contraction,
            "churn": churn,
        },
        warnings=warnings,
    )
