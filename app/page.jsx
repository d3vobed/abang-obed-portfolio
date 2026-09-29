import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { heroStickers, miniWorks, skillTags, tickerWords, works } from '@/data';
import {
  AvatarBubble,
  BrowserCard,
  Clock,
  ContactBand,
  HandLabel,
  NoteSticky,
  Polaroid,
  Sel,
  SiteFooter,
  Sticker,
  TagBlock,
  TopBar,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home',
  description:
    'Abang Obed — Security Engineer, Researcher & Filmmaker based in Abuja, Nigeria. Security engineering, offensive research and cinema on one canvas.',
};

export default function Home() {
  return (
    <div className='canvas-bg min-h-screen'>
      <TopBar />

      <main>
        {/* ================= HERO ================= */}
        <section className='relative overflow-hidden px-4 pb-10 pt-8 sm:px-8'>
          {/* floating stickers — desktop */}
          <div className='pointer-events-none absolute left-[4%] top-[24%] hidden -rotate-6 lg:block'>
            <Sticker {...heroStickers[0]} />
          </div>
          <div className='pointer-events-none absolute right-[6%] top-[18%] hidden rotate-[8deg] lg:block'>
            <Sticker {...heroStickers[1]} />
          </div>
          <div className='pointer-events-none absolute bottom-[26%] left-[9%] hidden rotate-3 lg:block'>
            <Sticker {...heroStickers[2]} />
          </div>
          <div className='pointer-events-none absolute bottom-[15%] right-[10%] hidden -rotate-3 lg:block'>
            <Sticker {...heroStickers[3]} />
          </div>
          <div className='pointer-events-none absolute left-[30%] top-[6%] hidden -rotate-2 xl:block'>
            <Sticker {...heroStickers[4]} />
          </div>

          <AvatarBubble className='absolute right-[13%] top-[38%] hidden lg:inline-grid' />
          <AvatarBubble size={44} className='absolute bottom-[24%] left-[16%] hidden xl:inline-grid' />

          <div className='mx-auto max-w-[1200px] text-center'>
            <div className='flex justify-center'>
              <Clock />
            </div>

            <HandLabel className='mt-10'>my name is</HandLabel>

            <div className='mt-8 flex justify-center'>
              <Sel
                as='span'
                className='cv-pixel-title px-6 py-2 !text-[clamp(72px,15vw,190px)]'
              >
                OBED
              </Sel>
            </div>

            <p className='cv-label mt-12 inline-flex items-center gap-3'>
              <span className='cv-dot' aria-hidden />
              {`Available for security & film projects`}
            </p>

            <h1 className='mx-auto mt-14 max-w-[760px] text-[clamp(30px,4.6vw,54px)] font-bold leading-[1.12] tracking-tight'>
              I probe security systems{' '}
              <span className='inline-grid h-[0.95em] w-[0.95em] translate-y-[0.1em] place-items-center rounded-md bg-[#29a56c] align-middle text-white'>
                <Asterisk size={26} aria-hidden />
              </span>{' '}
              to understand them — and make films{' '}
              <span className='inline-grid h-[0.95em] w-[0.95em] translate-y-[0.1em] place-items-center rounded-md bg-[#e01e5a] align-middle text-white'>
                <ClapIcon />
              </span>{' '}
              about people.
            </h1>

            <div className='mt-12 flex justify-center'>
              <Link href='/#works' className='cv-cta'>
                <span className='cv-cta-icon'>
                  <ArrowDown size={15} aria-hidden />
                </span>
                featured work
              </Link>
            </div>
          </div>
        </section>

        {/* ================= TICKER ================= */}
        <div className='cv-ticker mt-6' aria-hidden>
          <div className='cv-ticker-track'>
            {[...tickerWords, ...tickerWords].map((w, i) => (
              <span key={i} className='cv-label flex items-center gap-12 whitespace-nowrap'>
                {w} <Asterisk size={14} aria-hidden />
              </span>
            ))}
          </div>
        </div>

        {/* ================= ABOUT TEASER ================= */}
        <section className='relative px-4 py-24 sm:px-8 sm:py-32'>
          <svg
            className='pointer-events-none absolute left-0 top-0 w-full'
            viewBox='0 0 1440 120'
            fill='none'
            aria-hidden
          >
            <path
              d='M-20 110 C 360 -40, 1080 -40, 1460 110'
              stroke='#c9cdc9'
              strokeWidth='1.5'
              strokeDasharray='4 6'
            />
          </svg>

          <div className='mx-auto max-w-[1200px]'>
            <HandLabel className='rotate-[-4deg] pl-2'>about me!</HandLabel>

            <div className='mt-10 flex justify-center'>
              <Sel as='span' className='px-4 py-1'>
                <span className='text-[clamp(22px,2.6vw,34px)] font-semibold tracking-tight'>
                  what&apos;s up
                </span>
              </Sel>
            </div>

            <div className='relative mt-16 grid items-center gap-12 lg:grid-cols-[220px_1fr_220px]'>
              <div className='hidden lg:block'>
                <Polaroid
                  src='/images/avatar.jpg'
                  alt='Pixel portrait of Abang Obed'
                  caption='the operator'
                  className='-rotate-6'
                  width={400}
                  height={400}
                />
              </div>

              <p className='text-center text-[clamp(26px,3.4vw,46px)] font-semibold leading-[1.22] tracking-tight'>
                A security engineer{' '}
                <span className='inline-block h-[0.9em] w-[0.9em] translate-y-[0.08em] overflow-hidden rounded-sm align-middle'>
                  <Image
                    src='/images/film-char.png'
                    alt=''
                    width={64}
                    height={64}
                    className='size-full object-cover'
                  />
                </span>{' '}
                who studies how systems behave —{' '}
                <span className='inline-block h-[0.9em] w-[0.9em] translate-y-[0.08em] rounded-sm bg-[#eeb63c] align-middle' />{' '}
                and a filmmaker who studies why people do.
              </p>

              <div className='hidden lg:block'>
                <Polaroid
                  src='/images/film-still1.png'
                  alt='Still from the short film Change'
                  caption='on set — change (2026)'
                  className='ml-auto rotate-6'
                  width={480}
                  height={480}
                />
              </div>
            </div>

            <div className='mt-16 flex flex-wrap items-center justify-center gap-3'>
              {skillTags.map(t => (
                <TagBlock key={t.label} {...t} />
              ))}
            </div>

            <p className='mx-auto mt-14 max-w-xl text-center text-[15px] leading-relaxed text-[#43494b]'>
              Based in Abuja, Nigeria. Six years of practical work across security
              operations, offensive research and systems — carried alongside a life
              in cinema. The rest of the time I make films about people.
            </p>
          </div>
        </section>

        {/* ================= FEATURED WORKS ================= */}
        <section id='works' className='px-4 pb-24 pt-6 sm:px-8'>
          <div className='mx-auto max-w-[1200px]'>
            <div className='text-center'>
              <h2 className='cv-pixel-title'>
                Featured
                <br />
                Works
              </h2>
              <div className='mt-10 flex justify-center'>
                <NoteSticky className='rotate-[-2.5deg]'>
                  A showcase of recent projects — security engineering, research and
                  film. Some are live, some still in progress.
                </NoteSticky>
              </div>
            </div>

            <div className='mt-16 flex flex-col gap-14'>
              {works.map((w, i) => (
                <BrowserCard key={w.id} work={w} index={i} />
              ))}
            </div>

            <div className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
              {miniWorks.map(m =>
                m.external ? (
                  <a key={m.title} href={m.href} target='_blank' rel='noreferrer' className='cv-mini'>
                    <MiniCard {...m} />
                  </a>
                ) : (
                  <Link key={m.title} href={m.href} className='cv-mini'>
                    <MiniCard {...m} />
                  </Link>
                ),
              )}
            </div>

            <div className='mt-14 flex justify-center'>
              <Link href='/about' className='cv-cta'>
                <span className='cv-cta-icon'>
                  <ArrowUpRight size={15} aria-hidden />
                </span>
                the full story
              </Link>
            </div>
          </div>
        </section>

        {/* ================= BLOB QUOTE ================= */}
        <section className='px-4 pb-24 sm:px-8'>
          <div className='mx-auto grid max-w-[1000px] items-center gap-10 sm:grid-cols-[220px_1fr]'>
            <svg viewBox='0 0 200 200' className='cv-blob mx-auto w-44 sm:w-52' aria-hidden>
              <path
                fill='#29a56c'
                d='M46.9,-63.4C61.1,-53.4,72.7,-38.6,77.4,-21.6C82.1,-4.6,79.9,14.6,71.3,29.8C62.7,45,47.7,56.2,31.3,62.4C14.9,68.6,-2.9,69.8,-19.5,64.9C-36.1,60,-51.5,49,-62.3,34.2C-73.1,19.4,-79.3,0.8,-76.3,-16.2C-73.3,-33.2,-61.1,-48.6,-46.2,-58.6C-31.3,-68.6,-13.7,-73.2,2.2,-76C18.1,-78.8,32.7,-73.4,46.9,-63.4Z'
                transform='translate(100 100)'
              />
              <text
                x='100'
                y='96'
                textAnchor='middle'
                fill='#fff'
                style={{ font: '600 15px var(--font-hand), cursive' }}
              >
                security
              </text>
              <text
                x='100'
                y='116'
                textAnchor='middle'
                fill='#fff'
                style={{ font: '600 15px var(--font-hand), cursive' }}
              >
                × cinema
              </text>
            </svg>

            <blockquote className='text-[clamp(20px,2.4vw,30px)] font-semibold leading-snug tracking-tight'>
              “Every system has a narrator, an audience, and someone quietly
              rewriting the ending. Security is a story problem — I work it from
              both sides of the page.”
            </blockquote>
          </div>
        </section>

        <ContactBand />
      </main>

      <SiteFooter />
    </div>
  );
}

function MiniCard({ title, meta, image }) {
  return (
    <div className='flex h-full flex-col'>
      <div className='relative aspect-[4/3] w-full overflow-hidden border-b-[1.5px] border-[#111212] bg-white'>
        <Image src={image} alt={`${title} — ${meta}`} fill className='object-cover' />
      </div>
      <div className='flex items-center justify-between gap-3 p-4'>
        <div>
          <h3 className='text-[16px] font-bold leading-tight'>{title}</h3>
          <p className='cv-label mt-1.5 text-[#6b7375]'>{meta}</p>
        </div>
        <ArrowUpRight size={17} className='flex-none text-[#111212]' aria-hidden />
      </div>
    </div>
  );
}

function ClapIcon() {
  return (
    <svg viewBox='0 0 24 24' className='size-3/5' fill='currentColor' aria-hidden>
      <path d='M3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Zm19-4.2-1.1 3.1L15 7.6l1.2-3.5L22 5.8Zm-6.9.6-1.1 3.2L8 8.1l1.2-3.4 5.9 1.7Zm-6.8-.5L7.2 9 1.4 7.4l1-2.9a1 1 0 0 1 1.3-.6L8.3 5.9Z' />
    </svg>
  );
}
