# KoW Companion English v4.3.55 — User Guide

## Recommended setup order

For the most accurate results:

1. Open **Inventory** and enter the resources you currently hold.
2. Press **Save Inventory**.
3. Open **Officer** and select an Officer.
4. Enter or edit that Officer's actual saved progress.
5. Press **Save This Officer**.
6. Repeat for any other Officers you are actively developing or have completed.
7. Use **Progress** to review saved status and remaining requirements.
8. Use **Planner** to preview how shared resources could be allocated across multiple Officers.

---

## Inventory

Inventory is the central resource store for KoW Companion. Once saved, these values are reused throughout the app.

The Inventory order is:

1. Legendary Officer Badge Chest
2. Legendary Officer Badge Selection Chest
3. Officer Readiness Vouchers (ORV)
4. Star Readiness Vouchers (SRV)
5. Legendary Officer Badge (Universal)
6. Epic Officer Badge (Universal)
7. Elite Officer Badge (Universal)
8. Elite Star I
9. Elite Star II
10. Elite Star III
11. Epic Star I
12. Epic Star II
13. Epic Star III
14. Legendary Star I
15. Legendary Star II
16. Legendary Star III
17. XP Books
18. Individual Officer Badges

### Individual Officer Badges

All supported Elite, Epic and Legendary Officers are listed, even where the player currently holds zero badges.

Use the rarity filters:

- **All**
- **Elite**
- **Epic**
- **Legendary**

Enter quantities beside as many Officers as required, then press **Save Inventory** once. Each Officer's quantity is stored independently and is not copied to other Officers.

### Saving and resetting Inventory

Use **Save Inventory** after changing any held resource.

Use **Reset Inventory** only when you deliberately want to clear/reset the Inventory values.

---

## Officer

The Officer page stores progress separately for each Officer.

### Save This Officer

Use **Save This Officer** after entering or changing that Officer's actual development state.

### MAX Officer

Use **MAX Officer** only when the Officer is genuinely fully completed. A saved MAXED Officer is then recognised by both Progress and Planner.

### Reset This Officer

This resets the selected Officer's saved progress only. It does not reset the central Inventory.

---

## Stars

Enter the Officer's current and target Star level along with the Star items held. The app calculates the Star value held, required and missing.

Seasonal Officers can use SRV where eligible. Original Officers do not use SRV.

---

## Development

Development tracks Officer unlock, skill strands/branches and Training.

Legendary Officers require **1,600 Officer Badges total to MAX**:

- Unlock: 10
- Skills/Promotion: 690
- Training: 900

Original Legendary Officers do not use ORV. They use their own specific Officer Badges and eligible Universal Legendary Badges.

Seasonal Officers from S2 onward can use ORV where applicable.

---

## XP

Enter the Officer's current level, target level and XP Book holdings. The app calculates XP held, required and missing.

---

## Progress

Progress provides the saved cross-Officer overview.

You can filter:

- **MAXED**
- **IN PROGRESS**
- **NOT STARTED**

The table shows:

- Overall progress
- Development
- Stars
- XP
- Badge shortfall
- Star shortfall
- XP shortfall
- Status

Saved Officer progress is also used by Planner.

---

## Multi-Officer Upgrade Planner

The Planner creates a priority list and previews how available resources could cover multiple Officers.

It is a planning tool only. It does not spend or alter Inventory.

### Use current held resources

This loads the relevant central Inventory values into the plan.

### Saved progress awareness

Planner first checks each Officer's saved progress.

- A **MAXED** Officer requires 0 additional badges.
- An Officer already in progress uses their actual calculated remaining badge requirement.
- A new/not-started Officer uses the full relevant requirement.

### Individual Officer Badges

Planner reads each Officer's own saved badge quantity from Inventory and applies those badges only to that Officer.

### Shared resources

After saved progress and individual held badges are considered, Planner can evaluate eligible shared resources such as:

- Universal Legendary Officer Badges
- Legendary Officer Badge Chests
- Legendary Officer Badge Selection Chests
- ORV for eligible seasonal Officers

Original Officers correctly show **N/A** for ORV/Badge.

### Planner status

- **MAXED** — Officer is already complete in saved progress.
- **Fully Funded** — all remaining badge requirements can be covered.
- **Partially Funded** — some shared resources are allocated but a shortfall remains.
- **Shortfall** — a badge requirement remains with no shared allocation covering the remainder.

### Priority

Use the arrow controls to move Officers up or down. Higher-priority Officers are considered first.

### Save Plan

Use **Save Plan** to keep a planning scenario. Saved Plans do not deduct resources from Inventory.

---

## Legendary Officer Badge Selection Chests

Selection Chests do not immediately contain every newly released Officer.

When a new pair of seasonal Officers is released, the corresponding older pair from the previous release becomes eligible for the Selection Chest pool. For example, when S7 Roisin and Barbara were released, S6 Emily and Zoya were added to the Selection Chest pool.

Planner should therefore treat Selection Chests according to Officer eligibility rather than as unrestricted badges for every Officer.

---

## Navigation

The bottom navigation stays on one row.

On wider screens, buttons expand to use the available width and remain easy to read.

On narrower screens, scroll the navigation horizontally instead of allowing buttons to wrap onto a second line.

Inventory is positioned near the left of the navigation for quick access.

---

## Keeping results accurate

For the most reliable calculations:

- Keep Inventory current.
- Save Officer progress after changing an Officer.
- Mark genuinely completed Officers MAXED.
- Update Inventory after using chests, vouchers, Stars, XP Books or Officer Badges.
- Treat Planner results as previews rather than automatic deductions.

---

## Troubleshooting

If a newly uploaded build does not appear:

1. Refresh the browser.
2. Use a cache-busting refresh if required.
3. Check that the displayed version is **v4.3.55**.

If Planner results look wrong:

1. Check the Officer's saved status in **Progress**.
2. Check their individual badge quantity in **Inventory**.
3. Check shared resources in **Inventory**.
