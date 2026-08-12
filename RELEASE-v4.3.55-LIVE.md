# KoW Companion English v4.3.55 — LIVE Release Notes

## Overview

v4.3.55 is a major Inventory and Planner integration release. It introduces a central saved Inventory, expands Officer badge tracking, connects Planner to saved Officer progress, and improves bottom navigation.

## Central Inventory

The new Inventory page is the single place to enter and save resources used throughout KoW Companion.

Supported Inventory includes:

- Legendary Officer Badge Chest
- Legendary Officer Badge Selection Chest
- Officer Readiness Vouchers (ORV)
- Star Readiness Vouchers (SRV)
- Universal Legendary Officer Badges
- Universal Epic Officer Badges
- Universal Elite Officer Badges
- Elite Star I / II / III
- Epic Star I / II / III
- Legendary Star I / II / III
- XP Books
- Individual Officer Badges

Saved Inventory is reused across the app.

## Individual Officer Badges

- Every supported Elite, Epic and Legendary Officer is available, even where the player owns zero badges.
- Multiple Officer badge quantities can be entered in one pass and saved together.
- Each Officer's quantity is stored independently.
- Added All / Elite / Epic / Legendary filters.
- Display names no longer append rarity text.
- Ordering is Elite first, then Epic, then Legendary, followed by seasonal Officers in release order.

## Planner improvements

The Multi-Officer Planner now reads both saved Officer progress and central Inventory.

### Saved progress

- MAXED Officers are recognised automatically.
- MAXED Officers require 0 additional badges.
- MAXED Officers receive no shared-resource allocation.
- In-progress Officers use their actual saved badge shortfall instead of always requiring the full 1,600 badges.

### Individual Officer Badges

- Planner reads the matching Officer's held badge quantity from Inventory.
- Officer-specific badges are applied before shared resources.
- Officer-specific badges only apply to their matching Officer.
- Held badges remain in Inventory because Planner is preview-only.

### Status logic

Planner now distinguishes:

- MAXED
- Fully Funded
- Partially Funded
- Shortfall

The summary also reports MAXED Officers separately.

### Shared resource rules

- Original Legendary Officers do not use ORV.
- Seasonal Officers from S2 onward can use ORV and SRV where applicable.
- Planner recognises Universal Legendary Officer Badges, Legendary Officer Badge Chests and eligible Legendary Officer Badge Selection Chests.

## Selection Chest eligibility

Selection Chest availability follows the game's delayed seasonal pattern. A newly released pair is not immediately added to Selection Chests; instead, the appropriate previous-release pair becomes eligible.

Example: when S7 Roisin and Barbara were released, S6 Emily and Zoya were added to the Selection Chest pool.

## Navigation improvements

- Inventory moved left in the menu, immediately after Officer.
- Bottom navigation remains on one row.
- Icons and labels are larger.
- Buttons expand across available width.
- Narrower screens use horizontal scrolling instead of wrapping onto a second row.

## Data safety

- Planner remains preview-only.
- Planner does not deduct or change Inventory.
- Individual Officer badge quantities remain independent.
- Saved Officer progress remains Officer-specific.
- Central Inventory remains shared throughout the app.

## Version

Live release: **v4.3.55**
