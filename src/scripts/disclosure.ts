/**
 * Generic show/hide toggles (footer lists, FAQ accordions, table of contents).
 *
 *   <button data-disclosure aria-controls="panel-id" aria-expanded="false"
 *           data-icon-open="M6 15l6-6 6 6" data-icon-closed="M6 9l6 6 6-6">
 *     <svg><path data-disclosure-icon d="M6 9l6 6 6-6" /></svg>
 *   </button>
 *   <div id="panel-id" hidden>…</div>
 *
 * Optional: data-disclosure-group="name" closes the other open items in the same group;
 * data-style-open / data-style-closed swap inline style text on [data-disclosure-style] elements
 * inside the button's closest [data-disclosure-item].
 */
function setOpen(btn: HTMLElement, open: boolean) {
  btn.setAttribute('aria-expanded', String(open));
  const panel = document.getElementById(btn.getAttribute('aria-controls') ?? '');
  if (panel) panel.hidden = !open;
  const icon = btn.querySelector('[data-disclosure-icon]');
  const d = open ? btn.dataset.iconOpen : btn.dataset.iconClosed;
  if (icon && d) icon.setAttribute('d', d);
  const item = btn.closest<HTMLElement>('[data-disclosure-item]');
  if (item) {
    item.toggleAttribute('data-open', open);
    item.querySelectorAll<HTMLElement>('[data-style-open]').forEach((el) => {
      el.style.cssText = (open ? el.dataset.styleOpen : el.dataset.styleClosed) ?? el.style.cssText;
    });
  }
}

document.addEventListener('click', (e) => {
  const btn = (e.target as Element | null)?.closest<HTMLElement>('[data-disclosure]');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  const group = btn.dataset.disclosureGroup;
  if (open && group) {
    document.querySelectorAll<HTMLElement>(`[data-disclosure][data-disclosure-group="${group}"]`).forEach((other) => {
      if (other !== btn && other.getAttribute('aria-expanded') === 'true') setOpen(other, false);
    });
  }
  setOpen(btn, open);
});
