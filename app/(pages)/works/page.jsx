import { ContactBand, PresetCard, SectionHead, SiteFooter } from '@/layout';

const GROUPS = [
  {
    idx: 'WORKS 01',
    title: 'Film Gallery',
    body: 'Change (2026) and SFH Access. Stills, trailers, cast and the TikTok cuts, hung like a gallery.',
    stack: 'Change · SFH Access · Tech Cinema',
    href: '/works/film',
  },
  {
    idx: 'WORKS 02',
    title: 'Cybersecurity',
    body: 'Penetration testing, security consulting, network operations and the research in between.',
    stack: 'Kynettic · Gigafro · NEMA · CVE',
    href: '/works/cybersecurity',
  },
  {
    idx: 'WORKS 03',
    title: 'Developer Operations',
    body: 'Backend engineering, cloud work and the tools built along the way.',
    stack: 'Myphlexit · IDE Nigeria · ATL Labs',
    href: '/works/devops',
  },
];

export const metadata = {
  title: 'Works',
  description: 'Selected works of Abang Obed: film, cybersecurity and developer operations.',
};

export default function Works() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead
            kicker='WORKS'
            title='Three shelves, one desk'
            sub='Everything I make lands on one of these shelves. Pick one.'
          />
          <div className='cv-presets'>
            {GROUPS.map((g) => (
              <PresetCard key={g.idx} {...g} />
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
