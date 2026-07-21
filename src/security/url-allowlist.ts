/**
 * Outbound URL allowlist to mitigate SSRF and data exfiltration. Only hosts on
 * the allowlist may be contacted by connectors. Private/loopback ranges are
 * always denied unless explicitly allowed for local development.
 */
const DEFAULT_ALLOWED_HOSTS = new Set<string>([
  // Public policy/reference domains used by policy-refresh workflows.
  'developers.google.com',
  'support.google.com',
  'www.facebook.com',
  'developers.facebook.com',
  'business.linkedin.com',
]);

const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^0\.0\.0\.0$/,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^::1$/,
  /^169\.254\./,
];

export interface UrlAllowlistOptions {
  allowedHosts?: Iterable<string>;
  allowPrivate?: boolean;
}

export class UrlAllowlist {
  private readonly allowed: Set<string>;
  private readonly allowPrivate: boolean;

  constructor(options: UrlAllowlistOptions = {}) {
    this.allowed = new Set([...DEFAULT_ALLOWED_HOSTS, ...(options.allowedHosts ?? [])]);
    this.allowPrivate = options.allowPrivate ?? false;
  }

  /** Returns true if the URL is permitted. */
  isAllowed(rawUrl: string): boolean {
    let url: URL;
    try {
      url = new URL(rawUrl);
    } catch {
      return false;
    }
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return false;

    const host = url.hostname;
    if (!this.allowPrivate && PRIVATE_HOST_PATTERNS.some((p) => p.test(host))) {
      return false;
    }
    return this.allowed.has(host);
  }

  assertAllowed(rawUrl: string): void {
    if (!this.isAllowed(rawUrl)) {
      throw new Error(`URL not on allowlist or not permitted: ${rawUrl}`);
    }
  }
}
