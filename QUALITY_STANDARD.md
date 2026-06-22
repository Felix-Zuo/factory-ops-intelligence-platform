# Quality Standard

## Current Gate

Run before every push:

```powershell
npm run test:all
npm audit --prefix apps/web-dashboard --omit=dev
git diff --check
```

`npm run test:all` covers:

- database seed from JSON demo data;
- frontend snapshot generation;
- repository self-check;
- pytest domain/API coverage;
- smoke demo;
- AI-tone/public-copy scan;
- React TypeScript production build;
- release-gate and scenario-profile coverage in the generated frontend snapshot.

## Security Baseline

The project follows a practical public-demo baseline inspired by OWASP ASVS and OpenSSF Scorecard:

- bounded request models for public API routes;
- no credentials, live URLs, private exports or generated runtime folders in Git;
- explicit adapter modes instead of hidden network calls;
- synthetic data only;
- dependency audit before release;
- GitHub issues/milestones for maturity work.

## UI Acceptance

- First screen must show usable product state, not a landing page.
- Navigation labels and badges must not wrap incorrectly at desktop or mobile widths.
- Dashboard sections must display concrete computed data.
- Release gate must show owner, evidence, status and next action for every control.
- Product plan must expose scenario profiles with domain, data sources, controls and operating roles.
- Static showcase page must load through local HTTP with screenshot assets present and no horizontal overflow.
- Tables must be horizontally scrollable rather than overlapping.
- Chinese and English labels must render from UTF-8 source files.
