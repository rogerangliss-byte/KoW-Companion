# KoW Companion v4.5.0 LIVE

**English Live / production release**

KoW Companion is an Officer development, Inventory, Progress and planning companion for *Kiss of War*. This v4.5.0 Live build is based on the stable v4.4.0 English Live application and is being validated before promotion to Live.

## What's New — v4.5.0 LIVE

### Native working-state persistence
A normal browser refresh should preserve the current working interface state, including selected Officer, current tab, Officer filters, Progress status filters, Compare selections, Planner working rows/resources, Advanced Planner selections, future scenario fields and Resource Optimiser comparison Officer.

Saved Officer profiles, saved plans and Central Inventory remain separate from this temporary working state.

### Correct Legendary chest logic
- **Legendary Officer Badge Chest** — each chest is **either 1 Universal Legendary Badge or 600 ORV**. It cannot count as both.
- **Legendary Officer Badge Selection Chest** — each chest gives **1 specific Legendary Officer Badge** for an Officer in the current eligible pool. It does **not** convert to ORV or a Universal Legendary Badge.
- Original Legendary Officers cannot use ORV/SRV seasonal conversion routes.

### Resource Optimiser — Preview
Select a second Officer to compare badge efficiency and ORV cost per badge where applicable. The Optimiser is preview-only and does not spend or alter saved resources.

### Multi-Officer Upgrade Planner
Supports named plans, multiple Officer rows, per-Officer badge requirements, priority/order controls, shared ORV, Universal Legendary Badges, Badge Chests, Selection Chests and selectable Badge Chest strategy.

### Central Inventory order
Inventory follows the approved **Order in List** numbering, not spreadsheet row position:
1. Legendary Officer Badge Chest
2. Legendary Officer Badge Selection Chest
3. ORV
4. SRV
5. Legendary Officer Badge
6. Epic Officer Badge
7. Elite Officer Badge
8. Individual Officer Badges in approved order
9. Elite Stars I–III
10. Epic Stars I–III
11. Legendary Stars I–III
12. XP Books: 100, 500, 1,000, 5,000, 10,000, 20,000 and 50,000

The non-game **50 XP Book** has been removed.

### Progress and Compare
Progress classifications remain MAXED / IN PROGRESS / NOT STARTED. Shared Inventory does not artificially raise saved Officer progress. Compare uses actual saved Officer progress.

## Confirmed badge totals
- **Legendary:** 10 unlock + 690 Skills + 900 Training = **1,600**.
- **Epic:** 10 unlock + 440 Skills + 4,500 Training = **4,950**.
- **Elite:** 10 unlock + 440 Skills + 18,000 Training = **18,450**.

## v4.4.0 features retained
Planning Readiness Dashboard, Badge/Star/XP readiness, Priority Target, Suggested Next Action, future release sessions, Season + Officer Type reports, projected future Legendary resources, ORV/SRV forecasting and MAXED-Officer exclusions remain available.

## Pre-Live QA checklist
- App loads normally with no flicker, pulsing or freezes.
- All tabs navigate normally on mobile/tablet and desktop.
- Selected Officer and Officer filters survive refresh.
- Progress filters survive refresh.
- Compare filters and selected Officers survive refresh.
- Planner working rows, Officer selections and requirements survive refresh.
- Resource Optimiser comparison selection survives refresh.
- Badge Chest calculations use Badge or ORV mode, never both.
- Selection Chests provide one eligible specific Officer Badge only and never ORV.
- Original Legendary Officers do not incorrectly use ORV/SRV.
- Inventory follows the approved Order in List.
- No 50 XP Book is shown anywhere.
- Inventory Save feeds the rest of the app.
- Export App Backup and Restore App Backup work correctly.
- Restored data survives reload.
- MAXED / IN PROGRESS / NOT STARTED remain correct.
- Header, Settings, About and Version Integrity consistently report **v4.5.0 LIVE**.

## Backup before testing
Use **Settings → Export App Backup** before destructive or large-scale QA changes. Test Restore using a known-good backup before Live promotion.

## Deployment status

This package is the approved **English Live** v4.5.0 release.

## Documentation
- `README.md` — release overview and pre-Live QA checklist.
- `USER-GUIDE.md` — comprehensive usage guidance.
- `CHANGELOG.md` — version history.
- `RELEASE-v4.5.0-LIVE.md` — Live release notes.

---
**Created by FireStorm (371)**
