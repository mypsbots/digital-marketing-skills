import { describe, expect, it } from 'vitest';
import { PolicyEngine } from '../src/core/policy-engine.js';

const baseParams = {
  isWrite: false,
  riskLevel: 'low' as const,
  externalSideEffect: false,
  costImplication: false,
  dryRun: false,
  approvalId: null,
};

describe('PolicyEngine', () => {
  it('allows read-only actions', () => {
    const engine = new PolicyEngine({ readOnly: true, requireApproval: true, writeDryRunDefault: true });
    const d = engine.evaluate({ ...baseParams });
    expect(d.allowed).toBe(true);
    expect(d.status).toBe('success');
  });

  it('blocks writes when server is read-only', () => {
    const engine = new PolicyEngine({ readOnly: true, requireApproval: true, writeDryRunDefault: true });
    const d = engine.evaluate({ ...baseParams, isWrite: true });
    expect(d.allowed).toBe(false);
    expect(d.status).toBe('permission_denied');
  });

  it('requires approval for high-risk writes without an approval id', () => {
    const engine = new PolicyEngine({ readOnly: false, requireApproval: true, writeDryRunDefault: true });
    const d = engine.evaluate({ ...baseParams, isWrite: true, riskLevel: 'high' });
    expect(d.allowed).toBe(false);
    expect(d.status).toBe('approval_required');
    expect(d.requiresApproval).toBe(true);
  });

  it('allows a high-risk write when a valid approval id is supplied', () => {
    const engine = new PolicyEngine({ readOnly: false, requireApproval: true, writeDryRunDefault: true });
    const d = engine.evaluate({ ...baseParams, isWrite: true, riskLevel: 'high', approvalId: 'appr_123' });
    expect(d.allowed).toBe(true);
    expect(d.status).toBe('success');
  });

  it('allows dry-run writes without approval and notes no change is made', () => {
    const engine = new PolicyEngine({ readOnly: true, requireApproval: true, writeDryRunDefault: true });
    const d = engine.evaluate({ ...baseParams, isWrite: true, riskLevel: 'high', dryRun: true });
    expect(d.allowed).toBe(true);
    expect(d.reasons.join(' ')).toMatch(/dry-run/i);
  });

  it('requires approval when an action incurs cost', () => {
    const engine = new PolicyEngine({ readOnly: false, requireApproval: true, writeDryRunDefault: true });
    const d = engine.evaluate({ ...baseParams, isWrite: true, costImplication: true });
    expect(d.status).toBe('approval_required');
  });
});
