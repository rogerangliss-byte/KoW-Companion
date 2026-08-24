# KoW Companion — User Guide
## Version 4.6.0 LIVE

KoW Companion helps plan, track and forecast Officer development in *Kiss of War*. It combines Officer progress, shared Inventory, upgrade calculations, multi-Officer planning, future release forecasting and backup tools.

## Recommended Workflow
1. **Inventory** — enter and save all resources currently held.
2. **Officer** — select an Officer and enter their current progress.
3. **Stars** — confirm Star progress and available Star resources.
4. **Development** — enter Unlock, Skill Strand and Training progress.
5. **XP** — confirm current Officer Level and held XP Books.
6. **Progress** — review MAXED, IN PROGRESS and NOT STARTED Officers.
7. **Planner** — model upgrades for one or more Officers.
8. **Upgrade Targets** — compare an Officer's current position with a chosen target.
9. **Releases** — review the recurring release calendar and future Officer cost forecasts.
10. **Backup** — periodically export an App Backup.

# What's New in v4.6.0
- **Upgrade Targets & Recommendations**
- **Dynamic Officer Data**
- **Global Officer Data information**
- **Database-driven Future Officer Cost Forecasting**
- Improved future Officer planning
- Working-state persistence retained across normal browser refreshes
- Existing v4.5.0 planning, Inventory and backup functionality retained

# Upgrade Targets & Recommendations
The Upgrade Targets system provides a non-destructive way to calculate what remains between an Officer's current saved position and a chosen target. Targets can include Officer Level, Star Level, Training Level or MAX Officer.

**MAX Officer** represents 5 Stars, Level 70, Officer Unlocked, all four Skill Strands at Level 5 and Training Level 180. Calculating a target does not spend resources or deduct anything from Central Inventory.

# Dynamic Officer Data
Version 4.6.0 separates published Officer release data from the main application logic. Published Officer data includes Officer name, Season, rarity, role/type, ORV cost, SRV cost, readiness eligibility and associated application data. The current published dataset can be checked from **Settings → Global Officer Data**.

New Officer releases should first be added and validated in the Test environment before being promoted to Live.

# Future Officer Cost Forecast
The Future Officer Cost Forecast estimates possible ORV and SRV costs of future Legendary seasonal Officers.

## Dynamic Forecast Baseline
Version 4.6.0 uses the latest confirmed Legendary seasonal Officer release contained in the Officer Database as the forecasting baseline.

**Example:** At the time of the v4.6.0 release, the latest confirmed Legendary seasonal release is **S7 Tank Destroyers**, costing **600 ORV per Badge and 300 SRV per Exclusive Star**. The Future Officer Cost Forecast therefore uses these values as its current baseline. When a newer confirmed release is added to the published Officer Database, the forecast automatically moves its baseline forward.

The forecast applies the selected growth rate to subsequent projected releases. Forecast values are planning estimates only and must not be treated as confirmed game costs.

## Recurring Officer Release Sequence
- **October — Rally / Garrison**
- **January — Infantry**
- **April — Tanks**
- **July — Tank Destroyers**

After July Tank Destroyers, the sequence continues into the next Season with October Rally / Garrison.

## Forecast Growth
The default planning assumption is **20% growth per Officer release**, but the value can be changed. The forecast displays Forecast ORV per Badge, Forecast SRV per Exclusive Star, total forecast ORV and total forecast SRV.

# Central Inventory
Enter shared resources once and press **Save Inventory**. Saved values are used throughout the app.

Approved order:
1. Legendary Officer Badge Chest
2. Legendary Officer Badge Selection Chest
3. Officer Readiness Voucher (ORV)
4. Star Readiness Voucher (SRV)
5. Universal Legendary Officer Badge
6. Universal Epic Officer Badge
7. Universal Elite Officer Badge
8. Individual Officer Badges
9. Elite Stars I / II / III
10. Epic Stars I / II / III
11. Legendary Stars I / II / III
12. XP Books — 100 / 500 / 1,000 / 5,000 / 10,000 / 20,000 / 50,000

There is **no 50 XP Book**.

# Legendary Chest Rules
## Legendary Officer Badge Chest
Each chest can be used as **either 1 Universal Legendary Badge or 600 ORV**. A chest cannot be counted through both routes simultaneously.

