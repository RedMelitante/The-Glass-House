# Design handoff — notes

- `design/`, `BUILD-BRIEF.md` and `image-manifest.csv` hold the latest design. The November update replaced the
  Service, Product, Area and Gallery templates and their preview wrappers (see `WHAT-CHANGED-2026-11.md`).
- That update renamed 59 of the original photos (each name now matches its photo). The site's code uses the new
  names everywhere; `image-renames-2026-11.json` maps each old name to its new one. Design files that were not
  part of the update (Home, Services, About, …) still use the old names inside `design/`.
- The site goes beyond the design in a few places (see the main README): Cotuit, Centerville, Plymouth and
  Portsmouth RI town pages; the town-page label shows each town's real state and region instead of the design's
  fixed "MA · Lower Cape"; per-town hero crop (Portsmouth).
