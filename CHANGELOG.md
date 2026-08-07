# Changelog

## v4.0.8
- Fixed the fullscreen background layer by using `position: fixed; inset: 0` without `100vh`/`100dvh`.
- This avoids viewport-unit height clipping that caused the lower section to render black on short tabs.
- Replaced the built-in defaults with zone-neutral tank backgrounds containing no 371 branding.
- Added dedicated 1920×1080 landscape and 1080×1920 portrait defaults.
- Zones can still upload their own portrait and landscape images from Settings.
- Service-worker cache bumped to v4.0.8.
