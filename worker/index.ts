/**
 * Cloudflare Worker for theghglass.com.
 *
 * Static files (the Astro build in ./dist) are served by the ASSETS binding; `_redirects` and `_headers`
 * in public/ are applied by Cloudflare before this script runs. The script only handles what static
 * hosting can't: form submissions.
 *
 * Every site form posts to /thank-you/ with a hidden `form-name` field and a `bot-field` honeypot.
 * Submissions are forwarded, unchanged (multipart, including uploaded photos), to FORM_WEBHOOK_URL —
 * e.g. a Formspree / Make / Zapier / CRM endpoint — and the visitor is redirected to the thank-you page.
 */

interface Env {
  ASSETS: Fetcher;
  /** Where form submissions are delivered. Set with `wrangler secret put FORM_WEBHOOK_URL`. */
  FORM_WEBHOOK_URL?: string;
}

const FORM_PATH = '/thank-you/';

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

  ctx.waitUntil(
    fetch(env.FORM_WEBHOOK_URL, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) console.error(`Form "${form}" webhook returned ${res.status}`);
      })
      .catch((err) => console.error(`Form "${form}" webhook failed`, err)),
  );
  return thankYou;
}
