import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
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
        image: data.image || '',
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
    <Transition>
      <Navbar />
      <PageHero title='Writing' meta='Essays · Security writeups · Engineering notes' image='/images/film-still2.png' />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Posts</h2>
            <div className='writing-list'>
              {posts.map(p => (
                <Link key={p.slug} href={`/writing/${p.slug}`} className='writing-row'>
                  {p.image ? (
                    <div className='writing-thumb'>
                      <Image src={p.image} alt={p.title} width={240} height={135} />
                    </div>
                  ) : null}
                  <div className='writing-row-body'>
                    <span className='source-tag'>{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p className='writing-excerpt'>{p.excerpt}</p>
                  </div>
                  <span className='mono writing-date'>{p.date}</span>
                </Link>
              ))}

              {externalPosts.map(e => (
                <a key={e.url} href={e.url} target='_blank' rel='noopener' className='writing-row'>
                  <div className='writing-row-body'>
                    <span className='source-tag'>{e.tag}</span>
                    <h3>{e.title}</h3>
                  </div>
                  <span className='mono writing-date'>↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
