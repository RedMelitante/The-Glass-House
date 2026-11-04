/**
 * Website form → email, sent from The Glass House's own Google account.
 *
 * Runs as a Google Apps Script web app owned by theghglass@gmail.com. The website's Cloudflare Worker
 * posts every form submission here (JSON, photos base64-encoded); this script emails it to
 * NOTIFY_EMAIL with the photos attached and Reply-To set to the customer.
 *
 * Setup (once, signed in as theghglass@gmail.com) — full steps in README.md, "Form emails":
 *   1. script.google.com → New project → paste this file.
 *   2. Project Settings → Script properties → add SHARED_SECRET (a long random string).
 *   3. Deploy → New deployment → Web app; Execute as: Me; Who has access: Anyone. Authorize.
 *   4. Put the web app URL and the same secret on the Worker:
 *        npx wrangler secret put FORM_WEBHOOK_URL
 *        npx wrangler secret put FORM_WEBHOOK_SECRET
 */

const NOTIFY_EMAIL = 'theghglass@gmail.com';

const FORM_TITLES = {
  estimate: 'Free estimate request',
  'quick-estimate': 'Free estimate request (home page)',
  'service-estimate': 'Free estimate request (service page)',
  'product-quote': 'Product quote request',
  contact: 'Contact message',
  newsletter: 'Newsletter sign-up',
};

const LABELS = {
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
  town: 'Town',
  when: 'Timeline',
  project_type: 'Project type',
  services: 'Services',
  topic: 'Topic',
  message: 'Message',
  notes: 'Notes',
  product: 'Product',
  width: 'Width (in)',
  height: 'Height (in)',
  thickness: 'Thickness',
  quantity: 'Quantity',
  glass: 'Glass',
  edge: 'Edge',
  hardware: 'Hardware',
  installation: 'Installation',
  sms_consent: 'OK to text',
  page: 'Sent from page',
  submitted_at: 'Submitted',
};

const HIDDEN = ['form-name'];

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: 'bad request' });
  }

  const secret = PropertiesService.getScriptProperties().getProperty('SHARED_SECRET');
  if (!secret || body.secret !== secret) return reply({ ok: false, error: 'unauthorized' });

  const fields = body.fields || {};
  const form = String(fields['form-name'] || 'unknown');
  const who = fields.name || fields.email || fields.phone || 'website visitor';
  const title = FORM_TITLES[form] || 'Website form: ' + form;

  const rows = Object.keys(fields)
    .filter((key) => HIDDEN.indexOf(key) === -1 && String(fields[key]).trim() !== '')
    .map((key) => {
      const value = Array.isArray(fields[key]) ? fields[key].join(', ') : String(fields[key]);
      return [LABELS[key] || key, key === 'submitted_at' ? formatDate(value) : value];
    });

  const attachments = (body.files || []).map((f) =>
    Utilities.newBlob(Utilities.base64Decode(f.data), f.type, f.name),
  );

  const html =
    '<h2 style="font-family:Georgia,serif;font-weight:400;color:#0F2433">' + esc(title) + '</h2>' +
    '<table cellpadding="8" style="border-collapse:collapse;font:15px/1.5 Arial,sans-serif;color:#0F2433">' +
    rows
      .map((r) =>
        '<tr><td style="border-bottom:1px solid #D6E0E4;color:#4A5C67;vertical-align:top;white-space:nowrap">' +
        esc(r[0]) + '</td><td style="border-bottom:1px solid #D6E0E4;white-space:pre-wrap">' + esc(r[1]) + '</td></tr>',
      )
      .join('') +
    '</table>' +
    (attachments.length ? '<p style="font:14px Arial,sans-serif;color:#4A5C67">' + attachments.length + ' photo(s) attached.</p>' : '');

  const text = title + '\n\n' + rows.map((r) => r[0] + ': ' + r[1]).join('\n');

  const message = {
    to: NOTIFY_EMAIL,
    subject: title + ' — ' + who,
    body: text,
    htmlBody: html,
    name: 'The Glass House website',
    attachments: attachments,
  };
  if (isEmail(fields.email)) message.replyTo = fields.email;

  MailApp.sendEmail(message);
  return reply({ ok: true });
}

/** Run once from the editor to grant the mail permission and check delivery. */
function sendTestEmail() {
  MailApp.sendEmail(NOTIFY_EMAIL, 'Website form test', 'If you can read this, the form email script can send mail.');
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function isEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function formatDate(iso) {
  const d = new Date(iso);
  return isNaN(d) ? iso : Utilities.formatDate(d, 'America/New_York', 'EEE MMM d, yyyy h:mm a');
}
