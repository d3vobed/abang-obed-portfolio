import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Bug,
  Camera,
  Cpu,
  Heart,
  Lock,
  Medal,
  Sparkles,
  Terminal,
  Trophy,
  Wifi,
} from 'lucide-react';
import Link from 'next/link';

import { profile, socialMedias, tickerWords } from '@/data';

import { Clock } from './topbar';

/* ---------- small canvas pieces ---------- */

export function Sticker({ children, color = 'sky', className = '', style }) {
  return (
    <span className={`cv-sticker cv-sticker--${color} ${className}`} style={style}>
      {children}
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

export function Polaroid({ src, caption, className = '', style }) {
  return (
    <figure className={`cv-polaroid ${className}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={caption || 'polaroid'} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function HandLabel({ children, className = '', style }) {
  return (
    <span className={`cv-hand-label ${className}`} style={style}>
      {children}
    </span>
  );
}

export function TagBlock({ children, title, className = '' }) {
  return (
    <div className={`cv-honor ${className}`}>
      <span className='medal cv-tile--paper'>
        <Sparkles size={15} />
      </span>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function Sel({ children, className = '', style }) {
  return (
    <div className={`cv-sel ${className}`} style={style}>
      <span className='cv-sel-handle tl' />
      <span className='cv-sel-handle tr' />
      <span className='cv-sel-handle bl' />
      <span className='cv-sel-handle br' />
      {children}
    </div>
  );
}

export function AvatarBubble({ size = 46, className = '', style }) {
  return (
    <span
      className={`cv-avatar ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/images/avatar.jpg' alt='obx03' />
    </span>
  );
}

/* ---------- futc numbered section head ---------- */

export function SectionHead({ kicker, title, sub, right = null }) {
  return (
    <div className='cv-head'>
      <div>
        <p className='cv-kicker'>{kicker}</p>
        <h2 className='cv-title'>{title}</h2>
        {sub ? <p className='cv-sub'>{sub}</p> : null}
      </div>
      {right ? <div className='cv-tagline'>{right}</div> : null}
    </div>
  );
}

/* ---------- floating dev-object tiles ---------- */

const ICONS = {
  camera: Camera,
  terminal: Terminal,
  bug: Bug,
  lock: Lock,
  wifi: Wifi,
  cpu: Cpu,
};

export function FloatTiles({ tiles = [] }) {
  return (
    <>
      {tiles.map((t, i) => {
        const Icon = ICONS[t.icon] || Sparkles;
        return (
          <span
            key={i}
            className={`cv-float cv-tile cv-tile--${t.color}`}
            style={{ position: 'absolute', zIndex: 1, ...t.style }}
            aria-hidden='true'
          >
            <Icon size={19} />
          </span>
        );
      })}
    </>
  );
}

/* ---------- ticker ---------- */

export function Ticker() {
  const seq = [...tickerWords, ...tickerWords];
  return (
    <div className='cv-ticker' aria-hidden='true'>
      <div className='cv-ticker-track'>
        {seq.map((w, i) => (
          <span key={i}>
            {w} <i>+</i>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- presets ---------- */

export function PresetCard({ idx, title, body, stack, href = null, dark = false }) {
  const inner = (
    <>
      <span className='go'>
        <ArrowUpRight size={17} />
      </span>
      <span className='idx'>{idx}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <span className='stack'>{stack}</span>
    </>
  );

  return href ? (
    <Link href={href} className={`cv-preset ${dark ? 'cv-preset--dark' : ''}`}>
      {inner}
    </Link>
  ) : (
    <div className={`cv-preset ${dark ? 'cv-preset--dark' : ''}`}>{inner}</div>
  );
}

/* ---------- honors ---------- */

const HONOR_ICONS = [Medal, Trophy, Award, Sparkles, Medal, Trophy];
const HONOR_BG = {
  pink: 'cv-tile--pink',
  yellow: 'cv-tile--yellow',
  green: 'cv-tile--green',
  sky: 'cv-tile--sky',
  orange: 'cv-tile--orange',
  paper: 'cv-tile--paper',
};

export function Honors({ honors = [] }) {
  return (
    <div className='cv-honors'>
      {honors.map((h, i) => {
        const Icon = HONOR_ICONS[i % HONOR_ICONS.length];
        return (
          <div className='cv-honor' key={h.title}>
            <span className={`medal cv-tile ${HONOR_BG[h.color] || HONOR_BG.paper}`}>
              <Icon size={15} />
            </span>
            <div>
              <h4>{h.title}</h4>
              <p>{h.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- contact band + footer ---------- */

export function ContactBand() {
  return (
    <section className='cv-section'>
      <div className='wrap' style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
        <HandLabel>got something interesting?</HandLabel>
        <Sel>
          <p className='cv-title' style={{ fontSize: 'clamp(22px, 4vw, 40px)' }}>
            Let&apos;s build something
            <br />
            worth talking about.
          </p>
        </Sel>
        <Link href='/contact' className='cv-btn cv-btn--sky'>
          <Heart size={14} />
          Contact me
        </Link>
        <span className='cv-clock'>{profile.email}</span>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className='cv-footer'>
      <div className='wrap'>
        <div className='cv-footer-grid'>
          <div>
            <p className='dep' style={{ fontSize: 20, margin: '0 0 8px' }}>
              obx03<span style={{ color: 'var(--red)' }}>.tech</span>
            </p>
            <p className='foot-note'>
              Built with curiosity. Security on one screen, a film timeline on the other.
            </p>
          </div>
          <div className='foot-links'>
            <Link href='/'>Home</Link>
            <Link href='/works/film'>Film Gallery</Link>
            <Link href='/works/cybersecurity'>Cybersecurity</Link>
            <Link href='/works/devops'>Developer Operations</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          <div className='foot-links'>
            {socialMedias.slice(0, 6).map((s) => (
              <a href={s.href} key={s.title} target='_blank' rel='noopener'>
                {s.title}
              </a>
            ))}
          </div>
        </div>
        <div className='cv-foot-meta'>
          <Clock />
          <span>{profile.base}</span>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}

export { ArrowDown };
