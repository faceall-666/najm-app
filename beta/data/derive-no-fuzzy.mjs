// Reproduce the published Najm boundary derivative; Node built-ins only.
// Usage: node derive-no-fuzzy.mjs /path/to/original-lite.tzb /path/to/output.gz
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { gzipSync, gunzipSync } from 'node:zlib';
const [inputPath, outputPath, ...extra] = process.argv.slice(2);
if (!inputPath || !outputPath || extra.length) throw new Error('Two explicit paths required');
if (fs.existsSync(outputPath)) throw new Error('Refusing an existing output');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const input = fs.readFileSync(inputPath);
if (hash(input) !== '489559b612a2191d15d80b709b4b4d16efff8f7219907e6ce90cf5b124ed182c') throw new Error('Original release SHA mismatch');
function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let b = 0; b < 8; b++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
if (input.toString('ascii', 0, 4) !== 'TZFB' || input[4] !== 1 || input[48] !== 0 || input.readUInt32LE(16) !== input.length || crc32(input.subarray(0, -4)) !== input.readUInt32LE(input.length - 4)) throw new Error('Invalid original container');
const count = input.readUInt32LE(20);
const sections = Array.from({ length: count }, (_, i) => {
  const o = 64 + i * 16;
  return { type: input.readUInt32LE(o), oldOffset: input.readUInt32LE(o + 4), length: input.readUInt32LE(o + 8), reserved: input.readUInt32LE(o + 12) };
});
if (sections.filter(s => s.type === 10).length !== 1 || sections.some(s => s.oldOffset % 4 || s.oldOffset < 64 + count * 16 || s.oldOffset + s.length > input.length - 4)) throw new Error('Invalid original sections');
const retained = sections.filter(s => s.type !== 10);
let end = 64 + retained.length * 16;
for (const section of retained) { end = (end + 3) & ~3; section.offset = end; end += section.length; }
const raw = Buffer.alloc(end + 4);
input.copy(raw, 0, 0, 64);
raw.writeUInt32LE(raw.length, 16); raw.writeUInt32LE(retained.length, 20);
for (let i = 0; i < retained.length; i++) {
  const s = retained[i], o = 64 + i * 16;
  raw.writeUInt32LE(s.type, o); raw.writeUInt32LE(s.offset, o + 4);
  raw.writeUInt32LE(s.length, o + 8); raw.writeUInt32LE(s.reserved, o + 12);
  const original = input.subarray(s.oldOffset, s.oldOffset + s.length);
  original.copy(raw, s.offset);
  if (!raw.subarray(s.offset, s.offset + s.length).equals(original)) throw new Error('Payload changed');
}
raw.writeUInt32LE(crc32(raw.subarray(0, -4)), raw.length - 4);
if (raw.length !== 3226191 || hash(raw) !== 'a81f20417728b78d091a53b9ec63a70e7f9f5613a191239b691efbf3ea272ba3') throw new Error('Derivative mismatch');
const packed = gzipSync(raw, { level: 9 });
if (!gunzipSync(packed).equals(raw)) throw new Error('Lossless round-trip failed');
if (packed.length !== 2449531 || hash(packed) !== '31193fc5fe2c6110028e135a9a91b256c1cbe47653e6e757de510d6729d788bb') throw new Error('Compressed result differs; measured producer was Node22.22.3/zlib1.2.12');
fs.writeFileSync(outputPath, packed, { flag: 'wx' });
console.log(JSON.stringify({ outputBytes: packed.length, outputSha256: hash(packed), decodedSha256: hash(raw), retainedSections: retained.length, removedOnlyType: 10 }));
