import localFont from 'next/font/local';

import { neue_montreal } from './neue-montreal';

/* Departure Mono (SIL OFL) — futc-style pixel chrome: section titles, kickers, meta */
const departure = localFont({
  src: './files/departure-mono.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-departure',
  display: 'swap',
});

/* Atkinson Hyperlegible (SIL OFL) — futc body copy */
const atkinson = localFont({
  src: [
    { path: './files/atkinson-400.woff2', weight: '400', style: 'normal' },
    { path: './files/atkinson-400i.woff2', weight: '400', style: 'italic' },
    { path: './files/atkinson-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-atkinson',
  display: 'swap',
});

const dm_mono = localFont({
  src: [
    { path: './files/dm-mono-300.woff2', weight: '300', style: 'normal' },
    { path: './files/dm-mono-400.woff2', weight: '400', style: 'normal' },
    { path: './files/dm-mono-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-dm-mono',
  display: 'swap',
});

const inter = localFont({
  src: './files/inter-var.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-inter',
  display: 'swap',
});

const hand = localFont({
  src: './files/jmadh-400.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-hand',
  display: 'swap',
});

const pixel = localFont({
  src: './files/pixelify-var.woff2',
  weight: '400 700',
  style: 'normal',
  variable: '--font-pixel',
  display: 'swap',
});

export { atkinson, departure, dm_mono, hand, inter, neue_montreal, pixel };
