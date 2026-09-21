import { Contact, Navbar, Transition } from '@/layout';

import '../../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Blog',
  description:
    'Essays, security writeups and engineering notes by Abang Obed — on Medium and the blog.',
};

const essays = [
  {
    tag: 'Aug 2025 · Medium',
    title: 'The man who was marked for death',
    excerpt:
      'On Hemingway’s phrase, finitude, and moving from being marked for death toward being marked for opportunity. Each morning hands us another chance to shift the script.',
    href: 'https://obx03.medium.com/the-man-who-was-marked-for-death-8c20d7f8f70a',
  },
  {
    tag: 'Aug 2025 · Medium',
    title: 'Bleaching through time',
    excerpt:
      'Time as experience rather than checklist — stripping away deadlines to find what actually matters, the raw essence of living.',
    href: 'https://obx03.medium.com/bleaching-through-time-8e758ec66736',
  },
  {
    tag: 'Jul 2025 · Blog',
    title: 'The Beginning Was Always The End',
    excerpt: 'An essay on endings that were present from the start.',
    href: 'https://d3vobed.github.io/posts/The-Beginning-Was-Always-The-End/',
  },
];

const security = [
  {
    tag: 'Mar 2024 · Medium',
    title: '{HTB} Analysis Writeup',
    excerpt:
      'Full Active Directory compromise: LDAP injection with blind enumeration, credential recovery, and a Snort DLL hijack to SYSTEM.',
    href: 'https://obx03.medium.com/htb-analysis-writeup-9387065920bc',
  },
  {
    tag: 'Jan 2024 · Blog',
    title: 'Azure AD Recon',
    excerpt: 'Reconnaissance tooling and technique notes against Azure AD.',
    href: 'https://d3vobed.github.io/posts/AzureAd-Recon/',
  },
];

const engineering = [
  {
    tag: '2024 · Blog',
    title: 'Setting up a full-scale data center with Active Directory',
    excerpt: 'Building out an AD environment at data-center scale.',
    href: 'https://d3vobed.github.io/posts/Setting-up-a-full-scale-data-center-with-active-directory/',
  },
  {
    tag: '2023 · Blog',
    title: 'Scripting with bpy (Blender Python)',
    excerpt:
      'Automation inside Blender’s Python API — where the film and code habits overlap.',
    href: 'https://d3vobed.github.io/posts/Scripting-with-bpy(Blender Python)/',
  },
];

function Group({ title, items }) {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(post => (
            <a
              key={post.href}
              className='card'
              href={post.href}
              target='_blank'
              rel='noopener'
            >
              <span className='source-tag'>{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className='mono' style={{ fontSize: '0.8rem' }}>
                Read →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  return (
    <Transition>
      <Navbar />
      <PageHero
        title='Blog'
        meta='Essays · Security writeups · Engineering notes'
        image='/images/film-still.png'
      />
      <main className='aman'>
        <Group title='Essays' items={essays} />
        <Group title='Security Writeups' items={security} />
        <Group title='Engineering Notes' items={engineering} />
        <section className='section section-white'>
          <div className='container'>
            <div className='meta-row'>
              <a
                href='https://medium.com/@obx03'
                target='_blank'
                rel='noopener'
                style={{ all: 'unset', cursor: 'pointer' }}
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
