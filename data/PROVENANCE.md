# Najm local timezone boundary data

Derived from ringsaturn/tzf-dist immutable v0.0.2026-e lite.tzb:
https://github.com/ringsaturn/tzf-dist/releases/tag/v0.0.2026-e
https://github.com/ringsaturn/tzf-dist/releases/download/v0.0.2026-e/lite.tzb

Original: 4,102,443 bytes; SHA256
489559b612a2191d15d80b709b4b4d16efff8f7219907e6ce90cf5b124ed182c

Transformation: remove optional TZFB E-profile FUZZY section10 only; keep all
nine remaining section payloads byte-exact; rebuild section offsets, header
file-size/count and IEEE CRC32. No coordinate, polygon, ring, hole, grid or
timezone name changed. Compress with gzip level9. A complete transformation
script accompanies this file. Original source remains available at the URLs above.

Derivative: 3,226,191 bytes; SHA256
a81f20417728b78d091a53b9ec63a70e7f9f5613a191239b691efbf3ea272ba3
Compressed: 2,449,531 bytes; SHA256
31193fc5fe2c6110028e135a9a91b256c1cbe47653e6e757de510d6729d788bb

Geographic source: timezone-boundary-builder 2026e, produced from OpenStreetMap.
https://github.com/evansiroky/timezone-boundary-builder/tree/2026e
Copyright OpenStreetMap contributors; Open Database License1.0. Full data license
is in licenses/TIMEZONE-DATA-ODBL.txt. Code adapted from ringsaturn/tzf and tzf-rs
is MIT licensed; license texts are in licenses/TZF-MIT.txt and TZF-RS-MIT.txt.
The derived database itself is offered under ODbL1.0, with the complete
alteration algorithm in derive-no-fuzzy.mjs and original download links above.

This is a simplified geographic boundary model, not a claim about legal borders
or historical territorial assignments. Border uncertainty, overlaps, unsupported
native gzip and polar conventions return unresolved. Position accuracy is a
reported statistical estimate; no 100% GPS classification guarantee is made.

The publisher's displacement certificate has not been independently replayed.
Its wrapped-longitude interpolation does not establish a displacement bound for
uncut long-wrap edges under this reader's planar containment semantics.
