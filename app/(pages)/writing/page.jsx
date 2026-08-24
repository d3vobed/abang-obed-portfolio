import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

import { Contact, Navbar, Transition } from '@/layout';

import { PageHero } from '../_components/page-hero';

import '../../aman.css';

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

export default function Writing() {
  const posts = getPosts();
  return (
    <Transition>
      <Navbar />
      <PageHero title='Writing' meta='Essays · Security writeups · Engineering notes' image='/images/film-still.png' />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Posts</h2>
            <div className='writing-list'>
              {posts.map(p => (
                <Link key={p.slug} href={`/writing/${p.slug}`} className='writing-row'>
                  <div>
                    <span className='source-tag'>{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p className='writing-excerpt'>{p.excerpt}</p>
                  </div>
                  <span className='mono writing-date'>{p.date}</span>
                </Link>
              ))}
              {posts.length === 0 ? <p>No posts yet — drop a .md file in content/blog.</p> : null}
            </div>

            <h2 className='section-title' style={{ marginTop: '3rem' }}>Elsewhere</h2>
            <ul className='writing-elsewhere'>
              <li>
                <a href='https://medium.com/@obx03' target='_blank' rel='noopener'>Medium — essays &amp; writeups</a>
              </li>
              <li>
                <a href='https://d3vobed.github.io' target='_blank' rel='noopener'>Older writeups (d3vobed.github.io)</a>
              </li>
            </ul>
            <p className='writing-note'>
              To publish: add a Markdown file to <code>content/blog/</code> with frontmatter
              (title, date, tag, excerpt) and redeploy.
            </p>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
