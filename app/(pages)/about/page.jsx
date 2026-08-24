import Image from 'next/image';

import { Contact, Navbar, Transition, Works } from '@/layout';

import '../../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Abang Obed is a Security Engineer, Security Researcher and Indie Filmmaker from Cross River, Nigeria, based in Abuja.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <PageHero title='About' meta='Cross River → Abuja · Security × Cinema' />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <div className='about-content fade-in'>
              <div className='about-text'>
                <h1>Abang Obed</h1>
                <h2>Security Engineer · Security Researcher · Filmmaker</h2>
                <p>
                  I&rsquo;m a security engineer and indie filmmaker from Cross
                  River, Nigeria, based in Abuja. My work sits at the
                  intersection of technology and art — where code and film
                  collide.
                </p>
                <p>
                  On the technical side, I work in security engineering,
                  security operations and vulnerability research: how systems
                  behave, how the controls watching them observe that
                  behaviour, and where those assumptions quietly break. That
                  has meant assessments across web, mobile and infrastructure;
                  operations inside a government emergency-management agency;
                  and research into Windows telemetry.
                </p>
                <p>
                  The other half of the work is cinema. I write and direct —
                  my short film{' '}
                  <a href='/film'>
                    Change (A Single Note. A Hundred Stories)
                  </a>{' '}
                  was released in 2026, and new screenplays and treatments are
                  in development. I also build tools for filmmaking itself:
                  storyboarding software, facial-replacement tracking, visual
                  effects experiments.
                </p>
                <p>
                  I take on commissioned and commercial projects with select
                  brands and institutions alongside all of this.
                </p>

                <div className='about-links mono'>
                  <a href='https://github.com/d3vobed' target='_blank' rel='noopener'>GitHub</a>
                  <a href='https://www.linkedin.com/in/obx03' target='_blank' rel='noopener'>LinkedIn</a>
                  <a href='https://medium.com/@obx03' target='_blank' rel='noopener'>Medium</a>
                  <a href='https://x.com/obedeee_Jr' target='_blank' rel='noopener'>X / Twitter</a>
                  <a href='https://www.youtube.com/@techcinemaresyst' target='_blank' rel='noopener'>YouTube</a>
                  <a href='https://vimeo.com/obx03' target='_blank' rel='noopener'>Vimeo</a>
                  <a href='https://letterboxd.com/obx03' target='_blank' rel='noopener'>Letterboxd</a>
                  <a href='https://www.imdb.com/name/nm[ADD IMDB ID]' target='_blank' rel='noopener'>IMDb</a>
                  <a href='https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories' target='_blank' rel='noopener'>TMDB</a>
                  <a href='https://tryhackme.com/p/obx03' target='_blank' rel='noopener'>TryHackMe</a>
                  <a href='https://www.hackthebox.com/' target='_blank' rel='noopener'>HackTheBox</a>
                  <a href='https://www.instagram.com/obed.eee' target='_blank' rel='noopener'>Instagram</a>
                </div>
              </div>

              <div className='about-image'>
                <Image
                  src='/images/avatar.jpg'
                  width={360}
                  height={360}
                  alt='Abang Obed'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className='section section-white'>
          <div className='container'>
            <h2 className='section-title'>Focus</h2>
            <div className='columns'>
              <div className='column-card'>
                <span className='source-tag'>Security</span>
                <ul>
                  <li>Security engineering &amp; operations</li>
                  <li>Vulnerability research &amp; disclosure</li>
                  <li>Web, API, mobile and network assessment</li>
                  <li>Azure / AWS cloud security work</li>
                </ul>
              </div>
              <div className='column-card'>
                <span className='source-tag'>Research</span>
                <ul>
                  <li>Endpoint telemetry research (ETW / EtwScope)</li>
                  <li>STCMF — measuring what controls actually see</li>
                  <li>Coordinated disclosure &amp; writeups</li>
                </ul>
              </div>
              <div className='column-card'>
                <span className='source-tag'>Film</span>
                <ul>
                  <li>Writing &amp; directing shorts</li>
                  <li>Screenplays and treatments in development</li>
                  <li>AI-assisted pre-visualization tooling</li>
                  <li>Tech Cinema — the film channel and label</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Education &amp; Certifications</h2>
            <div className='education-container'>
              <div className='education-entry entry'>
                <h3>B.Tech in Cyber Security Science</h3>
                <p>
                  Federal University of Technology, Minna, Nigeria — 2021–2026
                </p>
              </div>
              <div className='education-entry entry'>
                <h3>HTB Certified Penetration Testing Specialist (CPTS)</h3>
                <p>
                  HackTheBox — Issued Feb 2024 · Credential ID{' '}
                  <span className='mono'>HTBCERT-2508B8ABE8</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Works />
      </main>
      <Contact />
    </Transition>
  );
}
