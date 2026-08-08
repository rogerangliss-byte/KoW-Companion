# KoW Companion v4.2.15 — User Guide

## Recommended order

Work through the app in this order:

**Officer → Stars → Development → XP → Planner → Save Progress**

Before major changes, use **Settings → Export App Backup** to create a portable JSON backup of locally saved KoW Companion data.

## 1. Officer

Use Search, Season and Officer Type / Role filters to narrow the Officer list, then select the Officer you want to calculate.

The selected Officer determines:
- Officer Readiness Voucher (ORV) cost per Officer Badge.
- Star Readiness Voucher (SRV) cost per Exclusive Star.

The Officer portrait is displayed automatically when a matching image exists in the `officer-portraits` folder.

The **Officer Upgrade Summary** shows the remaining Officer Badges, Officer Stars and Officer XP for the selected Officer.

**Original Officers cannot use Officer Readiness Vouchers (ORV) or Star Readiness Vouchers (SRV).**

## 2. Stars

Enter:
- Current Star level.
- Target Star level.
- Legendary Star I held.
- Legendary Star II held.
- Legendary Star III held.
- Star Readiness Vouchers (SRV) held.

The app calculates Officer Star value held, Exclusive Stars obtainable from SRV and the remaining Star requirement.

## 3. Development

Enter:
- Unlock status.
- Skill Points completed.
- Training Level.
- Officer Badges Held.
- Universal Legendary Badges Held.
- Legendary Officer Badge Selection Chests Held.
- Officer Readiness Vouchers (ORV) Held.

Each **Universal Legendary Badge** is worth **1 Officer Badge** for a Legendary Officer.

Each **Legendary Officer Badge Selection Chest** can be used as either:
- 1 Universal Legendary Badge; or
- the latest-Season Officer Readiness Voucher (ORV) value.

A Selection Chest cannot count as both. With the current S7 database, the benchmark is **600 ORV per chest**.

## 4. XP

Enter the current and target Officer Level and the quantities of each Officer XP Book held.

The app calculates XP held, XP required and the remaining XP shortfall.

## 5. Planner & Resource Optimiser

Use Planner after completing Stars, Development and XP.

Select the upgrade goal required, such as:
- Max Officer.
- Next Star.
- Reach 5★.
- Max Skills.
- Max Training.

The Planner combines the information already entered and shows requirements, held resources and shortfalls.

### Compare two Officers

In **Resource Optimiser**, use **Compare with Officer** to select a second Officer.

The optimiser compares the Officer Readiness Voucher (ORV) cost per Officer Badge for both Officers.

Where both Officers can use ORV, the recommended strategy is:
- favour **Officer Readiness Vouchers (ORV)** on the Officer with the lower ORV cost per badge; and
- favour shared **Universal Legendary Badges / Legendary Officer Badge Selection Chests** on the Officer with the higher ORV cost per badge.

This protects the more expensive Officer from unnecessary ORV spending.

The Resource Optimiser is **preview only**. It does not automatically spend, allocate or change saved resources.

## 6. Save Progress

Use **Save Progress** after entering or changing calculator information.

Progress is stored locally in the browser on the current device. Save Progress does not publish personal calculator data to other users.

## 7. Database

Database Manager controls the Officer master list.

**Export CSV** exports the Officer database. It is different from Save Progress and App Backup.

To publish new or edited Officers for everyone, update `officers.json` and `officers.csv` in the GitHub repository.

## 8. Settings, Backup & Restore

Settings contains:
- App name.
- Portrait and landscape backgrounds.
- Appearance controls.
- App update controls.
- Backup & Restore.

### Export App Backup

Select **Export App Backup** to create a JSON backup containing KoW Companion data stored locally by the browser. Keep the downloaded file somewhere safe.

### Restore App Backup

Select **Restore App Backup**, choose a previously exported KoW Companion JSON backup, and the app will restore the locally saved data and reload.

### Updates

**Check for Updates** compares the installed version with the published version.

**Refresh Latest Version** refreshes the application cache without intentionally deleting saved calculator progress.

## Terminology

- **ORV** — Officer Readiness Voucher.
- **SRV** — Star Readiness Voucher.
- **Universal Legendary Badge** — worth 1 Officer Badge for a Legendary Officer.
- **Exclusive Star** — worth 110 Officer Star value.
