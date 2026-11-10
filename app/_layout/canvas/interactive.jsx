'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  Bug,
  Camera,
  ChevronLeft,
  ChevronRight,
  Lock,
  Pause,
  Play,
  ShieldCheck,
  Terminal,
  Wifi,
  X,
} from 'lucide-react';

import { typedRoles } from '@/data';

/* ================= scroll rise (swift ui style reveal) ================= */

export function Rise({ children, delay = 0, className = '', style }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rise ${inView ? 'in' : ''} ${className}`}
      style={{ '--rise-delay': `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ================= typed role line (futc style) ================= */

export function Typed({ className = '' }) {
  const [text, setText] = useState('');
  const [role, setRole] = useState(0);
  const [phase, setPhase] = useState('type');

  useEffect(() => {
    const target = typedRoles[role % typedRoles.length];
    let t;
    if (phase === 'type') {
      if (text.length < target.length) {
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), 55);
      } else {
        t = setTimeout(() => setPhase('hold'), 0);
      }
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('erase'), 1600);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(target.slice(0, text.length - 1)), 26);
      } else {
        setRole((r) => (r + 1) % typedRoles.length);
        setPhase('type');
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, role]);

  return (
    <p className={`dep ${className}`} aria-label='Security Researcher, Filmmaker'>
      <span aria-hidden='true'>
        <span style={{ color: 'var(--red)' }}>&gt;</span> {text}
        <span className='cv-cursor' />
      </span>
    </p>
  );
}

/* ================= orbiting glyph field (hero) ================= */

const GLYPHS = ['>_', '{ }', '0x90', '#', 'sudo', '/etc', '$', 'CVE', '::', 'git', 'b0f', '[]'];

export function OrbitField() {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let running = true;
    let t = 0;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - r.left) / r.width - 0.5;
      mouse.current.y = (e.clientY - r.top) / r.height - 0.5;
    };
    window.addEventListener('pointermove', onMove);

    const items = GLYPHS.map((g, i) => ({
      g,
      r: 0.24 + (i % 5) * 0.09,
      a: (i / GLYPHS.length) * Math.PI * 2,
      sp: 0.0016 + (i % 4) * 0.0009,
      size: 11 + (i % 5) * 3,
      wob: 0.5 + (i % 3) * 0.35,
    }));

    const draw = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      const ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#111212';
      const base = Math.min(w, h) / 2;
      const cx = w / 2 + mouse.current.x * 26;
      const cy = h / 2 + mouse.current.y * 16;

      items.forEach((it) => {
        const a = it.a + t * it.sp * (reduced ? 0 : 1);
        const x = cx + Math.cos(a) * base * it.r * 1.7;
        const y = cy + Math.sin(a) * base * it.r * 0.72 + Math.sin(t * 0.001 * it.wob + it.a) * 6;
        const depth = (Math.sin(a) + 1) / 2;
        ctx.globalAlpha = 0.14 + depth * 0.4;
        ctx.fillStyle = ink;
        ctx.font = `${it.size + depth * 6}px var(--font-departure), monospace`;
        ctx.fillText(it.g, x, y);
      });
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (!running) return;
      t += 16;
      if (!document.hidden) draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={ref} className='cv-orbit' aria-hidden='true' />;
}

/* ================= highlights reel ================= */

