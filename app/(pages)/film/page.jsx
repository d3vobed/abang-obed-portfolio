import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { film } from '@/data';
import {
  ContactBand,
  HandLabel,
  NoteSticky,
  Polaroid,
  SelImage,
  SiteFooter,
  TopBar,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Film',
  description:
    'Films by Abang Obed — Change (A Single Note. A Hundred Stories), a 2026 Nigerian short film, plus development work under Tech Cinema.',
};

export default function Film() {
  return (
    <div className='canvas-bg min-h-screen'>
      <TopBar />

      <main className='mx-auto max-w-[1200px] px-4 pb-10 pt-14 sm:px-8'>
        <div className='text-center'>
          <HandLabel className='-rotate-3'>writer · director · tech cinema</HandLabel>
          <h1 className='cv-pixel-title mt-6 !text-[clamp(56px,10vw,130px)]'>Film</h1>
          <p className='cv-label mt-8 inline-flex items-center gap-3 text-[#6b7375]'>
            <span className='cv-dot' aria-hidden />
            Released — 2026
          </p>
        </div>

        {/* feature */}
        <article className='cv-browser mt-16'>
          <span className='cv-browser-tab' style={{ backgroundColor: '#eeb63c' }}>
            <svg width='14' height='14' viewBox='0 0 14 14' aria-hidden>
              <path d='M2 9L7 4L12 9' fill='none' stroke='currentColor' strokeWidth='2' />
            </svg>
            Now Showing
          </span>

          <div className='grid md:grid-cols-2'>
            <div className='flex flex-col gap-6 p-6 sm:p-9'>
              <h2 className='text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.05] tracking-tight'>
                {film.title}
                <span className='text-[#6b7375]'> ({film.subtitle})</span>
              </h2>
              <p className='max-w-md text-[15px] leading-relaxed text-[#43494b]'>
                {film.synopsis}
              </p>

              <dl className='grid grid-cols-2 gap-x-8 gap-y-3 sm:max-w-sm'>
                {film.meta.map(([k, v]) => (
                  <div key={k} className='flex items-baseline justify-between gap-3 border-b border-dashed border-[#c9cdc9] pb-2'>
                    <dt className='cv-label text-[#9aa39f]'>{k}</dt>
                    <dd className='font-dmono text-[13px] font-medium'>{v}</dd>
                  </div>
                ))}
              </dl>

              <p className='cv-label text-[#6b7375]'>Written & directed by Abang Obed</p>
            </div>

            <div className='flex items-center justify-center border-t-[1.5px] border-[#111212] p-6 sm:p-9 md:border-l-[1.5px] md:border-t-0'>
              <SelImage
                src='/images/change-poster.jpg'
                alt='Change — official poster'
                width={640}
                height={960}
                className='w-full max-w-[340px]'
                imgClassName='w-full object-cover'
              />
            </div>
          </div>

          <div className='cv-browser-footer'>
            <div className='flex items-center gap-2'>
              <span className='size-2.5 rounded-full border border-[#111212] bg-[#eeb63c]' aria-hidden />
              <span className='cv-label hidden text-[#6b7375] sm:block'>96 studios · a debut short-film</span>
            </div>
            <div className='flex flex-wrap items-center gap-5'>
              {film.links.map(l => (
                <a key={l.label} href={l.href} target='_blank' rel='noreferrer' className='cv-link'>
                  {l.label} <ArrowUpRight size={13} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </article>

        {/* stills */}
        <section className='mt-24'>
          <div className='flex flex-wrap items-end justify-between gap-6'>
            <div>
              <HandLabel className='-rotate-2'>frames from the field</HandLabel>
              <h2 className='cv-pixel-title mt-4 !text-[clamp(36px,6vw,76px)]'>Stills</h2>
            </div>
            <NoteSticky className='rotate-2'>
              Shot in Nigeria — one choice echoing across many lives.
            </NoteSticky>
          </div>

          <div className='mt-12 grid gap-10 sm:grid-cols-3'>
            {film.stills.map((s, i) => (
              <Polaroid
                key={s.src}
                src={s.src}
                alt={s.caption}
                caption={s.caption}
                className={i % 2 === 0 ? 'rotate-[-2.5deg]' : 'rotate-[2.5deg]'}
                width={560}
                height={320}
              />
            ))}
          </div>
        </section>

        {/* cast */}
        <section className='mt-24'>
          <h2 className='cv-pixel-title !text-[clamp(36px,6vw,76px)]'>Cast</h2>
          <div className='mt-10 flex flex-wrap gap-3.5'>
            {film.cast.map(([name, role], i) => (
              <span
                key={name}
                className='cv-sticker !normal-case'
                style={{
                  background: ['#aee3c1', '#a9dbf5', '#f0a03c', '#f7dc94', '#e01e5a'][i % 5],
                  color: i % 5 === 4 ? '#fff' : undefined,
                }}
              >
                {name} — {role}
              </span>
            ))}
          </div>
        </section>

        {/* tech cinema */}
        <section className='cv-dark mt-24 grid items-center gap-8 rounded-[22px] p-8 sm:grid-cols-[180px_1fr] sm:p-12'>
          <div className='cv-img-sel mx-auto w-40'>
            <span aria-hidden className='cv-h tl' />
            <span aria-hidden className='cv-h tr' />
            <span aria-hidden className='cv-h bl' />
            <span aria-hidden className='cv-h br' />
            <Image
              src='/images/film-char.png'
              alt='Tech Cinema character art'
              width={320}
              height={320}
              className='w-full object-cover'
            />
          </div>
          <div>
            <p className='cv-label text-white/60'>the umbrella</p>
            <h2 className='cv-pixel-title mt-3 !text-[clamp(28px,4.4vw,54px)] !text-white'>
              Tech Cinema
            </h2>
            <p className='mt-5 max-w-lg text-[15px] leading-relaxed text-white/70'>
              My film work lives under{' '}
              <a
                href='https://www.youtube.com/@techcinemaresyst'
                target='_blank'
                rel='noreferrer'
                className='text-[#3ec1f3] underline underline-offset-4'
              >
                Tech Cinema on YouTube
              </a>{' '}
              — where the shorts, behind-the-scenes process and visual experiments
              are published.
            </p>
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
