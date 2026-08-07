# KoW Companion v4.2.0 — Officer Experience

v4.2 focuses on finding and identifying Officers quickly as the database grows.

## New
- Search Officers by name.
- Filter by Season.
- Filter by Role.
- Display an Officer portrait when the corresponding image exists.
- Show Season and Role beside the selected Officer.

## Portrait naming
Portraits are root-level files in the flat repository build.

Filename format:
`officer-<officer-name>.jpg`

Examples:
- `officer-s7-roisin.jpg`
- `officer-s6-regina.jpg`
- `officer-katherine.jpg`

This makes it possible to add future portraits without changing the calculator logic. If a portrait file has not been added yet, the app displays a clear placeholder instead of a broken image.
