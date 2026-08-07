# Clean-up instructions for the existing GitHub repository

Before uploading v4.1.2, delete obsolete files from the repository root if they exist:

- `app.css`
- `app.js`
- `background-portrait.png`
- `background-landscape.png`
- `background-portrait.jpg`
- `background-landscape.jpg`
- old ZIP release files
- old extracted release folders
- `.github/workflows/` custom Pages workflow, if GitHub Pages is configured as **Deploy from a branch**

Keep only the files and folders supplied in this v4.1.2 package.

Then upload all v4.1.2 files to the repository root and allow the normal `pages-build-deployment` workflow to publish the site.
