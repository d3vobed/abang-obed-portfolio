import fs from 'fs';
import matter from 'gray-matter';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import path from 'path';

import { externalWriting } from '@/data';
import { ContactBand, HandLabel, NoteSticky, SiteFooter, TopBar } from '@/layout';

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
  description:
    'Essays, security writeups and engineering notes by Abang Obed — on the blog, Medium and GitHub.',
};

export default function Writing() {
  const posts = getPosts();

  return (
    <div className='canvas-bg min-h-screen'>
      <TopBar />

      <main className='mx-auto max-w-[1200px] px-4 pb-10 pt-14 sm:px-8'>
        <div className='text-center'>
          <HandLabel className='-rotate-3'>notes from the desk</HandLabel>
          <h1 className='cv-pixel-title mt-6 !text-[clamp(56px,10vw,130px)]'>Writing</h1>
          <div className='mt-8 flex justify-center'>
            <NoteSticky className='rotate-[1.5deg]'>
              Essays, security writeups and engineering notes — some live here, the
              rest on Medium and GitHub.
            </NoteSticky>
          </div>
        </div>

        {/* on-site posts */}
        <section className='mt-20'>
          <p className='cv-label text-[#9aa39f]'>on this canvas — {posts.length} posts</p>
          <div className='mt-6'>
            {posts.map((p, i) => (
              <article key={p.slug} className='border-t-[1.5px] border-[#111212] last:border-b-[1.5px]'>
                <Link
                  href={`/writing/${p.slug}`}
                  className='group grid items-center gap-3 py-8 transition-colors hover:bg-white md:grid-cols-[110px_1fr_auto] md:gap-8'
                >
                  <p className='cv-label text-[#9aa39f]'>
                    <span className='font-pixel mr-2 text-[15px] font-bold tracking-normal text-[#111212]'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {p.date}
                  </p>
                  <div>
                    <h2 className='text-[clamp(22px,2.6vw,34px)] font-bold leading-tight tracking-tight group-hover:underline group-hover:decoration-[#0099ff] group-hover:underline-offset-4'>
                      {p.title}
                    </h2>
                    {p.excerpt ? (
                      <p className='mt-2 max-w-2xl text-[15px] leading-relaxed text-[#43494b]'>
                        {p.excerpt}
                      </p>
                    ) : null}
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='font-dmono rounded-md bg-[#ededed] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em]'>
                      {p.tag}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className='hidden text-[#111212] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block'
                      aria-hidden
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* external */}
        <section className='mt-24'>
          <HandLabel className='-rotate-2'>elsewhere</HandLabel>
          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            {externalWriting.map(e => (
              <a
                key={e.title}
                href={e.href}
                target='_blank'
                rel='noreferrer'
                className='cv-mini group flex flex-col p-7'
              >
                <p className='cv-label text-[#6b7375]'>{e.tag}</p>
                <h2 className='mt-4 text-[20px] font-bold leading-snug tracking-tight group-hover:underline group-hover:decoration-[#0099ff] group-hover:underline-offset-4'>
                  {e.title}
                </h2>
                <p className='mt-2.5 text-[15px] leading-relaxed text-[#43494b]'>{e.excerpt}</p>
                <span className='cv-link mt-5 self-start'>
                  read <ArrowUpRight size={13} aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <div className='mt-20'>
        <ContactBand />
      </div>
      <SiteFooter />
    </div>
  );
}
