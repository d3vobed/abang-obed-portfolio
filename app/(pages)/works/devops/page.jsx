import Link from 'next/link';

import { worksDev } from '@/data';
import { ContactBand, PresetCard, SectionHead, SiteFooter } from '@/layout';

export const metadata = {
  title: 'Developer Operations',
  description:
    'Engineering work by Abang Obed: backend development at Myphlexit, systems architecture at IDE Nigeria, cloud engineering and developer tooling.',
};

export default function DevopsWorks() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead
            kicker='WORKS / DEV OPS'
            title={worksDev.title}
            sub={worksDev.sub}
            right={
              <Link href='/works' className='cv-btn'>
                ← All works
              </Link>
            }
          />
          <div className='cv-presets'>
            {worksDev.presets.map((p) => (
              <PresetCard key={p.idx} {...p} />
            ))}
          </div>

          <p style={{ marginTop: 34, color: 'var(--ink-soft)' }}>
            Side projects like Video Storybook and the Azure Stack USSD service sit on the{' '}
            <Link href='/' style={{ borderBottom: '1.5px solid var(--sky)' }}>
              home page under Projects
            </Link>
            .
          </p>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
