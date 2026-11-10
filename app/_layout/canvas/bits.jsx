import {
  Activity,
  ArrowUpRight,
  Bug,
  Camera,
  Cpu,
  Film,
  Flag,
  Heart,
  Lock,
  Medal,
  Mic,
  Monitor,
  Navigation,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Wifi,
} from 'lucide-react';
import Link from 'next/link';

import { profile, socialMedias } from '@/data';

import { Clock } from './topbar';

/* ---------- small canvas pieces ---------- */

export function Sticker({ children, color = 'sky', className = '', style }) {
  return (
    <span className={`cv-sticker cv-sticker--${color} ${className}`} style={style}>
      {children}
    </span>
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

/* ---------- preset frame (the FUTCFILM box, my own version) ---------- */

export function PresetFrame({ brand, meta = [], children }) {
  return (
    <div className='cv-frame'>
      <div className='cv-frame-head'>
        <span className='cv-frame-brand'>{brand}</span>
        <span className='cv-frame-meta'>
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </span>
      </div>
      <div className='cv-frame-body'>{children}</div>
    </div>
  );
}

/* ---------- preset cards ---------- */

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

/* ---------- education: paper cards (futc preset behavior) ---------- */

export function PaperCard({ idx, title, meta }) {
  return (
    <div className='cv-paper'>
      <div className='paper-top'>
        <span className='idx dep'>{idx}</span>
        <span className='paper-fold' aria-hidden='true' />
      </div>
      <h3>{title}</h3>
      <p className='paper-meta'>{meta}</p>
      <span className='stack'>publication · read on request</span>
    </div>
  );
}

/* ---------- education: license card with the cert image ---------- */

export function LicenseCard({ license }) {
  return (
    <div className='cv-license'>
      <figure className='cv-photo cert-photo'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={license.img} alt={license.name} loading='lazy' />
        <figcaption>{license.imgCaption}</figcaption>
      </figure>
      <div className='cv-license-body'>
        <p className='cv-kicker' style={{ margin: 0 }}>LICENSE</p>
        <h3>{license.name}</h3>
        <p className='lic-issuer'>{license.issuer}</p>
        <p className='lic-note'>{license.note}</p>
        <span className='stack'>{license.dates}</span>
      </div>
    </div>
  );
}

/* ---------- honors (3x3 grid) ---------- */

const HONOR_ICONS = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  trophy: Trophy,
  bug: Bug,
  chrome: Camera,
  flag: Flag,
  medal: Medal,
  mic: Mic,
  users: Users,
};

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
    <div className='cv-honors cv-honors--grid stagger'>
      {honors.map((h) => {
        const Icon = HONOR_ICONS[h.icon] || Sparkles;
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

/* ---------- projects window (futc OS style, hover arrow links) ---------- */

const PROJ_ICONS = {
  film: Film,
  clapper: Film,
  smartphone: Smartphone,
  navigation: Navigation,
  terminal: Terminal,
  activity: Activity,
  monitor: Monitor,
  shield: ShieldCheck,
};

function ProjTile({ p }) {
  const Icon = PROJ_ICONS[p.icon] || Sparkles;
  const inner = (
    <>
      <span className='pt-arrow' aria-hidden='true'>
        <ArrowUpRight size={18} />
      </span>
      <span className='pt-media'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.img} alt={`${p.name} preview`} loading='lazy' />
        <span className='pt-chip cv-tile cv-tile--paper'>
          <Icon size={15} />
        </span>
      </span>
      <div className='pt-head'>
        <h3>{p.name}</h3>
        <span className='pt-year'>{p.year}</span>
      </div>
      <p>{p.body}</p>
      <span className='pt-tags'>{p.tags}</span>
    </>
  );

  if (!p.href) {
    return <div className='cv-proj-tile'>{inner}</div>;
  }
  if (p.ext) {
    return (
      <a href={p.href} className='cv-proj-tile' target='_blank' rel='noopener noreferrer'>
        {inner}
      </a>
    );
  }
  return (
    <Link href={p.href} className='cv-proj-tile'>
      {inner}
    </Link>
  );
}

export function ProjectWindow({ left, mid, right, projects = [] }) {
  return (
    <div className='cv-projwin'>
      <div className='cv-projwin-bar'>
        <span>{left}</span>
        <span>{mid}</span>
        <span>{right}</span>
      </div>
      <div className='cv-projgrid stagger'>
        {projects.map((p) => (
          <ProjTile key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}

/* ---------- pixel dragon divider (my own dragon, between the hero and the story) ---------- */

const DRAGON_MAP = [
  '..........XX............................',
  '..........XXX..........XX...............',
  '.........XXXX.........XXXX..............',
  '.........XXXX........XXXXX..............',
  '........XXXXXX......XXXXXX..............',
  '.......XXXXXXXXX..XXXXXXXX..............',
  '....XXXXXXXXXXXXXXXXXXXXXXX.............',
  '..XXXXXXXXXXXXXXXXXXXXXXXXXXX...........',
  '..XXXXX.XXXXXXXXeXXXXXXXXXXXXX..........',
  '..XX....XXXXXXXXXXXXXXXXXXXXXXXX........',
  '..XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.......',
  '...XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.....',
  '....XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX...',
  '.....XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX..',
  '......XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX...',
  '.......XXXXXXXXXXXXXXXXXXXXXXXXXXXX.....',
  '........XXXXX..XXXXX...XXXXXX...........',
  '........XXXX....XXX......XXX............',
  '.........XX......X........X.............',
];

/* merge horizontal pixel runs into single rects so the svg stays light */
const DRAGON_CELL = 4;
const DRAGON_W = Math.max(...DRAGON_MAP.map((r) => r.length));
const DRAGON_H = DRAGON_MAP.length;
const DRAGON_RECTS = DRAGON_MAP.flatMap((row, y) => {
  const out = [];
  let x0 = -1;
  const chars = [...row, '.'];
  chars.forEach((ch, x) => {
    const on = ch !== '.';
    if (on && x0 < 0) x0 = x;
    if (!on && x0 >= 0) {
      out.push({ x: x0 * DRAGON_CELL, y: y * DRAGON_CELL, w: (x - x0) * DRAGON_CELL });
      x0 = -1;
    }
  });
  return out;
});

export function DragonRule() {
  return (
    <div className='cv-dragon' role='separator' aria-label='Pixel dragon divider'>
      <span className='dg-line' aria-hidden='true' />
      <span className='dg-tag dep' aria-hidden='true'>
        root@obx03:~#
      </span>
      <svg
        className='dg-svg'
        viewBox={`0 0 ${DRAGON_W * DRAGON_CELL} ${DRAGON_H * DRAGON_CELL}`}
        aria-hidden='true'
        focusable='false'
      >
        {DRAGON_RECTS.map((r) => (
          <rect key={`${r.x}-${r.y}`} className='dg-b' x={r.x} y={r.y} width={r.w} height={DRAGON_CELL} />
        ))}
        <rect
          className='dg-e'
          x={16 * DRAGON_CELL}
          y={8 * DRAGON_CELL}
          width={DRAGON_CELL}
          height={DRAGON_CELL}
        />
      </svg>
      <span className='dg-tag dep' aria-hidden='true'>
        stay curious_
      </span>
      <span className='dg-line' aria-hidden='true' />
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
            <Link href='/filmography'>Filmography</Link>
            <Link href='/filmography/change'>Change</Link>
            <Link href='/filmography/sfh-access'>SFH Access</Link>
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
