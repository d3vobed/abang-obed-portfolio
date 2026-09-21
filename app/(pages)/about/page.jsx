import Image from 'next/image';

import Works from '../../_components/works';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Abang Obed — Security Engineer, Security Researcher and Indie Filmmaker from Cross River, Nigeria, based in Abuja.',
};

const links = [
  { label: 'GitHub', href: 'https://github.com/d3vobed' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/obx03' },
  { label: 'Medium', href: 'https://medium.com/@obx03' },
  { label: 'X / Twitter', href: 'https://x.com/obedeee_Jr' },
  { label: 'YouTube', href: 'https://www.youtube.com/@techcinemaresyst' },
  { label: 'Vimeo', href: 'https://vimeo.com/obx03' },
  { label: 'Letterboxd', href: 'https://letterboxd.com/obx03' },
  { label: 'IMDb', href: 'https://www.imdb.com/name/nmobedabang' },
  { label: 'TMDB', href: 'https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/populistpreventi' },
  { label: 'HackTheBox', href: 'https://www.hackthebox.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/obed.eee' },
];

export default function About() {
  return (
    <>
      <PageHero title='About' meta='Cross River → Abuja · Security × Cinema' />
      <main>
        {/* Bio */}
        <section className='nv-section'>
          <div className='nv-container'>
            <div className='nv-grid-2'>
              <div>
                <span className='nv-label'>Bio</span>
                <h2 className='nv-h2' style={{ marginBottom: '1.25rem' }}>
                  Abang Obed
                </h2>
                <p className='nv-lead' style={{ marginBottom: '1rem' }}>
                  I&rsquo;m a curious person who enjoys building things and
                  understanding how they work. That curiosity led me into
                  cybersecurity, where I work across detection engineering,
                  security operations, malware, and application security
                  research. I enjoy turning ideas into practical tools and
                  research people can actually use.
                </p>
                <p style={{ color: 'var(--nv-muted)' }}>
                  Outside of cybersecurity, I write and make films — driven by
                  the same curiosity of asking questions, solving problems, and
                  telling stories that matter. Always learning, building, and
                  looking for opportunities to work with people solving
                  meaningful problems.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Image
                  src='/images/about.jpg'
                  width={360}
                  height={360}
                  alt='Abang Obed'
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--nv-line)',
                  }}
                />
                <a className='nv-file-btn' style={{ alignSelf: 'flex-start' }} href='/files/abang-obed-resume.pdf' target='_blank' rel='noopener'>
                  Download CV (PDF) ↘
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className='nv-section nv-section-alt'>
          <div className='nv-container'>
            <span className='nv-label'>Elsewhere</span>
            <div className='nv-tags'>
              {links.map(l => (
                <a key={l.href} className='nv-chip' href={l.href} target='_blank' rel='noopener'>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Education & certifications */}
        <section className='nv-section'>
          <div className='nv-container'>
            <span className='nv-label'>Education &amp; certifications</span>
            <div className='nv-timeline' style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className='nv-col-card'>
                <span className='nv-since'>Education</span>
                <h3>B.Tech in Cyber Security Science</h3>
                <p>Federal University of Technology, Minna, Nigeria — 2021–2026.</p>
              </div>
              <div className='nv-col-card'>
                <span className='nv-since'>Certification</span>
                <h3>HTB Certified Penetration Testing Specialist (CPTS)</h3>
                <p>HackTheBox — issued Feb 2024 · Credential ID HTBCERT-2508B8ABE8.</p>
                <Image
                  src='/images/cert.jpg'
                  width={320}
                  height={200}
                  alt='CPTS certificate'
                  style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', border: '1px solid var(--nv-line)' }}
                />
              </div>
            </div>
          </div>
        </section>

        <Works />
      </main>
    </>
  );
}