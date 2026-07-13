# v0.3.3 - Public Surface Integrity

This release aligns the public product story with the implementation that exists in the repository.

## Highlights

- Reworked the showcase hero, section copy and evidence area around operational decisions rather than self-promotional language.
- Replaced the repeated screenshot grid with an interactive evidence view and a code-and-test ledger.
- Added keyboard navigation for product and evidence tabs, active section navigation and reduced-motion handling.
- Rebuilt the README first screen around a real product capture and removed references to implementation files that did not exist.
- Added a 1280x640 social preview based on the real control-tower interface.
- Hardened API input bounds, unknown-resource responses, workflow selection, integration modes, notice HTML escaping and in-memory trace limits.
- Added a public-surface validation check and made CI run the same full validation command used locally.

## Compatibility

No data migration is required. Existing demo routes remain available; invalid IDs and non-executable adapter imports now return explicit 4xx responses instead of misleading success or server errors.
