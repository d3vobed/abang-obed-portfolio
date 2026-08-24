import Image from 'next/image';

import { Contact, Navbar, Transition } from '@/layout';

import '../../aman.css';
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

export default function Film() {
  return (
    <Transition>
      <Navbar />
      <PageHero
        title='Film'
        meta='Writer · Director · Tech Cinema — development, treatments, production'
      />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <span className='status-tag'>Released — 2026</span>
            <h2 className='section-title' style={{ marginBottom: '1rem' }}>
              Change
              <span style={{ fontWeight: 400 }}> (A Single Note. A Hundred Stories)</span>
            </h2>

            <div className='film-feature fade-in'>
              <div>
                <p style={{ maxWidth: '620px' }}>
                  When one decision disrupts an already connected group of
                  lives, its consequences unfold in ways no one can control.
                  Through raw encounters and struggles, the story explores how
                  even the smallest action can echo across many lives — turning
                  one note of change into a hundred untold stories.
                </p>

                <dl className='fact-list'>
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

                <div className='meta-row'>
                  <a
                    href='https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories'
                    target='_blank'
                    rel='noopener'
                  >
                    <span>TMDB</span>
                  </a>
                  <a
                    href='https://youtu.be/cdme3UoB_vY'
                    target='_blank'
                    rel='noopener'
                  >
                    <span>Watch on YouTube</span>
                  </a>
                  <a
                    href='https://www.imdb.com/name/nm[ADD IMDB ID]'
                    target='_blank'
                    rel='noopener'
                  >
                    <span>IMDb</span>
                  </a>
                  <a
                    href='https://letterboxd.com/obx03'
                    target='_blank'
                    rel='noopener'
                  >
                    <span>Letterboxd</span>
                  </a>
                  <a
                    href='https://vimeo.com/obx03'
                    target='_blank'
                    rel='noopener'
                  >
                    <span>Vimeo</span>
                  </a>
                </div>
              </div>

              <div className='film-media'>
                <iframe
                  src='https://www.youtube.com/embed/cdme3UoB_vY'
                  title='CHANGE (Short Film) — Trailer'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className='section section-white'>
          <div className='container'>
            <h2 className='section-title'>Stills</h2>
            <p className='lead'>
              A short film about how one choice echoes across many lives.
            </p>
            <div className='grid gap-6 md:grid-cols-3'>
              {stills.map((s, i) => (
                <figure
                  key={s.src}
                  className='fade-in'
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className='overflow-hidden rounded-xl shadow-lg'>
                    <Image
                      src={s.src}
                      width={910}
                      height={500}
                      alt={s.caption}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <figcaption
                    className='mono'
                    style={{ fontSize: '0.78rem', marginTop: '0.6rem', color: '#707070' }}
                  >
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Cast</h2>
            <div className='cast-chips'>
              {[
                ['Magdalene Egbe', 'Danielle'],
                ['Clement Luka', 'Thug'],
                ['Obed Ilabija', 'Tech'],
                ['Emmanuel Jude', 'Timid'],
                ['Joel Joseph', 'Thankful'],
                ['Emmanuel Abang', 'Terri'],
                ['Micheal Otogo', 'Bartender'],
                ['Favour Anthony', 'Customer'],
              ].map(([actor, role]) => (
                <span className='chip' key={actor}>
                  {actor} <span>as {role}</span>
                </span>
              ))}
            </div>

            <div className='entry' style={{ marginTop: '2.5rem' }}>
              <h3>Tech Cinema</h3>
              <p>
                My film work lives under{' '}
                <a
                  href='https://www.youtube.com/@techcinemaresyst'
                  target='_blank'
                  rel='noopener'
                >
                  Tech Cinema on YouTube
                </a>{' '}
                — where the shorts, behind-the-scenes process and visual
                experiments are published.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
