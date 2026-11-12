# ARCHIVED — KoW Companion v4.6.0 Stable Baseline

**Historical record only. Superseded by the v4.7.0 application.**

This file records the validated v4.6.0 baseline and its then-current behaviour. It is retained for audit history and must not be used as the current release identity, deployment checklist or source-of-truth.

Validated behaviour recorded for v4.6.0:
- Edit Officer Progress updates Officer Unlocked immediately when Star progress is above 0★ or Officer Level is above 1.
- 0★ + Level 1 may remain locked.
- Skill Strand availability updates immediately:
  - 0★ unlocked: Strand 1
  - 1★: Strands 1–2
  - 2★: Strands 1–3
  - 3★+: all four Strands
- Edit Officer → MAX Officer used the same `maxSelectedOfficerProfile()` implementation as the main Officer screen MAX button.
- No separate Edit-modal MAX implementation existed in that baseline.

The English Live CNAME recorded in the original baseline was `english.firestorm-companion.uk`. This is historical metadata, not a domain instruction for the Multilingual repositories.

**Current application version: v4.7.0.** Current Test/Live identity and deployment details must be taken from the corresponding repository's current files.
