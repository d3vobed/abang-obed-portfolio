import { filmChange } from '@/data';
import { ContactBand, Gallery, Rise, SiteFooter, Sticker } from '@/layout';

import { BackToGallery, FilmHeader, StillsHead } from '../film-parts';

export const metadata = {
  title: 'Change (A Single Note. A Hundred Stories)',
  description:
    'Change (2026), a short film by Abang Obed. Stills, cast and where to watch. Written & directed by Abang Obed under Tech Cinema.',
};

export default function ChangePage() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <BackToGallery />
          </Rise>

          <Rise delay={60}>
            <FilmHeader film={filmChange} idx='FILM 01' />
          </Rise>

          <Rise delay={90}>
            <div
              style={{
                position: 'relative',
                border: '1.5px solid var(--line)',
                boxShadow: '6px 6px 0 var(--shadow-c)',
                background: '#000',
                marginBottom: 8,
              }}
            >
              <iframe
                src={filmChange.trailer}
                title='CHANGE (Short Film) — Trailer'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                style={{ width: '100%', aspectRatio: '16 / 9', display: 'block' }}
              />
            </div>
          </Rise>

          <Rise delay={60}>
            <StillsHead>Stills</StillsHead>
          </Rise>
          <Rise delay={90}>
            <Gallery items={filmChange.stills} />
          </Rise>

          <Rise delay={60}>
            <StillsHead>Cast</StillsHead>
          </Rise>
          <Rise delay={90}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {filmChange.cast.map(([actor, role]) => (
                <Sticker key={actor} color='paper'>
                  {actor} <span style={{ opacity: 0.65 }}>as {role}</span>
                </Sticker>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      <ContactBand />
      <SiteFooter />
    </main>
  );
}
