import Link from 'next/link';

import { Sel, SiteFooter } from '@/layout';

export const metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <main>
      <section className='cv-section' style={{ borderTop: 0 }}>
        <div className='wrap' style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
          <Sel style={{ display: 'inline-block' }}>
            <h1 className='cv-pixel-title' style={{ fontSize: 'clamp(70px, 16vw, 160px)' }}>
              404
            </h1>
          </Sel>
          <p className='hand' style={{ fontSize: 32 }}>
            this page segfaulted
          </p>
          <p style={{ color: 'var(--ink-soft)', maxWidth: 420 }}>
            The route you asked for is not in memory. Nothing leaked though, I checked.
          </p>
          <Link href='/' className='cv-btn cv-btn--sky'>
            ← Back home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
