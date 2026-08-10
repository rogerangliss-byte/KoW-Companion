# KoW Companion English v4.3.30 LIVE — Backup & Restore Sync Fix

## Fixed
Cross-device Backup & Restore now preserves the complete saved KoW Companion state, including individual Officer progress.

- Forces the currently displayed Officer profile to save before export.
- Preserves individual **Officer Badges Held** values.
- Preserves Officer stars, skills, training, levels and goals.
- Preserves shared ORV, SRV, Universal Legendary Badges and Legendary Officer Badge Selection Chests.
- Preserves XP Book inventory.
- Restore clears existing KoW Companion storage keys before applying the backup, preventing stale values on the destination device.

## Validation
The fix was tested successfully using a v4.3.29 backup transferred/restored between devices and is approved for LIVE.
