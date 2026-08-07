# v4.1.1
- Fixed startup JavaScript crash caused by references to removed portrait/landscape preview image elements.
- Restored Officer ORV/SRV values, Planner rows, and Database rows.
- Moved the responsive background to the body itself so it cannot end with short tab content.
- Removed malformed stray closing div from the document shell.
- Changed service worker to network-first and bumped cache to v4.1.1.

# Changelog

## v4.1.0
- Refactored the visual layout shell without rewriting calculator/data logic.
- Added one dedicated fixed full-viewport background layer.
- Individual tabs no longer control background height.
- Officer, Planner, Database and other short pages use the same viewport background as Home.
- Retained portrait/landscape responsive defaults.
- Retained custom zone background uploads.
- Retained current Officer, Stars, Development, XP, Planner, Database and Settings functionality.
- Bumped service-worker cache to v4.1.0.
