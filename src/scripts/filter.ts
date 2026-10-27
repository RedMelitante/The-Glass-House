/**
 * Category filter chips (home gallery, project gallery, services, blog index…).
 *
 *   <div data-filter-root data-active="All">
 *     <button data-filter="All" aria-pressed="true" data-style-on="…" data-style-off="…">All</button>
 *     <a data-filter-item data-cat="Showers">…</a>
 *   </div>
 *
 * "All" (or an empty filter) shows every item. Items marked data-m-extra are hidden on mobile while
 * "All" is selected (the design shows a shorter list on phones). Chip styles swap between the
 * inline style strings given in data-style-on / data-style-off. [data-filter-count] elements show the
 * number of visible items. Fires "filterchange" on the root.
 */
function apply(root: HTMLElement, value: string) {
  root.dataset.active = value;
  root.querySelectorAll<HTMLElement>('[data-filter]').forEach((btn) => {
    const on = btn.dataset.filter === value;
    btn.setAttribute(btn.getAttribute('role') === 'radio' ? 'aria-checked' : 'aria-pressed', String(on));
    const base = btn.dataset.styleBase ?? '';
    const state = on ? btn.dataset.styleOn : btn.dataset.styleOff;
    if (state !== undefined) btn.style.cssText = `${base}; ${state}`;
  });
  const all = value === 'All' || value === '';
  root.querySelectorAll<HTMLElement>('[data-filter-item]').forEach((item) => {
    const cats = (item.dataset.cat ?? '').split('|');
    item.hidden = !all && !cats.includes(value);
  });
  root.querySelectorAll<HTMLElement>('[data-filter-count]').forEach((el) => {
    el.textContent = String(root.querySelectorAll('[data-filter-item]:not([hidden])').length);
  });
  root.dispatchEvent(new CustomEvent('filterchange', { detail: value }));
}

document.addEventListener('click', (e) => {
  const btn = (e.target as Element | null)?.closest<HTMLElement>('[data-filter]');
  const root = btn?.closest<HTMLElement>('[data-filter-root]');
  if (!btn || !root) return;
  apply(root, btn.dataset.filter ?? 'All');
});
