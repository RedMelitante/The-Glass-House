/**
 * Cloudflare Worker for theghglass.com.
 *
 * Static files (the Astro build in ./dist) are served by the ASSETS binding; `_redirects` and `_headers`
 * in public/ are applied by Cloudflare before this script runs. The script only handles what static
 * hosting can't: form submissions.
 *
 * Every site form posts to /thank-you/ with a hidden `form-name` field and a `bot-field` honeypot.
 * Submissions are forwarded to FORM_WEBHOOK_URL and the visitor is redirected to the thank-you page:
 * - a Google Apps Script web app (script.google.com) gets JSON with photos base64-encoded, plus
 *   FORM_WEBHOOK_SECRET — see google-apps-script/form-email.gs, which emails it from the business's
 *   Google account;
 * - any other endpoint (Formspree, Make, Zapier, a CRM…) gets the original multipart form.
 */

interface Env {
  ASSETS: Fetcher;
  /** Where form submissions are delivered. Set with `wrangler secret put FORM_WEBHOOK_URL`. */
  FORM_WEBHOOK_URL?: string;
  /** Shared secret sent to the Apps Script so strangers can't use it to send mail. */
  FORM_WEBHOOK_SECRET?: string;
}

const FORM_PATH = '/thank-you/';
/** Apps Script and Gmail cap a message's attachments at 25 MB; base64 adds a third, so stay well under. */
const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === 'POST' && (url.pathname === FORM_PATH || url.pathname === '/thank-you')) {
      return handleForm(request, env, ctx, url);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function handleForm(request: Request, env: Env, ctx: ExecutionContext, url: URL): Promise<Response> {
  const thankYou = Response.redirect(new URL(FORM_PATH, url).href, 303);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return new Response('Invalid form submission', { status: 400 });
  }

  // Honeypot filled in: a bot. Pretend it worked.
  if (data.get('bot-field')) return thankYou;

  const form = String(data.get('form-name') ?? 'unknown');
  data.delete('bot-field');
  data.set('submitted_at', new Date().toISOString());
  data.set('page', request.headers.get('referer') ?? '');

  if (!env.FORM_WEBHOOK_URL) {
    console.error(`Form "${form}" received but FORM_WEBHOOK_URL is not set; submission not delivered.`, Object.fromEntries(
      [...data.entries()].filter(([, v]) => typeof v === 'string'),
    ));
    return thankYou;
  }

  const toAppsScript = new URL(env.FORM_WEBHOOK_URL).hostname === 'script.google.com';
  ctx.waitUntil(
    (toAppsScript
      ? toJson(data, env.FORM_WEBHOOK_SECRET ?? '').then((body) =>
          fetch(env.FORM_WEBHOOK_URL!, { method: 'POST', body, headers: { 'Content-Type': 'application/json' } }),
        )
      : fetch(env.FORM_WEBHOOK_URL, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
    )
      .then((res) => {
        if (!res.ok) console.error(`Form "${form}" webhook returned ${res.status}`);
      })
      .catch((err) => console.error(`Form "${form}" webhook failed`, err)),
  );
  return thankYou;
}

/**
 * JSON for the Apps Script: text fields in form order (repeated names, like the service checkboxes,
 * become arrays) and uploads as base64. Uploads past the size cap are listed by name instead.
 */
async function toJson(data: FormData, secret: string): Promise<string> {
  const fields: Record<string, string | string[]> = {};
  const files: Array<{ name: string; type: string; data: string }> = [];
  const skipped: string[] = [];
  let bytes = 0;
  for (const [key, value] of data.entries()) {
    if (typeof value !== 'string') {
      if (!value.size) continue;
      if (bytes + value.size > MAX_ATTACHMENT_BYTES) {
        skipped.push(value.name);
        continue;
      }
      bytes += value.size;
      files.push({ name: value.name, type: value.type || 'application/octet-stream', data: base64(await value.arrayBuffer()) });
      continue;
    }
    const prev = fields[key];
    fields[key] = prev === undefined ? value : [...(Array.isArray(prev) ? prev : [prev]), value];
  }
  if (skipped.length) fields['files_not_attached (too large)'] = skipped.join(', ');
  return JSON.stringify({ secret, fields, files });
}

function base64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary);
}
