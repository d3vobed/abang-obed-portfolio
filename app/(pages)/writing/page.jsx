import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

import { PageHero } from '../_components/page-hero';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function getPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf8');
      const { data } = matter(raw);
      const date = data.date
        ? typeof data.date === 'string'
          ? data.date
          : data.date.toISOString().slice(0, 10)
        : '';
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title || f,
        date,
        tag: data.tag || 'Post',
        excerpt: data.excerpt || '',
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Writing',
  description: 'Essays, security writeups and engineering notes by Abang Obed.',
};

const externalPosts = [
  { title: 'Essays & security writeups', tag: 'Medium', url: 'https://medium.com/@obx03' },
  { title: 'Older writeups — HTB, Active Directory, engineering', tag: 'Blog', url: 'https://d3vobed.github.io' },
  { title: 'Technical notes & research', tag: 'GitHub', url: 'https://github.com/d3vobed' },
];

export default function Writing() {
  const posts = getPosts();
  return (
    <main>
      <PageHero title='Writing' meta='Essays · Security writeups · Engineering notes' />
      <section className='nv-section'>
        <div className='nv-container'>
          <span className='nv-label'>Posts</span>
          <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--nv-line)' }}>
            {posts.map(p => (
              <Link
                key={p.slug}
                href={`/writing/${p.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  borderTop: '1px solid var(--nv-line)',
                }}
              >
                <div className='nv-work-meta' style={{ minWidth: '9rem' }}>
                  <span className='nv-tag'>{p.tag}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.75rem)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--nv-muted)', fontSize: '0.92rem', marginTop: '0.4rem' }}>
                    {p.excerpt}
                  </p>
                </div>
                <span className='nv-post-date'>{p.date}</span>
              </Link>
            ))}
            {externalPosts.map(e => (
              <a
                key={e.url}
                href={e.url}
                target='_blank'
                rel='noopener'
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  borderTop: '1px solid var(--nv-line)',
                }}
              >
                <div className='nv-work-meta' style={{ minWidth: '9rem' }}>
                  <span className='nv-tag'>{e.tag}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.75rem)' }}>{e.title}</h3>
                <span className='nv-post-date'>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}