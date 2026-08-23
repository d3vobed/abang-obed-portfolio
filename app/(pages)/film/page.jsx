import { Contact, Navbar, Transition } from '@/layout';

import '../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Film',
  description:
    'Films by Abang Obed — Change (A Single Note. A Hundred Stories), a 2026 Nigerian short film, plus screenplays and treatments in development.',
};

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

                <p>
                  Written &amp; directed by Abang Obed.
                </p>

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
                </div>

                <h3
                  style={{
                    marginTop: '2rem',
                    color: '#1a2b3c',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Cast
                </h3>
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
            <h2 className='section-title'>In Development</h2>
            <div className='columns'>
              <div className='column-card'>
                <span className='status-tag'>Screenplay in development</span>
                <h3>Untitled second short</h3>
                <p>
                  A second short film concept currently at screenplay stage.
                  Story details are held back until the draft is locked.
                </p>
              </div>
              <div className='column-card'>
                <span className='status-tag'>Treatments</span>
                <h3>Story treatments</h3>
                <p>
                  Ongoing treatments and story work across several concepts,
                  alongside the commissioned and commercial creative projects.
                </p>
              </div>
              <div className='column-card'>
                <span className='status-tag'>Collaborators</span>
                <h3>People around the work</h3>
                <p>
                  Developing with filmmakers and producers, with an original
                  score path in discussion with a Denmark-based composer for a
                  future project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>How a Project Moves</h2>
            <p className='lead'>
              Every project here follows the same honest pipeline — nothing is
              presented as produced until it exists:
            </p>
            <div className='pipeline'>
              <span className='pipeline-step'>Logline</span>
              <span className='pipeline-arrow'>→</span>
              <span className='pipeline-step'>Treatment</span>
              <span className='pipeline-arrow'>→</span>
              <span className='pipeline-step'>Screenplay</span>
              <span className='pipeline-arrow'>→</span>
              <span className='pipeline-step'>Visual Development</span>
              <span className='pipeline-arrow'>→</span>
              <span className='pipeline-step'>Production Design</span>
              <span className='pipeline-arrow'>→</span>
              <span className='pipeline-step'>Collaborators</span>
              <span className='pipeline-arrow'>→</span>
              <span className='pipeline-step'>Status</span>
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
