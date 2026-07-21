/**
 * Standard connector interfaces. Skills and tools depend ONLY on these
 * interfaces, never on a vendor SDK, so adapters are replaceable and versioned.
 */

export type ConnectorCategory =
  | 'analytics'
  | 'advertising'
  | 'social'
  | 'crm'
  | 'email'
  | 'commerce'
  | 'content'
  | 'research'
  | 'automation';

export interface ConnectorDescriptor {
  name: string;
  provider: string;
  category: ConnectorCategory;
  authMethod: 'none' | 'api_key' | 'oauth2' | 'service_account' | 'basic';
  requiredScopes: string[];
  readCapabilities: string[];
  writeCapabilities: string[];
  apiVersion: string;
  sandboxAvailable: boolean;
  dataSensitivity: 'public' | 'internal' | 'confidential' | 'restricted';
  implementation: 'mock' | 'live';
  lastReviewed: string;
}

export interface HealthCheckResult {
  healthy: boolean;
  detail: string;
}

export interface DateRange {
  start: string; // ISO date
  end: string; // ISO date
  timezone: string;
}

/** All connectors expose a descriptor and a health check. */
export interface Connector {
  readonly descriptor: ConnectorDescriptor;
  healthCheck(): Promise<HealthCheckResult>;
}

/** Read-only capability marker: connectors that only read data. */
export interface ReadOnlyConnector extends Connector {
  readonly readOnly: true;
}

/**
 * Write connectors must support dry-run, an idempotency key and produce a
 * preview of the change. Live execution additionally requires a valid approval.
 */
export interface WriteConnector extends Connector {
  supportsDryRun(): boolean;
}

export interface MetricsRow {
  date: string;
  [metric: string]: string | number;
}

/** Common read shape for analytics/advertising connectors. */
export interface MetricsQuery {
  range: DateRange;
  dimensions?: string[];
  metrics: string[];
}
