import { dm_mono, hand, inter, neue_montreal, pixel } from '@/fonts';
import { Providers } from '@/providers';

import './globals.css';
import './canvas.css';

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://obx03.tech'),
  title: {
    default: 'Abang Obed — Security Engineer, Researcher & Filmmaker',
    template: '%s | Abang Obed',
  },
  description:
    'Abang Obed — Security Engineer, Security Researcher and Filmmaker based in Abuja, Nigeria. Security work and cinema on one canvas.',
  openGraph: {
    title: 'Abang Obed — Security Engineer, Researcher & Filmmaker',
    description:
      'Security engineering, offensive research and cinema — the canvas of Abang Obed.',
    url: 'https://obx03.tech',
    siteName: 'Abang Obed',
    type: 'website',
  },
};

/** Runs before paint: restores saved theme or falls back to system preference. */
const THEME_INIT = `(function(){try{var t=localStorage.getItem('obx-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light')}})()`;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      dir='ltr'
      data-theme='light'
      className={`${inter.variable} ${dm_mono.variable} ${hand.variable} ${pixel.variable} ${neue_montreal.variable}`}
    >
      <body className='bg-white text-[#111212] antialiased'>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
