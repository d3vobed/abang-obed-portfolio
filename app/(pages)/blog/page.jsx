import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

import { externalWriting } from '@/data';
import { ContactBand, SectionHead, SiteFooter } from '@/layout';

import '../../canvas.css';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function getPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf8');
      const { data } = matter(raw);
      const date = data.date
        ? typeof data.date === 'string'
          ? data.date
          : data.date.toISOString().slice(0, 10)
        : f.slice(0, 10);
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title || f.replace(/\.md$/, '').replace(/[-_]/g, ' '),
        date,
        tag: data.tag || 'Post',
        excerpt: data.excerpt || '',
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const metadata = {
  title: 'Blog',
  description: 'Writeups, research notes and essays by Abang Obed.',
};

export default function Blog() {
  const posts = getPosts();

  return (
    <main>
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead
            kicker='BLOG'
            title='Writing'
            sub='Security writeups, research notes and the occasional film essay. Drop a markdown file in content/blog and it becomes a post.'
          />

          {posts.length === 0 ? (
            <p style={{ color: 'var(--ink-soft)' }}>No posts yet. The markdown folder is listening.</p>
          ) : (
            <div className='cv-postlist'>
              {posts.map((p) => (
                <Link href={`/blog/${p.slug}`} key={p.slug} className='cv-postrow'>
                  <span className='date'>{p.date}</span>
                  <span>
                    <h3>{p.title}</h3>
                    {p.excerpt ? <p>{p.excerpt}</p> : null}
                  </span>
                  <span className='tag'>{p.tag}</span>
                </Link>
              ))}
            </div>
          )}

          <div style={{ marginTop: 42 }}>
            <p className='cv-kicker'>ELSEWHERE</p>
            <div className='cv-presets' style={{ marginTop: 14 }}>
              {externalWriting.map((w) => (
                <a key={w.url} href={w.url} target='_blank' rel='noopener' className='cv-preset'>
                  <span className='go'>↗</span>
                  <span className='idx'>{w.tag}</span>
                  <h3 style={{ fontSize: 17 }}>{w.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
