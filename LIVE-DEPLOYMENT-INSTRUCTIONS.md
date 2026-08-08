# KoW Companion v4.3.3 — LIVE Deployment Instructions

This package is the approved LIVE build of KoW Companion v4.3.3.

## What is included
- Smart Dashboard fix approved in TEST v4.3.3.
- Smart Dashboard reads the active Officer and the app's existing calculated Development, Stars and XP results.
- "Can I Max This Officer?" is populated automatically.
- Saved Multi-Officer Upgrade Plan information is shown on Home.
- Recurring annual Upcoming Release information is shown on Home.
- Dashboard refreshes after calculations and whenever Home is opened.
- Created by FireStorm (371) remains in the top-right header.
- Complete 56-Officer portrait folder is included.
- The red TEST VERSION banner has been removed for LIVE.

## IMPORTANT — upload to the LIVE repository
Use the LIVE GitHub repository:
KoW-Companion

Do NOT upload this build to KoW-Companion-Test.

## Recommended replacement procedure

1. Download `KoW-Companion-v4.3.3-LIVE-Complete.zip`.
2. In Windows File Explorer, right-click the ZIP and choose **Extract All**.
3. Open the extracted `KoW-Companion-v4.3.3-LIVE` folder.
4. Open the LIVE `KoW-Companion` repository on GitHub.
5. Delete the old app files that are being replaced before uploading the new build. This prevents obsolete files from previous versions remaining in the repository.
6. Keep the repository itself — only replace the application contents.
7. Upload the CONTENTS of the extracted folder, not the outer ZIP file.
8. The repository root should contain files such as:
   - `index.html`
   - `officers.csv`
   - `background-landscape.jpg`
   - `background-portrait.jpg`
   - `README.md`
   - `USER-GUIDE.md`
   - `CHANGELOG.md`
   - `DELETE-FIRST.md`
   - `officer-portraits/`
9. Make sure `officer-portraits` is a folder in the repository and that all 56 portrait image files are inside it.
10. Commit the upload to the main branch.
11. Open the GitHub **Actions** tab and wait for the Pages deployment workflow to finish successfully.
12. When the deployment shows success, open the LIVE KoW Companion website.
13. Hard-refresh the browser with **Ctrl + F5** so the old cached `index.html` is not displayed.
14. Confirm the header shows **Officer Companion v4.3.3** and there is NO red TEST VERSION banner.

## LIVE verification checklist

After deployment, check these areas before considering the release complete:

### Home / Smart Dashboard
- Smart Dashboard populates rather than showing dashes.
- Active Officer matches the selected Officer.
- Development shows the current badge shortfall or Fully funded.
- Stars shows the current star shortfall or Fully funded.
- XP shows the current XP shortfall or Fully funded.
- "Can I Max This Officer?" changes between YES and NO correctly.
- Next Upgrade Plan displays the saved Multi-Officer plan.
- Upcoming Release displays the current recurring annual release and the next release.
- Priority guidance reflects the remaining resource requirement.

### Officer
- Officer selection works.
- Officer portrait matches the selected Officer.
- Season and role information display correctly.
- ORV and SRV costs are correct.
- All 56 Officers remain available.

### Stars
- Existing held star resources remain available.
- Star calculations update the Home Dashboard.

### Development
- Officer Badges, ORV and related calculations work.
- Changes update the Home Dashboard.

### XP
- XP Book quantities and totals work.
- Changes update the Home Dashboard.

### Planner
- Existing Multi-Officer Upgrade Planner opens.
- Saved plans remain selectable.
- Officer priority/order controls work.
- Resource Optimiser remains preview-only and does not spend saved resources.
- Home displays the selected/saved upgrade plan.

### Database
- Officer database loads correctly from `officers.csv`.

### Releases
- Annual recurring Release page is present.
- Current and future release cycle entries display correctly.

### Navigation and layout
- Bottom navigation remains on one line.
- Home, Officer, Stars, Develop, XP, Planner, Database, Releases, Settings and Help open correctly.
- `Created by FireStorm (371)` remains in the top-right corner.
- Desktop and mobile layouts remain usable.

## Cache note
GitHub Pages and the browser can briefly show the previous build after deployment. Once the GitHub Pages workflow is successful, use **Ctrl + F5** on Windows to force a fresh copy.

## Rollback
If a serious problem is found after deployment, restore the previous known-good LIVE build/repository commit rather than modifying several files individually. The approved v4.3.3 package should be kept as the release archive.
