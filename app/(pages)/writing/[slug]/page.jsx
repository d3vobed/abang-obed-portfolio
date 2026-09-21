import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PageHero } from '../../_components/page-hero';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function getPost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const date = data.date
    ? typeof data.date === 'string'
      ? data.date
      : data.date.toISOString().slice(0, 10)
    : '';
  return { ...data, date, content, slug };
}

export function generateStaticParams() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ slug: f.replace(/\.md$/, '') }));
}

export default function Post({ params }) {
  const post = getPost(params.slug);
  if (!post) return <p>Not found.</p>;
  return (
    <main>
      <PageHero title={post.title} meta={`${post.date} · ${post.tag || 'Post'}`} />
      <section className='nv-section'>
        <div className='nv-container'>
          {post.image ? (
            <div className='nv-cover'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} />
            </div>
          ) : null}
          <article className='nv-prose'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>
          {post.link ? (
            <p style={{ marginTop: '2rem' }}>
              Originally published on{' '}
              <a className='nv-mono' href={post.link} target='_blank' rel='noopener'>
                {post.source || post.link}
              </a>
              .
            </p>
          ) : null}
          <Link href='/writing' className='nv-back' style={{ display: 'inline-block', marginTop: '2.5rem' }}>
            ← Back to writing
          </Link>
        </div>
      </section>
    </main>
  );
}