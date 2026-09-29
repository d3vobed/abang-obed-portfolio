import Link from 'next/link';

import { TopBar } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description: 'Page not found — Abang Obed',
};

export default function NotFound() {
  return (
    <div className='canvas-bg min-h-screen'>
      <TopBar />
      <main className='mx-auto flex min-h-[70vh] max-w-[800px] flex-col items-center justify-center px-6 text-center'>
        <p className='font-hand text-[clamp(30px,4vw,44px)] leading-none'>looks like this layer is hidden</p>
        <h1 className='cv-pixel-title mt-6'>404</h1>
        <p className='mt-6 max-w-md text-[15px] leading-relaxed text-[#43494b]'>
          The frame you&apos;re looking for was never rendered — or it moved
          somewhere else on the canvas.
        </p>
        <div className='mt-10 flex flex-wrap justify-center gap-5'>
          <Link href='/' className='cv-cta'>
            <span className='cv-cta-icon'>←</span> back home
          </Link>
          <Link href='/contact' className='cv-link self-center'>
            report a dead link
          </Link>
        </div>
      </main>
    </div>
  );
}
