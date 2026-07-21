import { generateId, nowIso } from '../utils/ids.js';
import { auditEngine } from './audit-engine.js';

export type ApprovalState =
  | 'not_required'
  | 'draft'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'expired'
  | 'cancelled'
  | 'executed'
  | 'failed';

export interface ApprovalRequest {
  id: string;
  requested_action: string;
  business_reason: string;
  platform?: string;
  account?: string;
  asset?: string;
  proposed_changes?: unknown[];
  previous_value?: unknown;
  proposed_value?: unknown;
  estimated_cost_impact?: { amount: number; currency: string };
  expected_outcome?: string;
  risks?: string[];
  evidence?: string[];
  requestor?: string;
  approver?: string;
  expiry: string;
  rollback_guidance?: string;
  state: ApprovalState;
  created_at: string;
  decided_at?: string;
}

/**
 * Approval engine. Creates, tracks and validates approval records. High-risk
 * actions must reference a valid, approved and unexpired record before they can
 * execute. This reference implementation stores records in memory.
 */
export class ApprovalEngine {
  private requests = new Map<string, ApprovalRequest>();

  constructor(private readonly expiryHours = 72) {}

  create(input: Omit<ApprovalRequest, 'id' | 'state' | 'created_at' | 'expiry'> & {
    expiryHours?: number;
  }): ApprovalRequest {
    const now = new Date();
    const expiry = new Date(now.getTime() + (input.expiryHours ?? this.expiryHours) * 3600_000);
    const request: ApprovalRequest = {
      ...input,
      id: generateId('appr'),
      state: 'pending',
      created_at: now.toISOString(),
      expiry: expiry.toISOString(),
    };
    this.requests.set(request.id, request);
    auditEngine.record({
      action: 'approval.create',
      outcome: 'success',
      approval_id: request.id,
      details: { requested_action: request.requested_action },
    });
    return request;
  }

  get(id: string): ApprovalRequest | undefined {
    return this.requests.get(id);
  }

  decide(id: string, decision: 'approved' | 'rejected', approver?: string): ApprovalRequest | undefined {
    const req = this.requests.get(id);
    if (!req) return undefined;
    req.state = decision;
    req.approver = approver;
    req.decided_at = nowIso();
    auditEngine.record({ action: `approval.${decision}`, outcome: 'success', approval_id: id });
    return req;
  }

  /** Validate that an approval id is usable for execution right now. */
  validateForExecution(id: string): { valid: boolean; reason?: string } {
    const req = this.requests.get(id);
    if (!req) return { valid: false, reason: 'Approval id not found.' };
    if (req.state !== 'approved') return { valid: false, reason: `Approval is ${req.state}, not approved.` };
    if (new Date(req.expiry).getTime() < Date.now()) {
      req.state = 'expired';
      return { valid: false, reason: 'Approval has expired.' };
    }
    return { valid: true };
  }

  markExecuted(id: string, outcome: 'executed' | 'failed'): void {
    const req = this.requests.get(id);
    if (req) req.state = outcome;
  }

  list(): ApprovalRequest[] {
    return [...this.requests.values()];
  }
}

export const approvalEngine = new ApprovalEngine();
