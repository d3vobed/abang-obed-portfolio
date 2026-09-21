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
      'On Hemingway’s phrase, finitude, and moving from being marked for death toward being marked for opportunity.',
    href: 'https://obx03.medium.com/the-man-who-was-marked-for-death-8c20d7f8f70a',
  },
  {
    tag: 'Aug 2025 · Medium',
    title: 'Bleaching through time',
    excerpt:
      'Time as experience rather than checklist — stripping away deadlines to find what actually matters.',
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
    excerpt: 'Automation inside Blender’s Python API — where the film and code habits overlap.',
    href: 'https://d3vobed.github.io/posts/Scripting-with-bpy(Blender Python)/',
  },
];

function Group({ title, items }) {
  return (
    <section className='nv-section'>
      <div className='nv-container'>
        <span className='nv-label'>{title}</span>
        <div className='nv-blog-grid'>
          {items.map(post => (
            <a key={post.href} href={post.href} target='_blank' rel='noopener' className='nv-post'>
              <div className='nv-post-body'>
                <span className='nv-post-date'>{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className='nv-post-link'>Read ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  return (
    <main>
      <PageHero title='Blog' meta='Essays · Security writeups · Engineering notes' />
      <Group title='Essays' items={essays} />
      <Group title='Security Writeups' items={security} />
      <Group title='Engineering Notes' items={engineering} />
      <section className='nv-section nv-section-alt'>
        <div className='nv-container'>
          <a className='nv-btn nv-btn-ghost nv-mono' href='https://medium.com/@obx03' target='_blank' rel='noopener'>
            All posts on Medium ↗
          </a>
        </div>
      </section>
    </main>
  );
}