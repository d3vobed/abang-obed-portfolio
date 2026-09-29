import {
  DM_Mono,
  Inter,
  JetBrains_Mono,
  Just_Me_Again_Down_Here,
  Pixelify_Sans,
} from 'next/font/google';

import { neue_montreal } from './neue-montreal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dm_mono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const hand = Just_Me_Again_Down_Here({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-hand',
  display: 'swap',
});

const pixel = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixel',
  display: 'swap',
});

export {
  inter,
  dm_mono,
  jetbrains_mono,
  hand,
  pixel,
  neue_montreal,
};
