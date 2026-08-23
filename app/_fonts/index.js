import { Inter, JetBrains_Mono } from 'next/font/google';

import { neue_montreal } from './neue-montreal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export { inter, jetbrains_mono, neue_montreal };
