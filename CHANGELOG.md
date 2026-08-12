## v4.3.51 TEST
- Planner: Central Inventory individual Officer Badges applied first and displayed separately.
- Planner: Use current held resources reads Central Inventory directly.

## v4.3.36 TEST
- Added Legendary / Epic / Elite rarity.
- Added rarity filter and rarity colour indicator.
- Added 8 Epic and 2 Elite Original Officers.
- Added multi-role filtering.
- Training costs now vary by rarity: 5 / 25 / 100 badges per point.
- Skill Strand star-unlock logic remains identical for all rarities.

## v4.3.33 LIVE
- Progress tab now keeps the three status categories: MAXED, IN PROGRESS and NOT STARTED.
- Within each category, Officers are sorted newest season first: S7, S6, S5, S4, S3, S2, Original.
- Officers within the same season retain database order in the main Progress table.
- Compare Officer Progress season list now also presents newest seasons first.
- No Officer profile, resource, calculation or Backup & Restore storage schema changes.

## v4.3.31 TEST
- Fixed duplicate season prefix labels.

# Changelog

## v4.3.30 LIVE
- Fixed incomplete cross-device Backup & Restore.
- Export now commits the active Officer profile before creating the JSON snapshot.
- Individual Officer Badges Held now transfer correctly.
- Officer-specific progress and shared resource inventories are retained.
- Restore avoids stale KoW Companion local-storage values on the destination device.

- Corrected v4.3.36 Officer database migration so the 8 Epic and 2 Elite Officers are merged into existing 56-Officer browser databases without resetting saved progress. All Rarities now contains 66 Officers.
- Added portraits for all 8 Epic and 2 Elite Original Officers.
- Corrected Dorothea spelling throughout published Officer data and added migration compatibility for previously saved `Dorethea` profiles.


- Rarity flow correction: Stars and Skill Promotion information now follow the selected Officer rarity. Epic/Elite hide Legendary SRV flow; Planner labels use the matching Star rarity; Skill Promotion totals/sequences are rarity-specific.


### v4.3.36 TEST — Progress rarity consistency patch
- Progress now uses each Officer's rarity-specific Promotion and Training requirements.
- Fully MAXED profiles (5★, Level 70, unlocked, all skills Level 5, Training 180) report 100% / MAXED consistently.
- Skill-cost summaries explicitly follow the currently selected Officer rarity.


### v4.3.36 TEST — Confirmed Elite badge correction
- Elite unlock: 10 badges.
- Elite Skills 1–16: 10,10,15,15,20,20,25,25,30,30,35,35,40,40,45,45 = 440 badges.
- Elite Training: 100 × 180 = 18,000 badges.
- Elite MAX total corrected to 18,450 badges.


### v4.3.36 TEST — Officer rarity refresh fix
- Development now refreshes rarity-dependent text/calculations every time the selected Officer changes and whenever Develop is opened.
- Epic shows 25 badges/training point and 4,950 total to MAX.
- Elite shows 100 badges/training point and 18,450 total to MAX.
- Epic and Elite both use the confirmed 440-badge promotion sequence.
- Removed the stray Elite TEST/provisional suffix from the promotion description.
