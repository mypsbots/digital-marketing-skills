import { generateId, nowIso } from '../utils/ids.js';
import { digest } from '../security/redaction.js';
import { logger } from '../utils/logger.js';
import type { RiskLevel } from './types.js';

export interface AuditEvent {
  id: string;
  timestamp: string;
  actor: { type: 'user' | 'agent' | 'system'; id: string };
  action: string;
  tool?: string;
  skill_id?: string;
  resource?: string;
  risk_level?: RiskLevel;
  approval_id?: string;
  dry_run?: boolean;
  outcome: 'success' | 'partial_success' | 'blocked' | 'denied' | 'failed';
  inputs_digest?: string;
  details?: Record<string, unknown>;
}

/**
 * Append-only audit log. In this reference implementation events are kept in
 * memory and emitted to the structured logger. A production deployment would
 * persist them to durable, tamper-evident storage per config/retention-policies.
 */
export class AuditEngine {
  private events: AuditEvent[] = [];

  record(params: {
    action: string;
    outcome: AuditEvent['outcome'];
    actor?: AuditEvent['actor'];
    tool?: string;
    skill_id?: string;
    resource?: string;
    risk_level?: RiskLevel;
    approval_id?: string;
    dry_run?: boolean;
    inputs?: unknown;
    details?: Record<string, unknown>;
  }): string {
    const event: AuditEvent = {
      id: generateId('audit'),
      timestamp: nowIso(),
      actor: params.actor ?? { type: 'agent', id: 'mcp-client' },
      action: params.action,
      tool: params.tool,
      skill_id: params.skill_id,
      resource: params.resource,
      risk_level: params.risk_level,
      approval_id: params.approval_id,
      dry_run: params.dry_run,
      outcome: params.outcome,
      inputs_digest: params.inputs !== undefined ? digest(params.inputs) : undefined,
      details: params.details,
    };
    this.events.push(event);
    logger.info('audit_event', { audit: event });
    return event.id;
  }

  list(): AuditEvent[] {
    return [...this.events];
  }
}

export const auditEngine = new AuditEngine();