export function Reel({ src, poster, sub }) {
  const videoRef = useRef(null);
  const [dither, setDither] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div>
      <div className={`cv-reel ${dither ? 'dither' : ''}`}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload='metadata'
          aria-label='Showreel of highlights'
        />
        <span className='dither-overlay' aria-hidden='true' />
        <div className='cv-reel-bar'>
          <span className='cv-reel-name'>
            highlights<i>.mov</i>
          </span>
          {sub ? <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{sub}</span> : null}
          <span className='spacer' />
          <button type='button' className='cv-mini-btn' aria-pressed={dither} onClick={() => setDither((v) => !v)}>
            Dither
          </button>
          <button type='button' className='cv-mini-btn' aria-pressed={!playing} onClick={togglePlay}>
            {playing ? <Pause size={11} style={{ display: 'inline', verticalAlign: '-1px' }} /> : null}
            {playing ? ' Pause' : (
              <>
                <Play size={11} style={{ display: 'inline', verticalAlign: '-1px' }} /> Play
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= about photos (gray by default, color on hover) ================= */

export function AboutPhotos({ photos = [], children = null }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(150px, 1fr) 2.2fr minmax(150px, 1fr)',
        gap: 22,
        alignItems: 'start',
      }}
      className='cv-about-grid'
    >
      <figure className='cv-photo' style={{ aspectRatio: '4 / 5' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos[0]?.src} alt={photos[0]?.caption || 'photo'} />
        <figcaption>{photos[0]?.caption}</figcaption>
      </figure>

      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>{children}</div>

      <figure className='cv-photo' style={{ aspectRatio: '4 / 5', marginTop: 34 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos[1]?.src} alt={photos[1]?.caption || 'photo'} />
        <figcaption>{photos[1]?.caption}</figcaption>
      </figure>
    </div>
  );
}

/* ================= gallery with lightbox ================= */

export function Gallery({ items = [] }) {
  const [open, setOpen] = useState(-1);

  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback(
    (d) => setOpen((i) => (i + d + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (open < 0) return undefined;
    document.documentElement.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className='cv-gallery'>
        {items.map((it, i) => (
          <figure key={it.src + i} onClick={() => setOpen(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt={it.caption} loading='lazy' />
            <figcaption>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <span>{it.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {open >= 0 ? (
        <div className='cv-lightbox' onClick={close} role='dialog' aria-modal='true' aria-label='Image viewer'>
          <div className='lb-bar'>
            <span className='lb-meta'>
              {String(open + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} — {items[open].caption}
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[open].src} alt={items[open].caption} onClick={(e) => e.stopPropagation()} />
          <button
            type='button'
            className='lb-btn prev'
            aria-label='Previous'
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type='button'
            className='lb-btn next'
            aria-label='Next'
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight size={20} />
          </button>
          <button type='button' className='lb-close' aria-label='Close' onClick={close}>
            <X size={18} />
          </button>
        </div>
      ) : null}
    </>
  );
}

/* ================= tiktok wall ================= */

export function TikTokWall({ videos = [] }) {
  const [open, setOpen] = useState(-1);

  useEffect(() => {
    if (open < 0) return undefined;
    document.documentElement.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className='cv-slates'>
        {videos.map((v, i) => (
          <button type='button' className='cv-slate' key={v.id} onClick={() => setOpen(i)}>
            <span className='sl-idx'>
              <span>TT/{String(i + 1).padStart(2, '0')}</span>
              <span>▶</span>
            </span>
            <span className='sl-label'>{v.label}</span>
            <span className='sl-foot'>@sfh_access · tap to play</span>
          </button>
        ))}
      </div>

      {open >= 0 ? (
        <div className='cv-tt-modal' onClick={() => setOpen(-1)} role='dialog' aria-modal='true' aria-label='TikTok player'>
          <iframe
            src={`https://www.tiktok.com/embed/v2/${videos[open].id}`}
            title={videos[open].label}
            allow='encrypted-media; picture-in-picture'
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
          />
          <a
            className='tt-open'
            href={`https://www.tiktok.com/@sfh_access/video/${videos[open].id}`}
            target='_blank'
            rel='noopener'
            onClick={(e) => e.stopPropagation()}
          >
            Open on TikTok ↗
          </a>
          <button type='button' className='lb-close' aria-label='Close' onClick={() => setOpen(-1)}>
            <X size={18} />
          </button>
        </div>
      ) : null}
    </>
  );
}

/* ================= 3d contact game ================= */

const SPRITES = [
  { Icon: Camera, tag: 'CAM_01' },
  { Icon: Terminal, tag: 'SH' },
  { Icon: Bug, tag: 'BUG' },
  { Icon: Lock, tag: 'ACL' },
  { Icon: ShieldCheck, tag: 'EDR' },
  { Icon: Wifi, tag: 'AP-2G' },
];

const rand = (min, max) => Math.round(min + Math.random() * (max - min));

export function ContactGame() {
  const stageRef = useRef(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [spots, setSpots] = useState(() =>
    SPRITES.map((_, i) => ({
      x: 8 + ((i * 17) % 80),
      y: 14 + ((i * 29) % 55),
      z: (i % 3) * 40 - 40,
    })),
  );

  useEffect(() => {
    try {
      setBest(Number(localStorage.getItem('obx-game-best') || 0));
    } catch (e) {
      /* ignore */
    }
  }, []);

  const bump = (k) => {
    try {
      if (k > best) {
        setBest(k);
        localStorage.setItem('obx-game-best', String(k));
      }
    } catch (e) {
      /* ignore */
    }
  };

  const onMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
  };

  const onLeave = () => {
    const el = stageRef.current;
    if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const hit = (i) => {
    setScore((s) => {
      const n = s + 1;
      bump(n);
      return n;
    });
    setSpots((sp) =>
      sp.map((p, j) => (j === i ? { x: rand(4, 86), y: rand(10, 66), z: rand(-60, 40) } : p)),
    );
  };

  return (
    <div className='cv-game' onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className='cv-game-stage' ref={stageRef}>
        <div className='cv-game-grid' aria-hidden='true' />
        {SPRITES.map(({ Icon, tag }, i) => {
          const p = spots[i];
          return (
            <button
              type='button'
              key={tag}
              className='cv-sprite'
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                '--z': `${p.z}px`,
                '--dur': `${6 + (i % 4) * 1.7}s`,
                '--delay': `${i * 0.5}s`,
              }}
              onClick={() => hit(i)}
              aria-label={`Catch ${tag}`}
            >
              <Icon size={16} />
              <span className='sp-tag'>{tag}</span>
            </button>
          );
        })}
      </div>
      <div className='cv-game-hud'>
        <span>
          ob3d.exe // catch the bugs <b>@obx03</b>
        </span>
        <span>
          SCORE <b>{score}</b> · BEST <b>{best}</b>
        </span>
      </div>
    </div>
  );
}
