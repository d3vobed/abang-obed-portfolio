import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { SiteFooter, TopBar } from '@/layout';

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
    .filter(f => f.endsWith('.md'))
    .map(f => ({ slug: f.replace(/\.md$/, '') }));
}

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Post',
};

export default function Post({ params }) {
  const post = getPost(params.slug);
  if (!post) {
    return (
      <div className='canvas-bg min-h-screen'>
        <TopBar />
        <main className='mx-auto max-w-[800px] px-6 py-24 text-center'>
          <h1 className='cv-pixel-title'>404</h1>
          <p className='mt-8 text-[#43494b]'>This note doesn&apos;t exist on the canvas.</p>
          <Link href='/writing' className='cv-link mt-8 inline-flex'>
            ← back to writing
          </Link>
        </main>
      </div>
    );
  }

  const date = post.date
    ? typeof post.date === 'string'
      ? post.date
      : post.date.toISOString().slice(0, 10)
    : '';

  return (
    <div className='canvas-bg min-h-screen'>
      <TopBar />

      <main className='mx-auto max-w-[820px] px-4 pb-10 pt-14 sm:px-8'>
        <div className='text-center'>
          <p className='cv-label text-[#9aa39f]'>
            {post.tag || 'Post'} {date ? `· ${date}` : ''}
          </p>
          <div className='mt-6 flex justify-center'>
            <span className='cv-sel px-4 py-2'>
              <h1 className='text-[clamp(26px,4vw,44px)] font-bold leading-[1.1] tracking-tight'>
                {post.title}
              </h1>
            </span>
          </div>
        </div>

        {post.image ? (
          <div className='mt-14 flex justify-center'>
            <div className='cv-img-sel max-w-[680px]'>
              <span aria-hidden className='cv-h tl' />
              <span aria-hidden className='cv-h tr' />
              <span aria-hidden className='cv-h bl' />
              <span aria-hidden className='cv-h br' />
              <Image
                src={post.image}
                alt={post.title}
                width={960}
                height={480}
                className='w-full object-cover'
              />
            </div>
          </div>
        ) : null}

        <article className='cv-prose mt-14 rounded-[18px] border-[1.5px] border-[#111212] bg-white p-7 sm:p-12'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>

        {post.link ? (
          <p className='font-dmono mt-8 text-center text-[13px] text-[#43494b]'>
            Originally published on{' '}
            <a href={post.link} target='_blank' rel='noopener' className='text-[#0099ff] underline underline-offset-4'>
              {post.source || post.link}
            </a>
            .
          </p>
        ) : null}

        <div className='mt-12 flex justify-center'>
          <Link href='/writing' className='cv-link'>
            ← back to writing
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
