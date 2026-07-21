"""Deterministic statistics helpers for experiment planning and analysis.

Implemented without heavy dependencies: the normal quantile and CDF use standard
numerical approximations so results are reproducible and the module works even
without SciPy installed. For production-grade sequential testing, prefer a
dedicated, reviewed statistics library.
"""

from __future__ import annotations

import math
from dataclasses import dataclass


def _norm_ppf(p: float) -> float:
    """Inverse standard-normal CDF (Acklam's rational approximation)."""
    if not 0.0 < p < 1.0:
        raise ValueError("p must be in the open interval (0, 1)")

    a = [
        -3.969683028665376e01,
        2.209460984245205e02,
        -2.759285104469687e02,
        1.383577518672690e02,
        -3.066479806614716e01,
        2.506628277459239e00,
    ]
    b = [
        -5.447609879822406e01,
        1.615858368580409e02,
        -1.556989798598866e02,
        6.680131188771972e01,
        -1.328068155288572e01,
    ]
    c = [
        -7.784894002430293e-03,
        -3.223964580411365e-01,
        -2.400758277161838e00,
        -2.549732539343734e00,
        4.374664141464968e00,
        2.938163982698783e00,
    ]
    d = [
        7.784695709041462e-03,
        3.224671290700398e-01,
        2.445134137142996e00,
        3.754408661907416e00,
    ]

    p_low = 0.02425
    p_high = 1 - p_low

    if p < p_low:
        q = math.sqrt(-2 * math.log(p))
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / (
            (((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1
        )
    if p <= p_high:
        q = p - 0.5
        r = q * q
        return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (
            ((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1
        )
    q = math.sqrt(-2 * math.log(1 - p))
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / (
        (((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1
    )


def _norm_cdf(z: float) -> float:
    """Standard-normal CDF via the error function."""
    return 0.5 * (1 + math.erf(z / math.sqrt(2)))


@dataclass(frozen=True)
class SampleSizeResult:
    per_variant: int
    total: int
    baseline_rate: float
    treatment_rate: float
    alpha: float
    power: float
    variants: int
    estimated_days: float | None
    assumptions: list[str]


def sample_size_two_proportions(
    baseline_rate: float,
    mde: float,
    *,
    relative: bool = False,
    alpha: float = 0.05,
    power: float = 0.8,
    variants: int = 2,
    daily_eligible_traffic: float | None = None,
) -> SampleSizeResult:
    """Sample size per variant for a two-proportion test (two-sided).

    ``mde`` is the minimum detectable effect: an absolute change in rate by
    default, or a relative change when ``relative=True``.
    """
    if not 0.0 < baseline_rate < 1.0:
        raise ValueError("baseline_rate must be in (0, 1)")
    if mde <= 0:
        raise ValueError("mde must be positive")

    treatment_rate = baseline_rate * (1 + mde) if relative else baseline_rate + mde
    if not 0.0 < treatment_rate < 1.0:
        raise ValueError("Resulting treatment rate is out of (0, 1); reduce the MDE")

    z_alpha = _norm_ppf(1 - alpha / 2)
    z_beta = _norm_ppf(power)

    p1, p2 = baseline_rate, treatment_rate
    pooled = (p1 + p2) / 2
    numerator = (
        z_alpha * math.sqrt(2 * pooled * (1 - pooled))
        + z_beta * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))
    ) ** 2
    per_variant = math.ceil(numerator / (p2 - p1) ** 2)
    total = per_variant * variants

    estimated_days: float | None = None
    assumptions = [
        f"alpha={alpha}, power={power}, two-sided test",
        "absolute MDE" if not relative else "relative MDE",
        "equal allocation across variants",
    ]
    if daily_eligible_traffic and daily_eligible_traffic > 0:
        estimated_days = total / daily_eligible_traffic
        assumptions.append(f"{daily_eligible_traffic:g} eligible units/day")

    return SampleSizeResult(
        per_variant=per_variant,
        total=total,
        baseline_rate=baseline_rate,
        treatment_rate=treatment_rate,
        alpha=alpha,
        power=power,
        variants=variants,
        estimated_days=estimated_days,
        assumptions=assumptions,
    )


@dataclass(frozen=True)
class TestResult:
    control_rate: float
    treatment_rate: float
    absolute_lift: float
    relative_lift: float | None
    z_score: float
    p_value: float
    significant: bool
    alpha: float
    warnings: list[str]


def two_proportion_z_test(
    control_conversions: int,
    control_n: int,
    treatment_conversions: int,
    treatment_n: int,
    *,
    alpha: float = 0.05,
) -> TestResult:
    """Two-sided two-proportion z-test comparing treatment to control."""
    if control_n <= 0 or treatment_n <= 0:
        raise ValueError("sample sizes must be positive")

    warnings: list[str] = []
    p1 = control_conversions / control_n
    p2 = treatment_conversions / treatment_n
    pooled = (control_conversions + treatment_conversions) / (control_n + treatment_n)
    se = math.sqrt(pooled * (1 - pooled) * (1 / control_n + 1 / treatment_n))

    if se == 0:
        warnings.append("Standard error is zero; test is undefined.")
        return TestResult(p1, p2, p2 - p1, None, 0.0, 1.0, False, alpha, warnings)

    z = (p2 - p1) / se
    p_value = 2 * (1 - _norm_cdf(abs(z)))
    relative_lift = (p2 - p1) / p1 if p1 > 0 else None

    if min(control_n, treatment_n) < 100:
        warnings.append("Small samples; the normal approximation may be unreliable.")

    return TestResult(
        control_rate=p1,
        treatment_rate=p2,
        absolute_lift=p2 - p1,
        relative_lift=relative_lift,
        z_score=z,
        p_value=p_value,
        significant=p_value < alpha,
        alpha=alpha,
        warnings=warnings,
    )
