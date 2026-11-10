import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Clock, SiteFooter } from '@/layout';

import '../../../canvas.css';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function getPost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { ...data, content, slug };
}

export function generateStaticParams() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ slug: f.replace(/\.md$/, '') }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title || params.slug,
    description: post.excerpt || 'Blog post by Abang Obed.',
  };
}

export default function Post({ params }) {
  const post = getPost(params.slug);
  if (!post) {
    return (
      <main>
        <section className='cv-section'>
          <div className='wrap'>
            <p className='cv-title'>Post not found.</p>
            <Link href='/blog' className='cv-btn' style={{ marginTop: 16, display: 'inline-flex' }}>
              ← Back to blog
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  const date = post.date
    ? typeof post.date === 'string'
      ? post.date
      : post.date.toISOString().slice(0, 10)
    : '';

  return (
    <main>
      <section className='cv-section' style={{ borderTop: 0 }}>
        <div className='wrap'>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
            <Link href='/blog' className='cv-btn'>
              ← Blog
            </Link>
            <Clock />
          </div>
          <p className='cv-kicker'>{post.tag || 'Post'}</p>
          <h1 className='cv-title' style={{ maxWidth: 820 }}>
            {post.title || post.slug}
          </h1>
          {date ? <p className='cv-sub'>{date}</p> : null}
          <div className='cv-prose' style={{ marginTop: 38 }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
