// gta6-clipper-01 entry — clip 2: "Main GTA VI cuma jadi mandor"
// Video: https://www.youtube.com/shorts/gNh8E0vn3-Y
// The entry is the video itself: the agent found the GTA 6 moment (Jason
// painting a wall, meme "Main GTA VI cuma jadi mandor"), cut it into a
// vertical clip with the make.fun pitch, and the clip went up on YouTube.
// This program only hands VIDEO.json to the gate: it copies VIDEO.json from
// the repository root to /output/VIDEO.json, where the gate reads it.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// The gate only accepts a YouTube address: refuse anything else early.
const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || !(video.url.startsWith('https://www.youtube.com/') || video.url.startsWith('https://youtu.be/'))) {
  console.error('VIDEO.json does not name a YouTube video');
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
