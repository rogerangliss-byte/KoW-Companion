# v4.0.5
- Fullscreen background hardening: body now mirrors the responsive portrait/landscape background as a fallback behind the fixed background layer.
- Added viewport overscan to prevent seams during mobile browser viewport resizing.
- Preserves Settings portrait/landscape background selectors and automatic orientation switching.

# v4.0.4
- Rebuilt the background as an independent fixed viewport layer.
- Removed tab/view height dependency from background rendering.
- Preserved automatic portrait/landscape background switching and Settings selectors.
- Bumped service-worker cache to force the updated CSS to deploy.

# Changelog

## v4.0.3
- Replaced the body pseudo-element background with a dedicated fixed full-screen background layer.
- Background now fills the entire viewport on short tabs such as Officer, Planner, Database and Settings.
- Portrait/Landscape automatic switching retained.
- Custom Portrait/Landscape backgrounds retained.
- Updated service-worker cache to v4.0.3.


## v4.0.2
- Fixed portrait background ending part-way down long pages on Android/mobile browsers.
- Background now uses a fixed full-viewport layer that remains visible while scrolling.
- Fix applies to Officer, Planner, Database, Settings and all other tabs.
- Portrait/Landscape automatic switching and custom background selectors are preserved.


## v4.0.1
- Added separate Portrait and Landscape background images.
- Automatically switches backgrounds using screen orientation.
- Added Portrait Background and Landscape Background selectors under Settings.
- Included the supplied 371 portrait artwork and the new 1920×1080 landscape artwork as defaults.
- Added desktop background positioning for wide screens.
- Updated service-worker cache to v4.0.1.


## v4.0.0
- Clean integrated rebuild.
- Restored full bottom navigation.
- Added all officer planning screens.
- Added ORV to Officer Badge conversion.
- Added SRV to Exclusive Star conversion.
- Added editable Officer Database and CSV tools.
- Added mobile-safe numeric inputs and local saving.
