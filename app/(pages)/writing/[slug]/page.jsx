import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Contact, Navbar, Transition } from '@/layout';

import { PageHero } from '../../_components/page-hero';

import '../../../aman.css';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function getPost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { ...data, content };
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
    <Transition>
      <Navbar />
      <PageHero title={post.title} meta={post.tag || 'Post'} image='/images/film-still.png' />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <article className='writing-post'>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </article>
            <p style={{ marginTop: '2rem' }}>
              <a className='mono' href='/writing'>← Back to writing</a>
            </p>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
