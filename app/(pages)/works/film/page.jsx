import Link from 'next/link';

import { filmChange, filmSfh, techCinema } from '@/data';
import { ContactBand, Gallery, HandLabel, SectionHead, SiteFooter, Sticker, TikTokWall } from '@/layout';

export const metadata = {
  title: 'Film Gallery',
  description:
    'Films by Abang Obed: Change (A Single Note. A Hundred Stories, 2026) and SFH Access, hung gallery style with stills, trailers and cuts.',
};

function FilmHeader({ film, idx }) {
  return (
    <div style={{ display: 'grid', gap: 14, marginBottom: 26 }}>
      <p className='cv-kicker'>{idx}</p>
      <h2 className='cv-title'>
        {film.title} <span style={{ color: 'var(--ink-soft)' }}>({film.subtitle})</span>
      </h2>
      <p style={{ maxWidth: 680, margin: 0 }}>{film.synopsis}</p>
      <dl
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 34px',
          margin: 0,
          padding: '14px 0',
          borderTop: '1.5px solid var(--line)',
          borderBottom: '1.5px solid var(--line)',
        }}
      >
        {film.meta.map(([t, d]) => (
          <div key={t}>
            <dt className='mono' style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
              {t}
            </dt>
            <dd className='dep' style={{ margin: '3px 0 0', fontSize: 15 }}>
              {d}
            </dd>
          </div>
        ))}
      </dl>
      <p className='hand' style={{ fontSize: 26, margin: 0 }}>
        {film.credit}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {film.links.map((l) => (
          <a key={l.label} href={l.href} className='cv-btn' target='_blank' rel='noopener'>
            {l.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

export default function FilmPage() {
  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead
            kicker='WORKS / FILM'
            title='The gallery'
            sub='Two productions, hung properly. Click any still to see it big, the way a gallery intends.'
            right={
              <Link href='/works' className='cv-btn'>
                ← All works
              </Link>
            }
          />

          {/* Change */}
          <article>
            <FilmHeader film={filmChange} idx='FILM 01' />
            <div
              style={{
                position: 'relative',
                border: '1.5px solid var(--line)',
                boxShadow: '6px 6px 0 var(--shadow-c)',
                background: '#000',
                marginBottom: 40,
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

            <h3 className='cv-title' style={{ fontSize: 24, marginBottom: 16 }}>
              Stills
            </h3>
            <Gallery items={filmChange.stills} />

            <h3 className='cv-title' style={{ fontSize: 24, margin: '40px 0 16px' }}>
              Cast
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {filmChange.cast.map(([actor, role]) => (
                <Sticker key={actor} color='paper'>
                  {actor} <span style={{ opacity: 0.65 }}>as {role}</span>
                </Sticker>
              ))}
            </div>
          </article>

          {/* SFH Access */}
          <article style={{ marginTop: 'clamp(56px, 9vw, 110px)' }}>
            <FilmHeader film={filmSfh} idx='FILM 02' />
            <HandLabel style={{ display: 'inline-block', marginBottom: 16 }}>the tiktok cuts</HandLabel>
            <TikTokWall videos={filmSfh.videos} />
          </article>

          {/* Tech Cinema */}
          <div className='cv-honor' style={{ marginTop: 56 }}>
            <span className='medal cv-tile cv-tile--pink'>▶</span>
            <div>
              <h4>{techCinema.title}</h4>
              <p>
                {techCinema.body}{' '}
                <a href={techCinema.href} target='_blank' rel='noopener' style={{ borderBottom: '1.5px solid var(--sky)' }}>
                  Watch on YouTube ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
      <SiteFooter />
    </main>
  );
}
