export type ConnectorErrorCode =
  | 'auth_failed'
  | 'not_found'
  | 'rate_limited'
  | 'unavailable'
  | 'invalid_request'
  | 'permission_denied'
  | 'unknown';

export class ConnectorError extends Error {
  constructor(
    public readonly code: ConnectorErrorCode,
    message: string,
    public readonly retryable = false,
  ) {
    super(message);
    this.name = 'ConnectorError';
  }
}
