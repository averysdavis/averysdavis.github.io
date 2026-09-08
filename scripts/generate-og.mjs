#!/usr/bin/env node
/**
 * Generates the share card at `public/og.png`.
 *
 * This is a script rather than an `app/opengraph-image.tsx` route because the
 * site deploys to GitHub Pages. Next's metadata routes emit an extensionless
 * file (`out/opengraph-image`), which Pages serves as application/octet-stream
 * — and OpenGraph scrapers reject non-image content types. A real .png in
 * `public/` sidesteps that, and lets every page reference one stable path
 * instead of relying on metadata-file inheritance, which a route-level
 * `openGraph` object silently replaces.
 *
 * Run with `npm run og`. The output is committed: the card changes only when
 * the design or the facts on it change, so builds stay deterministic and do
 * not depend on Google Fonts being reachable from CI.
 */
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { createElement as h } from 'react';

import { ogProfileSnapshot } from './og-profile.mjs';

// `next/og` ships as CommonJS with no ESM export condition, so it has to be
// required rather than imported.
const { ImageResponse } = createRequire(import.meta.url)('next/og');

// Other parts of the site read the same profile file, so the card cannot
// silently drift from the public facts elsewhere on the site.
const profile = JSON.parse(
  await readFile(join(process.cwd(), 'src/data/profile.json'), 'utf8'),
);

const OUTPUT = join(process.cwd(), 'public', 'og.png');
const METADATA_OUTPUT = join(process.cwd(), 'public', 'og.meta.json');
const PORTRAIT_PATH = join(process.cwd(), 'public', 'images', 'me.jpg');
const SIZE = { width: 1200, height: 630 };
const PROFILE_SNAPSHOT = ogProfileSnapshot(profile);
const generatorSource = await readFile(new URL(import.meta.url), 'utf8');
const portraitBuffer = await readFile(PORTRAIT_PATH);
const portraitDataUri = `data:image/jpeg;base64,${portraitBuffer.toString('base64')}`;
// The portrait isn't a profile.json field, so it isn't covered by
// PROFILE_SNAPSHOT — its bytes are folded in directly instead, and
// check-og.mjs reads the same file the same way so the two stay in sync.
const generatorDigest = createHash('sha256')
  .update(generatorSource)
  .update('\0')
  .update(JSON.stringify(PROFILE_SNAPSHOT))
  .update('\0')
  .update(portraitBuffer)
  .digest('hex');

const INK = '#0e1116';
const PAPER = '#f2f1ec';
const GRAPHITE = '#545a63';

/**
 * Mirrors the homepage hero's tagline. Kept as a literal here (rather than
 * imported) because this script runs as plain Node, not through the
 * TypeScript path aliases `src/lib/utils.ts` lives behind — so it has to be
 * kept in sync with SITE_DESCRIPTION by hand.
 */
const TAGLINE =
  'Senior at Khan Lab School. Team Co-Lead of the KhanLab-BayArea iGEM team, an international synthetic biology competition.';

const [FIRST_NAME, ...REST_OF_NAME] = profile.name.split(' ');

/**
 * Fetches a font from Google as TTF, which is what satori accepts.
 *
 * Google's CSS endpoint serves woff2 to modern browsers and TTF to older
 * clients, so the request deliberately goes out without a browser User-Agent.
 */
async function loadGoogleFont(family, weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
  ).then((response) => response.text());

  const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
  if (!url) {
    throw new Error(`No font URL found for ${family} ${weight}`);
  }

  const font = await fetch(url);
  if (!font.ok) {
    throw new Error(`Failed to download ${family}: ${font.status}`);
  }

  return font.arrayBuffer();
}

const PORTRAIT_SIZE = 340;

/**
 * The homepage hero frames the portrait in a bordered, padded box rather
 * than letting the photo bleed to the edge — reproduced here at card scale.
 */
function portrait() {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        border: `2px solid ${INK}`,
        background: '#ffffff',
        padding: 10,
      },
    },
    h('img', {
      src: portraitDataUri,
      width: PORTRAIT_SIZE,
      height: PORTRAIT_SIZE,
      style: { objectFit: 'cover' },
    }),
  );
}

function card() {
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: PAPER,
        padding: '0 80px',
        borderTop: `10px solid ${INK}`,
      },
    },
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', maxWidth: 660 } },
      h(
        'div',
        {
          style: {
            fontFamily: 'Display',
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: INK,
            display: 'flex',
            flexDirection: 'column',
          },
        },
        h('span', {}, FIRST_NAME),
        h('span', {}, REST_OF_NAME.join(' ').replace("'", '’')),
      ),
      h(
        'div',
        {
          style: {
            marginTop: 30,
            fontFamily: 'Mono',
            fontSize: 21,
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: GRAPHITE,
            display: 'flex',
          },
        },
        TAGLINE,
      ),
    ),
    portrait(),
  );
}

const [display, mono] = await Promise.all([
  loadGoogleFont('Bricolage+Grotesque', 800),
  loadGoogleFont('JetBrains+Mono', 500),
]);

const response = new ImageResponse(card(), {
  ...SIZE,
  fonts: [
    { name: 'Display', data: display, weight: 800, style: 'normal' },
    { name: 'Mono', data: mono, weight: 500, style: 'normal' },
  ],
});
const image = Buffer.from(await response.arrayBuffer());
const imageDigest = createHash('sha256').update(image).digest('hex');

await Promise.all([
  writeFile(OUTPUT, image),
  writeFile(
    METADATA_OUTPUT,
    `${JSON.stringify(
      {
        size: SIZE,
        profile: PROFILE_SNAPSHOT,
        generatorDigest,
        imageDigest,
      },
      null,
      2,
    )}\n`,
  ),
]);

console.log(
  `Wrote ${OUTPUT} (${SIZE.width}x${SIZE.height}) and ${METADATA_OUTPUT}`,
);