## Legendary Officer Badge Selection Chest
Each chest provides **1 specific Legendary Officer Badge** for an Officer in the currently eligible Selection Chest pool. It does **not** convert into ORV and does **not** become a Universal Legendary Badge.

# Original Legendary Officers
Original Legendary Officers do not use seasonal ORV/SRV conversion. Their progression uses applicable resources such as Individual Officer Badges and Universal Legendary Officer Badges. The Planner must not allocate ORV or SRV to an Original Legendary Officer.

# Officer Progress
The Officer section stores Officer-specific Stars, Level, Unlock status, Skill Strand development and Training Level. Shared resources remain in Central Inventory.

## Skill Strands
- **0★** — Strand 1
- **1★** — Strands 1–2
- **2★** — Strands 1–3
- **3★ or higher** — all four Skill Strands

Level 1 is free when a Skill Strand becomes available.

# Confirmed Badge Requirements
- **Legendary:** 10 Unlock + 690 Skills + 900 Training = **1,600 Badges**
- **Epic:** 10 Unlock + 440 Skills + 4,500 Training = **4,950 Badges**
- **Elite:** 10 Unlock + 440 Skills + 18,000 Training = **18,450 Badges**

# Officer Progress & Compare
Progress classifies Officers as **MAXED**, **IN PROGRESS** or **NOT STARTED**. Resources merely held in Central Inventory do not increase saved development percentage. Progress and Compare filters operate independently and normal working selections are retained across a standard browser refresh.

# Resource Optimiser
The Resource Optimiser compares development options between Officers and can highlight ORV efficiency where both Officers are eligible. It is preview-only and does not spend resources or alter Central Inventory.

# Multi-Officer Upgrade Planner
The Planner allows several Officers to be placed into priority order and evaluates how shared resources could cover remaining Badge requirements. It supports multiple Officers, priority/order, per-Officer requirements, ORV, Universal Legendary Badges, Badge Chests, Selection Chests and chest route/strategy selection. Planning is non-destructive.

# Advanced Planning & Future Officers
Planning Sessions can model Saved/current Officers, All Sessions, Next Session, October Rally/Garrison, January Infantry, April Tanks and July Tank Destroyers. Future **PROJECTED** Officers are planning placeholders and are not confirmed Officers.

Established full-upgrade resources for one projected Legendary Officer are **1,600 Badges, 98,000 Star value and 199,646,700 XP**. For two Officers: **3,200 Badges, 196,000 Star value and 399,293,400 XP**.

# Planning Readiness Dashboard
The Dashboard evaluates saved scenarios against available resources and provides Badge readiness, Star readiness, XP readiness, Overall readiness, Priority Target and Suggested Next Action. Overall readiness is determined by the limiting resource.

# Working-State Persistence
A normal browser refresh preserves important working selections, including selected Officer, current tab, Officer filters, Progress filters, Compare selections, Planner rows/values, Advanced Planner selections, future scenario fields and Resource Optimiser comparison Officer. This is separate from permanently saved profiles, plans and Central Inventory.

# Recurring Release Calendar
The Releases section displays the recurring annual Officer cycle and automatically identifies the current period and next scheduled release. The sequence is **October Rally/Garrison → January Infantry → April Tanks → July Tank Destroyers**, then repeats for the next Season.

# Officer Database
The Officer Database controls the Officer master list. It supports search, Season filtering, adding/editing/deleting Officers, CSV export/import and restoring the published defaults. New confirmed releases should be tested before being incorporated into the Live dataset. Adding a newer confirmed Legendary seasonal release can automatically advance the Future Officer Cost Forecast baseline.

# Backup & Restore
Use **Settings → Export App Backup** to create a portable backup of locally stored KoW Companion data. A known-good backup should be retained before major changes. After restoring, confirm that the restored information remains present after reloading the application.

# Important Planning Principle
KoW Companion separates **confirmed data** from **forecast data**. Confirmed Officer costs in the published Officer Database are treated as known information. Future costs generated by forecasting tools are estimates. When an Officer is officially released and actual costs become known, the confirmed values should replace forecast assumptions.

---
**Created by FireStorm (371)**
