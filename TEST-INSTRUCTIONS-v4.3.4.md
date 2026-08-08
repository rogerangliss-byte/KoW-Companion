# KoW Companion v4.3.4 TEST — Officer Progress Profiles

## Purpose
v4.3.4 introduces a separate saved progress profile for every Officer. The LIVE v4.3.3 app is not changed by this package.

## Upload
Upload the CONTENTS of this extracted folder to the `KoW-Companion-Test` repository, not the LIVE repository. Wait for GitHub Pages/Actions to finish, then hard-refresh the TEST site with Ctrl+F5.

## What to test
1. Confirm the red banner says `TEST VERSION — v4.3.4 — NOT LIVE`.
2. Open Officer and select an Officer you already use.
3. Enter distinctive values for that Officer in Stars, Development and XP.
4. Use `Save This Officer` (or the existing `Save Progress` button).
5. Select a different Officer.
6. Confirm the previous Officer is automatically saved and the new Officer starts with its own profile.
7. Enter different values for the second Officer.
8. Switch back to the first Officer.
9. Confirm all of the first Officer's values return: Star levels/resources, unlocked state, 16 skills, training level, badges/resources, current/target XP levels, XP Books and selected goal.
10. Refresh the browser and confirm the selected Officer's saved profile remains available.
11. Test `Reset This Officer` and confirm it clears only that Officer, not the other profiles.
12. Check Home Smart Dashboard after switching Officers. It should calculate from the currently loaded Officer profile.
13. Check Planner and Resource Optimiser still work.
14. Check all 56 Officers and portraits remain available.

## Legacy data
On first use, if the browser has the old v4.3.3 single saved-progress record and no v4.3.4 profiles yet, the app migrates that record into the matching Officer profile.

## Storage
Profiles are stored locally in the browser under `kow_officer_profiles_v434`. Backup & Restore includes localStorage, so the Officer profiles are included in the existing full-app backup.

## Important
Do not promote this build to LIVE until Officer switching, profile persistence, Smart Dashboard calculations, Planner, Backup/Restore and mobile layout have been checked.
