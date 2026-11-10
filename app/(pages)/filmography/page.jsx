import { filmography } from '@/data';
import { ContactBand, Rise, SectionHead, SiteFooter } from '@/layout';

export const metadata = {
  title: 'Filmography',
  description:
    'Film work by Abang Obed: Change (A Single Note. A Hundred Stories, 2026) and SFH Access for the Society For HealthCare Access, hung gallery style.',
};

export default function Filmography() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <SectionHead
              kicker={filmography.kicker}
              title={filmography.title}
              sub={filmography.sub}
            />
          </Rise>

          <div className='cv-filmwall'>
            {filmography.entries.map((e, i) => (
              <Rise key={e.href} delay={i * 90}>
                <a href={e.href} className='cv-filmcard'>
                  <span className='fc-still'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.cover} alt={`${e.title} still`} loading={i === 0 ? 'eager' : 'lazy'} />
                    <span className='fc-idx'>{e.idx}</span>
                  </span>
                  <span className='fc-body'>
                    <span className='fc-title'>
                      {e.title} <i>({e.sub})</i>
                    </span>
                    <span className='fc-meta'>{e.meta}</span>
                    <span className='fc-credit'>{e.credit}</span>
                    <span className='fc-cta'>Open the gallery →</span>
                  </span>
                </a>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
      <SiteFooter />
    </main>
  );
}
