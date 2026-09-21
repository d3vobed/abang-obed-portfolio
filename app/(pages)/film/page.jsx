import Image from 'next/image';

import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Film',
  description:
    'Films by Abang Obed — Change (A Single Note. A Hundred Stories), a 2026 Nigerian short film, plus development work.',
};

const stills = [
  { src: '/images/film-still.png', caption: 'Tech (Obed Ilabija) — the plan takes shape.' },
  { src: '/images/film-still1.png', caption: 'Danielle (Magdalene Egbe) — a single decision unravels.' },
  { src: '/images/film-still2.png', caption: 'Connected lives, one note of change.' },
];

const cast = [
  ['Magdalene Egbe', 'Danielle'],
  ['Clement Luka', 'Thug'],
  ['Obed Ilabija', 'Tech'],
  ['Emmanuel Jude', 'Timid'],
  ['Joel Joseph', 'Thankful'],
  ['Emmanuel Abang', 'Terri'],
  ['Micheal Otogo', 'Bartender'],
  ['Favour Anthony', 'Customer'],
];

export default function Film() {
  return (
    <main>
      <PageHero title='Film' meta='Writer · Director · Tech Cinema — development, treatments, production' />
      <section className='nv-section'>
        <div className='nv-container'>
          <div className='nv-grid-2'>
            <div>
              <span className='nv-chip' style={{ marginBottom: '1rem' }}>
                Released — 2026
              </span>
              <h2 className='nv-h2' style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
                Change
                <span style={{ fontWeight: 400, color: 'var(--nv-muted)' }}>
                  {' '}
                  (A Single Note. A Hundred Stories)
                </span>
              </h2>
              <p style={{ maxWidth: '620px', marginTop: '1.25rem' }}>
                When one decision disrupts an already connected group of lives,
                its consequences unfold in ways no one can control. Through raw
                encounters and struggles, the story explores how even the
                smallest action can echo across many lives — turning one note of
                change into a hundred untold stories.
              </p>
              <dl className='nv-facts'>
                <div>
                  <dt>Year</dt>
                  <dd>2026</dd>
                </div>
                <div>
                  <dt>Runtime</dt>
                  <dd>14 min</dd>
                </div>
                <div>
                  <dt>Genre</dt>
                  <dd>Crime / Thriller</dd>
                </div>
                <div>
                  <dt>Country</dt>
                  <dd>Nigeria</dd>
                </div>
                <div>
                  <dt>Language</dt>
                  <dd>English</dd>
                </div>
              </dl>
              <p>Written &amp; directed by Abang Obed.</p>
              <div className='nv-tags' style={{ marginTop: '1.25rem' }}>
                <a className='nv-chip' href='https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories' target='_blank' rel='noopener'>
                  TMDB
                </a>
                <a className='nv-chip' href='https://youtu.be/cdme3UoB_vY' target='_blank' rel='noopener'>
                  Watch on YouTube
                </a>
                <a className='nv-chip' href='https://www.imdb.com/name/nmobedabang' target='_blank' rel='noopener'>
                  IMDb
                </a>
                <a className='nv-chip' href='https://letterboxd.com/obx03' target='_blank' rel='noopener'>
                  Letterboxd
                </a>
                <a className='nv-chip' href='https://vimeo.com/obx03' target='_blank' rel='noopener'>
                  Vimeo
                </a>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--nv-line)', aspectRatio: '16 / 9' }}>
                <iframe
                  src='https://www.youtube.com/embed/cdme3UoB_vY'
                  title='CHANGE (Short Film) — Trailer'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='nv-section nv-section-alt'>
        <div className='nv-container'>
          <span className='nv-label'>Stills</span>
          <p className='nv-lead' style={{ marginBottom: '2rem' }}>
            A short film about how one choice echoes across many lives.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {stills.map(s => (
              <figure key={s.src} style={{ margin: 0 }}>
                <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--nv-line)' }}>
                  <Image src={s.src} width={910} height={500} alt={s.caption} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <figcaption className='nv-mono' style={{ fontSize: '0.72rem', marginTop: '0.6rem', color: 'var(--nv-muted)' }}>
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className='nv-section'>
        <div className='nv-container'>
          <span className='nv-label'>Cast</span>
          <div className='nv-tags' style={{ marginBottom: '2.5rem' }}>
            {cast.map(([actor, role]) => (
              <span key={actor} className='nv-chip'>
                {actor} <em style={{ fontStyle: 'normal', color: 'var(--nv-accent)' }}>as {role}</em>
              </span>
            ))}
          </div>
          <div className='nv-col-card' style={{ maxWidth: '560px' }}>
            <span className='nv-since'>Tech Cinema</span>
            <h3>Behind the camera</h3>
            <p>
              My film work lives under{' '}
              <a href='https://www.youtube.com/@techcinemaresyst' target='_blank' rel='noopener'>
                Tech Cinema on YouTube
              </a>{' '}
              — where the shorts, behind-the-scenes process and visual
              experiments are published.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}