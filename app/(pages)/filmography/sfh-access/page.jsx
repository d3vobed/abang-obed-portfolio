import { filmSfh, techCinema } from '@/data';
import { ContactBand, Gallery, HandLabel, Rise, SiteFooter, TikTokWall } from '@/layout';

import { BackToGallery, FilmHeader, StillsHead } from '../film-parts';

export const metadata = {
  title: 'SFH Access (Society For HealthCare Access)',
  description:
    'Creative direction for the Society For HealthCare Access by Abang Obed under Icon Digital Edge. Wrote, edited, directed & 1st AC to the DOP. Skits, talking heads, a podcast session and the TikTok cuts.',
};

export default function SfhAccessPage() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <BackToGallery />
          </Rise>

          <Rise delay={60}>
            <FilmHeader film={filmSfh} idx='FILM 02' />
          </Rise>

          <Rise delay={60}>
            <StillsHead>Stills</StillsHead>
          </Rise>
          <Rise delay={90}>
            <Gallery items={filmSfh.stills} />
          </Rise>

          <Rise delay={60}>
            <HandLabel style={{ display: 'inline-block', marginTop: 44, marginBottom: 16 }}>
              the tiktok cuts
            </HandLabel>
          </Rise>
          <Rise delay={90}>
            <TikTokWall videos={filmSfh.videos} />
          </Rise>

          <Rise delay={60}>
            <div className='cv-honor' style={{ marginTop: 56 }}>
              <span className='medal cv-tile cv-tile--pink'>▶</span>
              <div>
                <h4>{techCinema.title}</h4>
                <p>
                  {techCinema.body}{' '}
                  <a
                    href={techCinema.href}
                    target='_blank'
                    rel='noopener'
                    style={{ borderBottom: '1.5px solid var(--sky)' }}
                  >
                    Watch on YouTube ↗
                  </a>
                </p>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      <ContactBand />
      <SiteFooter />
    </main>
  );
}
