import Link from 'next/link';

import { honorsBlock, worksSecurity } from '@/data';
import { ContactBand, PresetCard, SectionHead, SiteFooter } from '@/layout';

export const metadata = {
  title: 'Cybersecurity Works',
  description:
    'Security work by Abang Obed: penetration testing at Kynettic, consulting at Gigafro, network operations at NEMA, CVE credit and HackerOne recognition.',
};

export default function CybersecurityWorks() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead
            kicker='WORKS / CYBERSECURITY'
            title={worksSecurity.title}
            sub={worksSecurity.sub}
            right={
              <Link href='/works' className='cv-btn'>
                ← All works
              </Link>
            }
          />
          <div className='cv-presets'>
            {worksSecurity.presets.map((p) => (
              <PresetCard key={p.idx} {...p} dark={p.href === null} />
            ))}
          </div>

          <p style={{ marginTop: 34, color: 'var(--ink-soft)' }}>
            The trophies side of this shelf lives on the{' '}
            <Link href='/' style={{ borderBottom: '1.5px solid var(--sky)' }}>
              home page honors
            </Link>{' '}
            ({honorsBlock.honors.length} of them).
          </p>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
