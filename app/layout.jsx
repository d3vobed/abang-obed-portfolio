import { NovoraFooter, NovoraNavbar } from '@/components';
import { rootMetadata } from '@/config';
import { inter, jetbrains_mono, neue_montreal } from '@/fonts';
import { Providers } from '@/providers';
import './globals.css';
import './novora.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={`${inter.variable} ${jetbrains_mono.variable} ${neue_montreal.variable}`}
    >
      <body className={neue_montreal.className}>
        <div className='novora'>
          <NovoraNavbar />
          <Providers>{children}</Providers>
          <NovoraFooter />
        </div>
      </body>
    </html>
  );
}
