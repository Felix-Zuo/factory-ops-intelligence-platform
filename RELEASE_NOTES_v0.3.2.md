# Release Notes v0.3.2

`v0.3.2` is a public showcase interaction release. It keeps the demo synthetic and static-page friendly while making the GitHub Pages surface feel more like an inspectable product.

## Highlights

- Added product-mode switching on the showcase page for control tower, material gate, trace graph and capacity model views.
- Added release-gate card inspection so reviewers can click each control and see the related gate detail.
- Added an evidence screenshot selector for material, release, trace and capacity proof screens.
- Added a scroll progress indicator for a stronger product-page reading experience.
- Promoted the static showcase regression check into the main validation chain.

## Quality

- `npm run test:all` now includes `scripts/check_showcase_page.py`.
- The showcase check guards Pages assets, parent-directory links, hero asset regressions, release-card wrapping rules and interactive selectors.
- The release keeps the public data boundary unchanged: all visible data is synthetic and all integrations remain mock/stub/sample contracts.

## Upgrade Notes

No runtime migration is required. Regenerate demo data and the frontend snapshot as usual before running the dashboard.
