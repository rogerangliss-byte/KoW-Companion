# Changelog

## v4.2.2 — Officer Type / Role Filter Fix
- Fixed the Officer Type / Role dropdown.
- The existing Officer database stores Tank, Tank Destroyer, Infantry, Rally, Garrison, Gatherer, etc. in the Notes field.
- v4.2.2 now uses that existing field as the authoritative Officer Type / Role.
- Corrected the incorrect v4.2.1 temporary Tank assignments.
- Existing locally saved officer data is interpreted correctly without requiring users to rebuild their database.
- Example: S7 Romana and S7 Liora now appear when S7 + Tank is selected; S7 Roisin and S7 Barbara appear under Tank Destroyer.
- Cache bumped to v4.2.2.
