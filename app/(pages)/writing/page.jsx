import { Contact, Navbar, Transition } from '@/layout';

import '../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Writing',
  description:
    'Essays, security writeups and engineering notes by Abang Obed — on Medium and the blog.',
};

export default function Writing() {
  return (
    <Transition>
      <Navbar />
      <PageHero
        title='Writing'
        meta='Essays · Security writeups · Engineering notes'
      />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Security Writeups</h2>
            <div className='card-grid'>
              <a
                className='card'
                href='https://obx03.medium.com/htb-analysis-writeup-9387065920bc'
                target='_blank'
                rel='noopener'
              >
                <span className='source-tag'>Mar 2024 · Medium</span>
                <h3>{'{HTB}'} — Analysis Writeup</h3>
                <p>
                  Full Active Directory compromise: LDAP injection with blind
                  enumeration, credential recovery, and a Snort DLL hijack to
                  SYSTEM.
                </p>
              </a>
              <a
                className='card'
                href='https://d3vobed.github.io/posts/AzureAd-Recon/'
                target='_blank'
                rel='noopener'
              >
                <span className='source-tag'>Jan 2024 · Blog</span>
                <h3>Azure AD Recon</h3>
                <p>Reconnaissance tooling and technique notes against Azure AD.</p>
              </a>
            </div>
          </div>
        </section>

        <section className='section section-white'>
          <div className='container'>
            <h2 className='section-title'>Engineering Notes</h2>
            <div className='publications-container'>
              <div className='publication-entry entry'>
                <span className='publication-year'>2024</span>
                <h3>
                  <a
                    href='https://d3vobed.github.io/posts/Setting-up-a-full-scale-data-center-with-active-directory/'
                    target='_blank'
                    rel='noopener'
                  >
                    Setting up a full-scale data center with Active Directory
                  </a>
                </h3>
                <p>Building out an AD environment at data-center scale.</p>
              </div>
              <div className='publication-entry entry'>
                <span className='publication-year'>2023</span>
                <h3>Scripting with bpy (Blender Python)</h3>
                <p>
                  Automation inside Blender&rsquo;s Python API — where the film
                  and code habits overlap.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Essays</h2>
            <p className='lead'>
              Slower writing about time, mortality, screenwriting and the
              spaces between technology and life.
            </p>
            <div className='card-grid'>
              <a
                className='card'
                href='https://obx03.medium.com/the-man-who-was-marked-for-death-8c20d7f8f70a'
                target='_blank'
                rel='noopener'
              >
                <span className='source-tag'>Aug 2025 · Medium</span>
                <h3>The man who was marked for death</h3>
                <p>
                  On Hemingway&rsquo;s phrase, finitude, and moving from being
                  marked for death toward being marked for opportunity.
                </p>
              </a>
              <a
                className='card'
                href='https://obx03.medium.com/bleaching-through-time-8e758ec66736'
                target='_blank'
                rel='noopener'
              >
                <span className='source-tag'>Aug 2025 · Medium</span>
                <h3>Bleaching through time</h3>
                <p>
                  Time as experience rather than checklist — stripping away
                  deadlines to find what actually matters.
                </p>
              </a>
              <a
                className='card'
                href='https://d3vobed.github.io/posts/The-Beginning-Was-Always-The-End/'
                target='_blank'
                rel='noopener'
              >
                <span className='source-tag'>Jul 2025 · Blog</span>
                <h3>The Beginning Was Always The End</h3>
                <p>An essay on endings that were present from the start.</p>
              </a>
            </div>

            <div className='meta-row'>
              <a
                href='https://medium.com/@obx03'
                target='_blank'
                rel='noopener'
              >
                <span className='mono'>All posts on Medium →</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
