/**
 * PII and secret redaction utilities.
 *
 * Removes obvious secrets and personal data from arbitrary structures before they
 * are written to logs or returned to a model. This is defence-in-depth, not a
 * substitute for not collecting sensitive data in the first place.
 */

const SECRET_KEY_PATTERN =
  /(pass(word)?|secret|token|api[_-]?key|authorization|auth|credential|private[_-]?key|refresh[_-]?token|client[_-]?secret)/i;

const EMAIL_PATTERN = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
// Loosely matches international phone numbers with 7+ digits.
const PHONE_PATTERN = /(?:(?:\+|00)\d{1,3}[\s-]?)?(?:\(?\d{2,4}\)?[\s-]?){2,5}\d{2,4}/g;
const CARD_PATTERN = /\b(?:\d[ -]?){13,19}\b/g;

const REDACTED = '[REDACTED]';

function redactString(value: string): string {
  return value
    .replace(EMAIL_PATTERN, '[EMAIL]')
    .replace(CARD_PATTERN, (m) => (m.replace(/[^0-9]/g, '').length >= 13 ? '[CARD]' : m))
    .replace(PHONE_PATTERN, (m) => (m.replace(/[^0-9]/g, '').length >= 7 ? '[PHONE]' : m));
}

export function redact<T>(input: T, depth = 0): T {
  if (depth > 8) return input;
  if (input == null) return input;

  if (typeof input === 'string') {
    return redactString(input) as unknown as T;
  }

  if (Array.isArray(input)) {
    return input.map((item) => redact(item, depth + 1)) as unknown as T;
  }

  if (typeof input === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
      if (SECRET_KEY_PATTERN.test(key)) {
        out[key] = REDACTED;
      } else {
        out[key] = redact(value, depth + 1);
      }
    }
    return out as unknown as T;
  }

  return input;
}

/** Produce a short, non-reversible digest for audit logs (no raw PII/secrets). */
export function digest(input: unknown): string {
  const json = JSON.stringify(redact(input));
  let hash = 0;
  for (let i = 0; i < json.length; i++) {
    hash = (hash << 5) - hash + json.charCodeAt(i);
    hash |= 0;
  }
  return `d_${(hash >>> 0).toString(16)}_${json.length}`;
}
