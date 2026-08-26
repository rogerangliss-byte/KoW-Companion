# KoW Companion v4.6.0 STABLE

Stable English production release.

Validated correction retained:
- Edit Officer Progress updates Officer Unlocked immediately when Star progress is above 0★ or Officer Level is above 1.
- 0★ + Level 1 may remain locked.
- Skill Strand availability updates immediately:
  - 0★ unlocked: Strand 1
  - 1★: Strands 1–2
  - 2★: Strands 1–3
  - 3★+: all four Strands
- Edit Officer → MAX Officer uses the same `maxSelectedOfficerProfile()` implementation as the main Officer screen MAX button.
- No separate Edit-modal MAX implementation exists.

Production identity:
- CNAME: english.firestorm-companion.uk
- No TEST banner.
- Stable service-worker cache namespace.
