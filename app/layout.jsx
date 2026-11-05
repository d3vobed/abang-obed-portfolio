import './canvas.css';

import { atkinson, departure, dm_mono, hand, pixel } from './_fonts';
import { TopBar } from './_layout';

export const metadata = {
  title: {
    default: 'Abang Obed — obx03',
    template: '%s — obx03',
  },
  description:
    'Abang Obed (obx03), security researcher and filmmaker in Abuja, Nigeria. Penetration testing, reverse engineering, malware research and films.',
};

const themeInit = `(function(){try{var t=localStorage.getItem('obx-theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='light'
      className={`${departure.variable} ${atkinson.variable} ${dm_mono.variable} ${hand.variable} ${pixel.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <div className='canvas-bg' aria-hidden='true' />
        <TopBar />
        {children}
      </body>
    </html>
  );
}
