# KoW Companion v4.1.5

## App update controls

Settings now contains:
- **Check for Updates** — compares the installed version with the current GitHub Pages `index.html`.
- **Refresh Latest Version** — unregisters the KoW service worker, clears only KoW app caches, and reloads from a cache-busted URL.

This process does **not** clear localStorage, so saved progress, officer edits, app name, and custom backgrounds are retained.

The v4.1.4 published officer database behavior is retained.
