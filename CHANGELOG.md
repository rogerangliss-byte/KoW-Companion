# Changelog

## v4.3.5 LIVE
- Fixed Officer switching so shared resource inventories remain populated.
- Split saved data into:
  - Officer-specific progress: Star levels, unlock/skills/training, Officer Badges held, current/target XP level, Planner goal.
  - Global shared inventory: Legendary Star I/II/III, SRV, Universal Legendary Badges, Selection Chests, ORV and XP Books.
- Changing Officer now changes only Officer-specific progress.
- Shared resources persist across every Officer.
- Reset This Officer does not clear shared resource inventory.
- Added migration from v4.3.4 Officer profiles and the earlier legacy single save.
- v4.3.3 remains the LIVE baseline while this TEST build is checked.

## v4.3.4 TEST
- Added a separate persistent progress profile for every Officer.
- Officer switching automatically saves the Officer being left and loads the selected Officer's profile.
- Added `Save This Officer` and `Reset This Officer` controls.
- Saved profile covers Stars, Development, XP Books/levels and Planner goal.
- Added one-time migration of the previous single saved-progress record.
- Existing full Backup & Restore automatically includes the new Officer profiles.
- LIVE v4.3.3 remains untouched while this feature is tested.

## v4.3.3 LIVE
- Fixed Smart Dashboard not populating.
- Corrected an invalid Officer reference that stopped the Dashboard updater.
- Smart Dashboard now mirrors the app's existing authoritative MAX Officer results:
  - Development from `dashBadgesRequired`
  - Stars from `dashStarsRequired`
  - XP from `dashXpRequired`
- Reads the real active Officer from the Officer selector.
- Reads saved Multi-Officer plans from the correct saved-plan control.
- Upcoming Release now populates from the recurring release calendar.
- Dashboard refreshes after every normal calculator calculation and whenever Home is opened.
- No duplicate Home resource inputs were added.
- Approved TEST build promoted to LIVE.
- Red TEST VERSION banner removed.

## v4.3.2 TEST
- Fixed Smart Dashboard population.
- Dashboard now reads the existing saved Officer/resource state instead of requiring separate Home inputs.
- Development reads held badges, shared badge resources and ORV conversion for the active Officer.
- Stars and XP use the app's calculated requirement/remaining values.
- Can I Max This Officer? now reflects Development + Stars + XP.
- Next Upgrade Plan reads the selected/saved Multi-Officer plan.
- Upcoming Release is populated automatically from the recurring annual release cycle.
- Added automatic dashboard refresh after restored saved data and user changes.
- v4.3.0 remains the Live baseline until this test build is approved.

## v4.3.1 TEST
- Added Smart Dashboard to Home.
- Added READY TO MAX / PARTIALLY READY / RESOURCES REQUIRED status.
- Added Development, Stars and XP readiness summaries.
- Added Can I Max This Officer? status.
- Added saved upgrade-plan summary.
- Added current/upcoming recurring release summary.
- Added limiting-resource guidance.
- v4.3.0 remains the Live baseline while this build is tested.

## v4.3.0 LIVE
- Added Multi-Officer Upgrade Planner.
- Add multiple Officers and arrange upgrade priority.
- Set badge requirements per Officer.
- Preview shared ORV, Universal Legendary Badges and Selection Chest allocation.
- Shows Fully Funded, Partially Funded and Shortfall status.
- Save, load and delete named upgrade plans locally.
- Planner is preview-only and does not alter normal saved calculator resources.
- v4.3.0 is the Live baseline.

# v4.3.0 LIVE
- Bottom navigation now uses one 10-item row.
- Reduced navigation spacing and label size to prevent Help wrapping to a second line.
- No calculator or database logic changed.

# v4.2.15 TEST
- Added recurring August–July Release Calendar page.
- Automatically highlights current month and shows next scheduled release.
- No changes to the 56-officer master set.

# Changelog

## v4.2.15 LIVE
- Promoted the approved v4.2.15 TEST build to Live.
- Officer Upgrade Summary available on the Officer tab.
- Resource Optimiser supports comparison with a second Officer.
- Comparison displays ORV-per-badge efficiency and suggested resource strategy.
- Backup & Restore available in Settings.
- Help and User Guide updated for v4.2.15.
- TEST banner removed.
- No Officer portrait files included in this deployment package.
