# KoW Companion — User Guide
## v4.5.0 LIVE

This guide describes the English v4.5.0 Live release.

## Recommended workflow
1. **Inventory** — enter and save all resources currently held.
2. **Officer** — select an Officer and enter/save current progress.
3. **Stars** — confirm Star progress and resources.
4. **Development** — confirm Unlock, Skill Strands and Training.
5. **XP** — confirm current Officer Level and held XP Books.
6. **Progress** — verify MAXED / IN PROGRESS / NOT STARTED classifications.
7. **Planner** — preview current and future upgrade decisions.
8. **Backup** — export a backup before destructive testing or major changes.

## v4.5.0 working-state persistence
A normal browser refresh should preserve the active working interface rather than returning key controls to defaults. This includes the selected Officer, current tab, Officer filters, Progress filters, Compare filters/selections, Multi-Officer Planner rows and working values, Advanced Planner selections, future scenario fields and Resource Optimiser comparison Officer.

This working-state persistence is separate from saved Officer profiles, saved plans and Central Inventory.

## Central Inventory
Enter shared resources once and press **Save Inventory**. Saved values are used throughout the app.

The Inventory follows the approved **Order in List** numbering:
1. Legendary Officer Badge Chest
2. Legendary Officer Badge Selection Chest
3. Officer Readiness Voucher (ORV)
4. Star Readiness Voucher (SRV)
5. Legendary Officer Badge
6. Epic Officer Badge
7. Elite Officer Badge
8. Individual Officer Badges in approved numbered order
9. Elite Stars I / II / III
10. Epic Stars I / II / III
11. Legendary Stars I / II / III
12. XP Books: 100 / 500 / 1,000 / 5,000 / 10,000 / 20,000 / 50,000

There is no 50 XP Book in this build.

## Legendary chest rules
### Legendary Officer Badge Chest
Each chest can be used as **either**:
- 1 Universal Legendary Badge; **or**
- 600 Officer Readiness Vouchers (ORV).

A chest must never be counted as both routes at the same time.

### Legendary Officer Badge Selection Chest
Each chest gives **1 specific Legendary Officer Badge** for an Officer in the currently eligible Selection Chest pool.

It does **not** convert to ORV and does **not** become a Universal Legendary Badge.

### Original Legendary Officers
Original Legendary Officers cannot use ORV or SRV seasonal conversion routes. Their progression uses their individual Officer Badges plus Universal Legendary Badges and other valid non-seasonal resources.

## Officer progress
The Officer page stores Officer-specific progress such as Stars, Level, Unlock, Skill Strands and Training. Shared Inventory remains global.

**MAX Officer** sets the selected Officer to 5★, Level 70, Unlocked, all four Skill Strands at Level 5 and Training 180.

## Skill Strands
Strand availability follows current Star Level:
- 0★ → Strand 1
- 1★ → Strands 1–2
- 2★ → Strands 1–3
- 3★+ → all four strands

Level 1 is free when a strand becomes available.

## Confirmed badge totals
- **Legendary:** 10 unlock + 690 Skills + 900 Training = **1,600 badges**.
- **Epic:** 10 unlock + 440 Skills + 4,500 Training = **4,950 badges**.
- **Elite:** 10 unlock + 440 Skills + 18,000 Training = **18,450 badges**.

## Officer Progress and Compare
Progress classifies Officers as **MAXED**, **IN PROGRESS** or **NOT STARTED**. Shared resources do not increase the Officer's saved progress percentage.

The main Progress filters and Compare Officer Progress filters are independent. Compare selections should survive a normal browser refresh in v4.5.0 Test.

## Resource Optimiser — Preview
The Resource Optimiser compares the selected Officer with a second Officer and can highlight ORV efficiency where both Officers are eligible.

The Optimiser is **preview-only**. It does not spend resources or alter saved Inventory.

## Multi-Officer Upgrade Planner
Build a priority list of Officers and preview how shared resources could cover their remaining badge requirements.

The working Planner supports:
- named plans;
- multiple Officer rows;
- per-Officer badge requirements;
- row priority/order controls;
- ORV;
- Universal Legendary Badges;
- Legendary Officer Badge Chests;
- Legendary Officer Badge Selection Chests; and
- Badge Chest route/strategy selection.

The Planner is preview-only and does not deduct Inventory.

## Advanced Planning and future Officers
Planning Session can analyse saved/current Officers, all sessions, the next session, or specific recurring sessions such as October Rally/Garrison, January Infantry, April Tanks and July Tank Destroyers.

Future **PROJECTED** Officers are planning placeholders only. They are not added to the published Officer database.

For a projected Legendary Officer, established full-upgrade totals are:
- **1 Officer:** 1,600 badges, 98,000 Star value, 199,646,700 XP.
- **2 Officers:** 3,200 badges, 196,000 Star value, 399,293,400 XP.

Future ORV/SRV values remain forecasts until published costs are known.

## Planning Readiness Dashboard
The v4.4.0 Planning Readiness Dashboard remains available. Saved scenarios show Badge, Star and XP readiness, overall readiness based on the limiting resource, a Priority Target and Suggested Next Action.

## Backup & Restore
Use **Settings → Export App Backup** to create a portable backup of locally saved app data.

Restore should import Officer profiles, individual Officer Badges and shared Inventory and then reload the app. Always test a known-good backup before promoting v4.5.0 to Live.

## Pre-Live QA
Before Live promotion verify:
- no flicker, pulsing or freezes;
- normal navigation across all tabs;
- selected Officer survives refresh;
- Officer filters survive refresh;
- Progress filters survive refresh;
- Compare filters and Officer selections survive refresh;
- Planner rows and working values survive refresh;
- Resource Optimiser comparison survives refresh;
- corrected Badge Chest and Selection Chest rules;
- Original Legendary ORV/SRV restrictions;
- Inventory follows the approved Order in List;
- no 50 XP Book appears;
- Inventory Save works globally;
- Export and Restore Backup work;
- restored data survives reload;
- version reporting is consistently v4.5.0; and

---
**Created by FireStorm (371)**
