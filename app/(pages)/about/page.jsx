import Image from 'next/image';

import { Contact, Navbar, Transition, Works } from '@/layout';

import '../../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Abang Obed — Security Engineer, Security Researcher and Indie Filmmaker from Cross River, Nigeria, based in Abuja.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <PageHero title='About' meta='Cross River → Abuja · Security × Cinema' image='/images/asa.jpg' />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <div className='about-content fade-in'>
              <div className='about-text'>
                <h1>Abang Obed</h1>
                <h2>Security Engineer · Security Researcher · Filmmaker</h2>
                <p>
                  I&rsquo;m a curious person who enjoys building things and
                  understanding how they work. That curiosity led me into
                  cybersecurity, where I work across detection engineering,
                  security operations, malware, and application security
                  research. I spend most of my time exploring how systems
                  behave, how attacks evade visibility, and how we can build
                  better ways to detect and respond to them. I enjoy turning
                  ideas into practical tools and research that people can
                  actually use.
                </p>
                <p>
                  Outside of cybersecurity, I write and make films. It may seem
                  like a different world, but it is driven by the same curiosity
                  of asking questions, solving problems, and telling stories
                  that matter. I&rsquo;m always learning, building, and looking
                  for opportunities to work with people who enjoy solving
                  meaningful problems. If that sounds like you, I would be happy
                  to connect.
                </p>

                <div className='about-links mono'>
                  <a href='https://github.com/d3vobed' target='_blank' rel='noopener'>GitHub</a>
                  <a href='https://www.linkedin.com/in/obx03' target='_blank' rel='noopener'>LinkedIn</a>
                  <a href='https://medium.com/@obx03' target='_blank' rel='noopener'>Medium</a>
                  <a href='https://x.com/obedeee_Jr' target='_blank' rel='noopener'>X / Twitter</a>
                  <a href='https://www.youtube.com/@techcinemaresyst' target='_blank' rel='noopener'>YouTube</a>
                  <a href='https://vimeo.com/obx03' target='_blank' rel='noopener'>Vimeo</a>
                  <a href='https://letterboxd.com/obx03' target='_blank' rel='noopener'>Letterboxd</a>
                  <a href='https://www.imdb.com/name/nmobedabang' target='_blank' rel='noopener'>IMDb</a>
                  <a href='https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories' target='_blank' rel='noopener'>TMDB</a>
                  <a href='https://tryhackme.com/p/populistpreventi' target='_blank' rel='noopener'>TryHackMe</a>
                  <a href='https://www.hackthebox.com/' target='_blank' rel='noopener'>HackTheBox</a>
                  <a href='https://www.instagram.com/obed.eee' target='_blank' rel='noopener'>Instagram</a>
                </div>

                <a className='resume-btn' href='/files/abang-obed-resume.pdf' target='_blank' rel='noopener'>
                  Download CV (PDF)
                </a>
              </div>

              <div className='about-image'>
                <Image
                  src='/images/about.jpg'
                  width={360}
                  height={360}
                  alt='Abang Obed'
                  priority
                />
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
                <Image
                  src='/images/cert.jpg'
                  width={320}
                  height={200}
                  alt='CPTS certificate'
                  className='cert-img'
                />
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
