# KoW Companion v4.3.35 — Release Notes
## LIVE Release

### Headline
Version 4.3.35 expands and corrects rarity-aware Officer development, adds/updates Original Epic and Elite Officer support, improves MAX-progress consistency and fixes Development information carrying over from one rarity to another.

### Officer data and portraits
- Expanded Original Officer coverage with Epic and Elite Officers and their roles/portraits.
- Corrected **Dorothea** spelling and associated portrait/file references.
- Officer selection continues to support filtering by Season, Rarity and Role.

### Epic development
Confirmed Epic development rules are now supported:
- Unlock: 10
- Skills: 440
- Training: 25 × 180 = 4,500
- Total to MAX: **4,950**
- Promotion sequence: **10, 10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45**

### Elite development
Confirmed Elite development rules are now supported:
- Unlock: 10
- Skills: 440
- Training: 100 × 180 = 18,000
- Total to MAX: **18,450**
- Promotion sequence: **10, 10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45**

### Rarity refresh fix
Fixed an issue where Develop could show information belonging to the previously selected Officer rarity.

Development now refreshes from the current Officer when:
- the selected Officer changes; and
- the Develop page is opened.

Expected totals:
- Legendary: **5/training point — 1,600 MAX**
- Epic: **25/training point — 4,950 MAX**
- Elite: **100/training point — 18,450 MAX**

### Progress consistency
Improved MAX Officer reporting so saved progress is evaluated consistently between Home and Progress.

MAX remains:
- 5 Stars
- Level 70
- Officer unlocked
- Strand 1 Level 5
- Strand 2 Level 5
- Strand 3 Level 5
- Strand 4 Level 5
- Training 180

### User-interface corrections
- Removed obsolete/provisional **TEST:** wording from the Elite promotion description.
- LIVE package removes the red **TEST VERSION — NOT LIVE** banner.
- Rarity-specific wording is refreshed with the selected Officer rather than being retained from the previous selection.

### Documentation
- Replaced/expanded the User Guide with comprehensive v4.3.35 instructions.
- Release notes document Legendary, Epic and Elite development totals and the rarity-refresh correction.
- Includes a recommended data-entry order and rarity-switch validation procedure.

### Upgrade note
After deployment, perform a hard refresh/cache refresh if an older cached build is displayed. Confirm the header reports v4.3.35 and that the red TEST banner is absent on LIVE.
