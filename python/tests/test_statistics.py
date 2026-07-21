import math

import pytest

from dm_skills import statistics as stats


def test_norm_ppf_known_quantiles() -> None:
    assert math.isclose(stats._norm_ppf(0.975), 1.959964, abs_tol=1e-4)
    assert math.isclose(stats._norm_ppf(0.5), 0.0, abs_tol=1e-6)


def test_sample_size_absolute_mde() -> None:
    r = stats.sample_size_two_proportions(0.10, 0.02, alpha=0.05, power=0.8)
    # Standard result for these parameters is ~3,835 per variant.
    assert 3700 <= r.per_variant <= 3900
    assert r.total == r.per_variant * 2
    assert r.treatment_rate == pytest.approx(0.12)


def test_sample_size_estimates_duration() -> None:
    r = stats.sample_size_two_proportions(
        0.05, 0.01, daily_eligible_traffic=2000
    )
    assert r.estimated_days is not None
    assert r.estimated_days > 0


def test_sample_size_rejects_impossible_rate() -> None:
    with pytest.raises(ValueError):
        stats.sample_size_two_proportions(0.99, 0.05)


def test_two_proportion_z_test_detects_significant_difference() -> None:
    r = stats.two_proportion_z_test(100, 1000, 160, 1000)
    assert r.treatment_rate > r.control_rate
    assert r.significant is True
    assert 0 <= r.p_value <= 1


def test_two_proportion_z_test_no_difference() -> None:
    r = stats.two_proportion_z_test(100, 1000, 100, 1000)
    assert r.significant is False
    assert r.p_value == pytest.approx(1.0, abs=1e-6)
