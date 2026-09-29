import {
  ArrowUpRight,
  Clapperboard,
  Crosshair,
  Radar,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Clock } from './topbar';

/* ---------- small decorative atoms ---------- */

export function Sticker({ label, color = 'green', className = '', style }) {
  return (
    <span className={`cv-sticker cv-sticker--${color} ${className}`} style={style}>
      {label}
    </span>
  );
}

export function NoteSticky({ children, className = '', style }) {
  return (
    <div className={`cv-sticky ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Polaroid({ src, alt, caption, className = '', style, width = 360, height = 360 }) {
  return (
    <figure className={`cv-polaroid ${className}`} style={style}>
      <Image src={src} alt={alt} width={width} height={height} className='h-40 w-full object-cover' />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const TAG_ICONS = {
  target: Crosshair,
  radar: Radar,
  shield: Shield,
  clapper: Clapperboard,
};

export function TagBlock({ label, color, icon, className = '' }) {
  const Icon = TAG_ICONS[icon] ?? Crosshair;
  return (
    <span className={`cv-tagblock ${color} ${className}`}>
      {label}
      <span className='grid size-8 place-items-center rounded-sm border border-black/25 bg-white/20'>
        <Icon size={17} aria-hidden />
      </span>
    </span>
  );
}

export function HandLabel({ children, className = '', style }) {
  return (
    <span className={`cv-hand block ${className}`} style={style} aria-hidden>
      {children}
    </span>
  );
}

/** Selection box with 3 extra corner handles (visually Figma-like). */
export function Sel({ children, as: Tag = 'span', className = '', style }) {
  return (
    <Tag className={`cv-sel ${className}`} style={style}>
      {children}
      <span aria-hidden className='absolute -right-[11px] -top-[11px] h-[9px] w-[9px] border-[1.5px] border-[#0099ff] bg-[#ffffff]' />
      <span aria-hidden className='absolute -bottom-[11px] -left-[11px] h-[9px] w-[9px] border-[1.5px] border-[#0099ff] bg-[#ffffff]' />
      <span aria-hidden className='absolute -bottom-[11px] -right-[11px] h-[9px] w-[9px] border-[1.5px] border-[#0099ff] bg-[#ffffff]' />
    </Tag>
  );
}

/** Image framed with ink selection handles. */
export function SelImage({ src, alt, width, height, className = '', imgClassName = '' }) {
  return (
    <div className={`cv-img-sel ${className}`}>
      <span aria-hidden className='cv-h tl' />
      <span aria-hidden className='cv-h tr' />
      <span aria-hidden className='cv-h bl' />
      <span aria-hidden className='cv-h br' />
      <Image src={src} alt={alt} width={width} height={height} className={imgClassName} />
    </div>
  );
}

export function AvatarBubble({ size = 52, className = '' }) {
  return (
    <span
      className={`inline-grid place-items-center rounded-full bg-[#a9dbf5] p-1.5 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src='/images/avatar.jpg'
        alt=''
        width={size}
        height={size}
        className='size-full rounded-full object-cover'
      />
    </span>
  );
}

/* ---------- sections ---------- */

/** Browser-window project card with a slanted colored tab. */
export function BrowserCard({ work, index }) {
  return (
    <article className='cv-browser' id={work.id}>
      <span className='cv-browser-tab' style={{ backgroundColor: work.color, color: work.tabInk || '#111212' }}>
        <svg width='14' height='14' viewBox='0 0 14 14' aria-hidden>
          <path d='M2 9L7 4L12 9' fill='none' stroke='currentColor' strokeWidth='2' />
        </svg>
        {work.tab}
      </span>

      <div className='grid gap-0 md:grid-cols-2'>
        <div className='flex flex-col gap-5 p-6 sm:p-9'>
          <p className='cv-label flex items-center gap-2 text-[#43494b]'>
            <span className='inline-block size-2 rounded-full bg-[#111212]' aria-hidden />
            {work.date}
          </p>
          <div>
            <h3 className='text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.04] tracking-tight'>
              {work.title}
            </h3>
            <p className='cv-label mt-3 text-[#6b7375]'>{work.kind}</p>
          </div>
          <p className='max-w-md text-[15px] leading-relaxed text-[#43494b]'>{work.description}</p>
          <ul className='flex flex-wrap gap-2'>
            {work.stack.map(s => (
              <li key={s} className='font-dmono rounded-md bg-[#ededed] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em]'>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className='relative flex items-center justify-center gap-3 border-t-[1.5px] border-[#111212] p-6 sm:p-9 md:border-l-[1.5px] md:border-t-0'>
          <SelImage
            src={work.image}
            alt={work.alt}
            width={640}
            height={640}
            className='w-full max-w-[380px]'
            imgClassName='w-full object-cover'
          />
          <span
            className='font-dmono absolute right-5 top-5 px-2.5 py-1 text-[11px] tracking-[0.14em]'
            style={{ background: 'var(--cv-ink)', color: 'var(--cv-canvas)' }}
            aria-hidden
          >
            0 – {index + 1}
          </span>
        </div>
      </div>

      <div className='cv-browser-footer'>
        <div className='flex items-center gap-2'>
          <span className='size-2.5 rounded-full border border-[#111212] bg-[#3ec1f3]' aria-hidden />
          <span className='size-2.5 rounded-full border border-[#111212] bg-[#eeb63c]' aria-hidden />
          <span className='size-2.5 rounded-full border border-[#111212] bg-[#e01e5a]' aria-hidden />
        </div>
        <div className='flex flex-wrap items-center gap-5'>
          {work.links.map(l =>
            l.href.startsWith('http') ? (
              <a key={l.label} href={l.href} target='_blank' rel='noreferrer' className='cv-link'>
                {l.label} <ArrowUpRight size={13} aria-hidden />
              </a>
            ) : (
              <Link key={l.label} href={l.href} className='cv-link'>
                {l.label} <ArrowUpRight size={13} aria-hidden />
              </Link>
            ),
          )}
        </div>
      </div>
    </article>
  );
}

/** Dark contact CTA band used at the bottom of light pages. */
export function ContactBand() {
  return (
    <section className='px-4 pb-16 pt-8 sm:px-8'>
      <div className='canvas-dark relative mx-auto max-w-[1200px] overflow-hidden rounded-[22px] px-6 py-16 text-center sm:px-12 sm:py-24'>
        <div className='pointer-events-none absolute -left-10 top-8 hidden rotate-[-8deg] md:block'>
          <Sticker label='no spam, ever' color='green' />
        </div>
        <div className='pointer-events-none absolute -right-6 bottom-10 hidden rotate-[7deg] md:block'>
          <Sticker label='usually replies < 48h' color='sky' />
        </div>

        <p className='cv-label text-white/60'>let’s work together</p>
        <div className='mt-7 inline-block rotate-[-1.5deg]'>
          <Link
            href='/contact'
            className='cv-pixel-title inline-block !text-[clamp(48px,9vw,120px)] transition-transform hover:rotate-1 hover:scale-[1.02]'
            style={{ WebkitTextStroke: '2px #e01e5a' }}
          >
            CONTACT
          </Link>
        </div>
        <p className='font-dmono mx-auto mt-8 max-w-md text-[13px] leading-relaxed tracking-[0.06em] text-white/70'>
          security work · film collaboration · or just to talk —{' '}
          <a href='mailto:obx@wearehackerone.com' className='text-[#3ec1f3] underline underline-offset-4'>
            obx@wearehackerone.com
          </a>
        </p>
      </div>
    </section>
  );
}

/** Footer — socials + meta. */
export function SiteFooter({ dark = false }) {
  const socials = [
    ['GitHub', 'https://github.com/d3vobed'],
    ['LinkedIn', 'https://www.linkedin.com/in/obx03'],
    ['Medium', 'https://medium.com/@obx03'],
    ['X / Twitter', 'https://x.com/obedeee_Jr'],
    ['Instagram', 'https://www.instagram.com/obed.eee'],
    ['YouTube', 'https://www.youtube.com/@techcinemaresyst'],
    ['Vimeo', 'https://vimeo.com/obx03'],
    ['IMDb', 'https://www.imdb.com/name/nmobedabang'],
    ['TMDB', 'https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories'],
    ['Letterboxd', 'https://letterboxd.com/obx03'],
    ['TryHackMe', 'https://tryhackme.com/p/obx03'],
    ['HackTheBox', 'https://www.hackthebox.com/'],
  ];

  return (
    <footer
      className={`border-t px-5 py-10 sm:px-10 ${dark ? 'canvas-dark border-white/10' : 'bg-white'}`}
      style={dark ? {} : { borderColor: 'var(--cv-line)' }}
    >
      <div className='mx-auto flex max-w-[1200px] flex-col gap-7'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <p className='cv-label'>
            <span className={dark ? 'text-white/50' : 'text-[#9aa39f]'}>location</span>{' '}
            <span className={dark ? 'text-white' : 'text-[#111212]'}>Abuja, Nigeria</span>
          </p>
          <p className='cv-label flex items-center gap-2'>
            <span className={dark ? 'text-white/50' : 'text-[#9aa39f]'}>local time</span>
            <Clock dark={dark} />
          </p>
          <p className='cv-label'>
            <span className={dark ? 'text-white/50' : 'text-[#9aa39f]'}>status</span>{' '}
            <span className={dark ? 'text-white' : 'text-[#111212]'}>open to work</span>
          </p>
        </div>

        <nav aria-label='Social links' className='flex flex-wrap gap-x-5 gap-y-2.5'>
          {socials.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noreferrer'
              className={`cv-sweep font-dmono text-[12px] uppercase tracking-[0.12em] ${
                dark ? 'text-white/70 hover:text-white' : 'text-[#43494b] hover:text-[#111212]'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <p className={`font-dmono text-[11px] uppercase tracking-[0.14em] ${dark ? 'text-white/40' : 'text-[#9aa39f]'}`}>
          © {new Date().getFullYear()} Abang Obed — site by abang obed
        </p>
      </div>
    </footer>
  );
}
