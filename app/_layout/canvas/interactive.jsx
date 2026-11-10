'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  Bug,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Cpu,
  Lock,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
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

/* ================= hero notepad (click the terminal tile) ================= */

export function HeroNotepad({ tile, title, seed }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(seed);
  const [ready, setReady] = useState(false);
  const areaRef = useRef(null);

  const KEY = 'obx-notepad:v1';

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== null) setText(saved);
    } catch (e) {
      /* private mode */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return undefined;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(KEY, text);
      } catch (e) {
        /* ignore */
      }
    }, 350);
    return () => clearTimeout(t);
  }, [text, ready]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const TerminalIcon = Terminal;

  return (
    <>
      <button
        type='button'
        className={`cv-float cv-tile cv-tile--${tile.color} cv-tile--clickable`}
        style={{ position: 'absolute', zIndex: 1, ...tile.style }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label='Open the notepad'
        title='click me: open the notepad'
      >
        <TerminalIcon size={19} />
      </button>

      {open ? (
        <div className='cv-notepad' role='dialog' aria-label='Notepad'>
          <div className='cv-window-bar'>
            <span className='wb-dots' aria-hidden='true'>
              <i />
              <i />
              <i />
            </span>
            <span className='wb-title'>{title} — notepad</span>
            <span className='wb-spacer' />
            <button
              type='button'
              className='np-close'
              aria-label='Close notepad'
              onClick={() => setOpen(false)}
            >
              <X size={13} />
            </button>
          </div>
          <textarea
            ref={areaRef}
            className='np-area'
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
            aria-label='Notepad text area'
          />
          <div className='np-foot mono'>
            <span>autosaves on this device</span>
            <span>{text.length} chars</span>
            <span>ESC to close</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

/* ================= scroll progress hairline ================= */

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className='cv-progress' aria-hidden='true'>
      <span style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}

/* ================= block field (minecraft-ish voxel gradient, mouse + scroll reactive) ================= */

const BLOCK_CELL = 22;
const BLOCK_R = 150;

export function BlockField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let running = true;
    let inView = true;
    let W = 0;
    let H = 0;
    let ink = '#111212';
    let palette = [];

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      ink = cs.getPropertyValue('--ink').trim() || '#111212';
      palette = ['--green', '--sky', '--pink', '--yellow', '--orange'].map(
        (v) => cs.getPropertyValue(v).trim() || ink,
      );
    };
    readColors();
    const themeObs = new MutationObserver(readColors);
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.tx = -9999;
      mouse.ty = -9999;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);

    const io = new IntersectionObserver((en) => {
      inView = en[0].isIntersecting;
    });
    io.observe(canvas);

    const hash = (x, y) => {
      let h = (x * 374761393 + y * 668265263) | 0;
      h = ((h ^ (h >> 13)) * 1274126177) | 0;
      return ((h ^ (h >> 16)) >>> 0) / 4294967295;
    };

    const draw = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.16;
      mouse.y += (mouse.ty - mouse.y) * 0.16;
      const scroll = window.scrollY || 0;
      const drift = scroll * 0.35;
      const flow = drift % BLOCK_CELL;
      const rowShift = Math.floor(drift / BLOCK_CELL);
      const fade = Math.max(0, 1 - scroll / (H * 0.85));

      ctx.clearRect(0, 0, W, H);
      const cols = Math.ceil(W / BLOCK_CELL) + 1;
      const rows = Math.ceil(H / BLOCK_CELL) + 1;

      for (let gy = 0; gy < rows; gy++) {
        const wy = gy + rowShift;
        const y = gy * BLOCK_CELL - flow;
        for (let gx = 0; gx < cols; gx++) {
          const n = hash(gx, wy);

          /* faint voxel base so the field reads even without a cursor */
          if (n > 0.88) {
            ctx.globalAlpha = 0.055 * fade;
            ctx.fillStyle = ink;
            ctx.fillRect(gx * BLOCK_CELL, y, BLOCK_CELL - 2, BLOCK_CELL - 2);
          }

          /* mouse energy: blocks light up and grow near the cursor */
          const cx = gx * BLOCK_CELL + BLOCK_CELL / 2;
          const cy = y + BLOCK_CELL / 2;
          const dx = cx - mouse.x;
          const dy = cy - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < BLOCK_R * BLOCK_R) {
            const e = 1 - Math.sqrt(d2) / BLOCK_R;
            const grow = 1 + e * 1.6;
            const size = (BLOCK_CELL - 2) * grow;
            const off = (BLOCK_CELL - size) / 2;
            ctx.globalAlpha = Math.min(0.8, e * e) * fade;
            ctx.fillStyle = palette[Math.floor(n * palette.length) % palette.length];
            ctx.fillRect(gx * BLOCK_CELL + off, y + off, size, size);
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (!running) return;
      if (!document.hidden && inView) draw();
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
      ro.disconnect();
      io.disconnect();
      themeObs.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} className='cv-blocks' aria-hidden='true' />;
}

/* ================= hero toys: clickable tiles, one window at a time ================= */

const TOY_ICONS = {
  camera: Camera,
  cpu: Cpu,
  bug: Bug,
  terminal: Terminal,
  wifi: Wifi,
  lock: Lock,
};

function ToyWindow({ title, onClose, children, foot, wide = false, flush = false }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (document.querySelector('.cv-lightbox')) return;
      onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={`cv-toy ${wide ? 'cv-toy--wide' : ''}`} role='dialog' aria-label={title}>
      <div className='cv-window-bar'>
        <span className='wb-dots' aria-hidden='true'>
          <i />
          <i />
          <i />
        </span>
        <span className='wb-title'>{title}</span>
        <span className='wb-spacer' />
        <button type='button' className='np-close' aria-label='Close' onClick={onClose}>
          <X size={13} />
        </button>
      </div>
      <div className={`toy-body ${flush ? 'toy-body--flush' : ''}`}>{children}</div>
      {foot ? (
        <div className='np-foot mono'>
          {foot.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function HeroToys({ tiles = [], notepad, stills = [] }) {
  const [active, setActive] = useState(null);
  const toggle = (a) => setActive((v) => (v === a ? null : a));

  return (
    <>
      {tiles.map((t) => {
        const Icon = TOY_ICONS[t.icon] || Sparkles;
        return (
          <button
            key={t.action || t.icon}
            type='button'
            className={`cv-float cv-tile cv-tile--${t.color} cv-tile--clickable ${
              t.action === 'notepad' ? 'cv-tile--park' : ''
            }`}
            style={{ position: 'absolute', zIndex: 1, ...t.style }}
            onClick={() => toggle(t.action)}
            aria-expanded={active === t.action}
            aria-label={t.label}
            title={t.label}
          >
            <Icon size={19} />
          </button>
        );
      })}

      {active === 'notepad' && notepad ? (
        <NotepadToy notepad={notepad} onClose={() => toggle('notepad')} />
      ) : null}
      {active === 'gallery' ? <GalleryToy stills={stills} onClose={() => toggle('gallery')} /> : null}
      {active === 'sysinfo' ? <SysinfoToy onClose={() => toggle('sysinfo')} /> : null}
      {active === 'game' ? <BugToy onClose={() => toggle('game')} /> : null}
      {active === 'subscan' ? <SubscanToy onClose={() => toggle('subscan')} /> : null}
      {active === 'cipher' ? <CipherToy onClose={() => toggle('cipher')} /> : null}
    </>
  );
}

/* ---------- the original: the notepad ---------- */

function NotepadToy({ notepad, onClose }) {
  const [text, setText] = useState(notepad.seed);
  const [ready, setReady] = useState(false);
  const KEY = 'obx-notepad:v1';

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== null) setText(saved);
    } catch (e) {
      /* private mode */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return undefined;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(KEY, text);
      } catch (e) {
        /* ignore */
      }
    }, 350);
    return () => clearTimeout(t);
  }, [text, ready]);

  return (
    <ToyWindow
      title={`${notepad.title} — notepad`}
      onClose={onClose}
      flush
      foot={['autosaves on this device', `${text.length} chars`, 'ESC to close']}
    >
      <textarea
        className='np-area'
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
        autoFocus
        aria-label='Notepad text area'
      />
    </ToyWindow>
  );
}

/* ---------- the camera: stills from the films ---------- */

function GalleryToy({ stills, onClose }) {
  const [open, setOpen] = useState(-1);

  const step = useCallback(
    (d) => setOpen((i) => (i + d + stills.length) % stills.length),
    [stills.length],
  );

  useEffect(() => {
    if (open < 0) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, step]);

  return (
    <>
      <ToyWindow
        wide
        title='stills.gallery'
        onClose={onClose}
        foot={[`${stills.length} frames from the films`, 'click a frame', 'ESC to close']}
      >
        <div className='toy-gallery'>
          {stills.map((s, i) => (
            <button
              type='button'
              key={s.src + i}
              className='tg-item'
              onClick={() => setOpen(i)}
              aria-label={`Open frame: ${s.caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.caption} loading='lazy' />
              <span>{s.caption}</span>
            </button>
          ))}
        </div>
      </ToyWindow>

      {open >= 0 ? (
        <div className='cv-lightbox' onClick={() => setOpen(-1)} role='dialog' aria-modal='true' aria-label='Frame viewer'>
          <div className='lb-bar'>
            <span className='lb-meta'>
              {String(open + 1).padStart(2, '0')} / {String(stills.length).padStart(2, '0')} — {stills[open].caption}
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stills[open].src} alt={stills[open].caption} onClick={(e) => e.stopPropagation()} />
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
          <button type='button' className='lb-close' aria-label='Close' onClick={() => setOpen(-1)}>
            <X size={18} />
          </button>
        </div>
      ) : null}
    </>
  );
}

/* ---------- the cpu: live system readout ---------- */

const SYS_MOODS = ['curious', 'caffeinated', 'recon mode', 'kernel peeking', 'documentary mode', 'plotting shots'];

function SysinfoToy({ onClose }) {
  const [tick, setTick] = useState(0);
  const [battery, setBattery] = useState(null);
  const [net, setNet] = useState('');

  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((b) => {
        setBattery({ level: Math.round(b.level * 100), charging: b.charging });
      });
    }
    const c = navigator.connection;
    if (c && c.effectiveType) setNet(c.effectiveType);
  }, []);

  const ua = navigator.userAgent;
  const agent = ua.includes('Firefox') ? 'firefox' : ua.includes('Chrome') ? 'chromium-based' : ua.includes('Safari') ? 'safari' : 'unknown browser';
  const rows = [
    ['agent', agent],
    ['cores', navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} threads` : 'unknown'],
    ['memory', navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'classified'],
    ['screen', `${window.screen.width}x${window.screen.height} @ ${window.devicePixelRatio}x`],
    ['viewport', `${window.innerWidth}x${window.innerHeight}`],
    ['network', net || (navigator.onLine ? 'online' : 'offline')],
    ['locale', navigator.language],
    ['timezone', Intl.DateTimeFormat().resolvedOptions().timeZone],
    ['battery', battery ? `${battery.level}%${battery.charging ? ' charging' : ''}` : 'no report'],
    ['uptime', `${tick}s`],
    ['threat level', SYS_MOODS[tick % SYS_MOODS.length]],
  ];

  return (
    <ToyWindow title='obx@sysinfo' onClose={onClose} foot={['live readout', 'nothing leaves this page']}>
      <dl className='toy-sysinfo'>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </ToyWindow>
  );
}

/* ---------- the bug: whack-a-bug, 20 seconds on the clock ---------- */

function BugToy({ onClose }) {
  const [playing, setPlaying] = useState(false);
  const [hole, setHole] = useState(-1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [left, setLeft] = useState(20);

  useEffect(() => {
    try {
      setBest(Number(localStorage.getItem('obx-bug-best') || 0));
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const spawn = setInterval(() => setHole(Math.floor(Math.random() * 9)), 720);
    const timer = setInterval(() => setLeft((v) => v - 1), 1000);
    return () => {
      clearInterval(spawn);
      clearInterval(timer);
    };
  }, [playing]);

  useEffect(() => {
    if (playing || left > 0) return undefined;
    setHole(-1);
    if (score > best) {
      setBest(score);
      try {
        localStorage.setItem('obx-bug-best', String(score));
      } catch (e) {
        /* ignore */
      }
    }
    return undefined;
  }, [playing, left, score, best]);

  const whack = (i) => {
    if (!playing) return;
    if (i === hole) {
      setScore((s) => s + 1);
      setHole(Math.floor(Math.random() * 9));
    }
  };

  const start = () => {
    setScore(0);
    setLeft(20);
    setHole(-1);
    setPlaying(true);
  };

  return (
    <ToyWindow
      title='bug.exe'
      onClose={onClose}
      foot={[`score ${score}`, `best ${best}`, playing ? `${Math.max(0, left)}s left` : '20s on the clock']}
    >
      <div className='toy-bug'>
        <div className='tb-grid'>
          {Array.from({ length: 9 }, (_, i) => (
            <button
              key={i}
              type='button'
              className={`toy-hole ${i === hole ? 'is-up' : ''}`}
              onClick={() => whack(i)}
              aria-label={`Hole ${i + 1}`}
            >
              {i === hole ? <Bug size={22} /> : null}
            </button>
          ))}
        </div>
        <button type='button' className='cv-btn' onClick={start} disabled={playing}>
          {playing ? 'catching...' : left === 20 ? 'start' : 'play again'}
        </button>
      </div>
    </ToyWindow>
  );
}

/* ---------- the wifi: crt.sh subdomain scanner ---------- */

function SubscanToy({ onClose }) {
  const [domain, setDomain] = useState('obx03.tech');
  const [status, setStatus] = useState('idle');
  const [rows, setRows] = useState([]);
  const [ms, setMs] = useState(0);
  const [err, setErr] = useState('');

  const scan = async (e) => {
    e.preventDefault();
    const d = domain
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/\/.*$/, '');
    if (!/^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/.test(d)) {
      setStatus('error');
      setErr('that domain does not parse. try obx03.tech');
      return;
    }
    setStatus('loading');
    setErr('');
    setRows([]);
    const t0 = performance.now();
    try {
      const res = await fetch(`https://crt.sh/?q=%25.${encodeURIComponent(d)}&output=json`);
      if (!res.ok) throw new Error(`crt.sh replied ${res.status}`);
      const data = await res.json();
      const found = new Set();
      data.forEach((r) =>
        String(r.name_value || '')
          .split('\n')
          .forEach((n) => {
            const v = n.trim().toLowerCase().replace('*.', '');
            if (v.endsWith(d)) found.add(v);
          }),
      );
      setRows([...found].sort());
      setMs(Math.round(performance.now() - t0));
      setStatus('done');
    } catch (ex) {
      setErr(String(ex.message || ex));
      setStatus('error');
    }
  };

  return (
    <ToyWindow
      title='subscan.sh'
      onClose={onClose}
      foot={['data: crt.sh certificate transparency', status === 'done' ? `${rows.length} names in ${ms}ms` : 'live lookup']}
    >
      <div className='toy-scan'>
        <form className='toy-scan-form' onSubmit={scan}>
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            spellCheck={false}
            aria-label='Domain to scan'
            placeholder='example.com'
          />
          <button type='submit' className='cv-btn' disabled={status === 'loading'}>
            {status === 'loading' ? 'scanning' : 'scan'}
          </button>
        </form>

        <p className='toy-scan-status mono'>
          {status === 'idle' && 'queries crt.sh for certificate transparency names. try your own domain.'}
          {status === 'loading' && 'shaking certificates loose...'}
          {status === 'done' && `${rows.length} unique names. sorted, deduped, yours.`}
          {status === 'error' && `hmm. ${err} — `}
          {status === 'error' ? (
            <a
              href={`https://crt.sh/?q=%25.${encodeURIComponent(domain.trim())}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              open crt.sh directly
            </a>
          ) : null}
        </p>

        {rows.length > 0 ? (
          <ul className='toy-scan-list'>
            {rows.slice(0, 80).map((r, i) => (
              <li key={r}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </ToyWindow>
  );
}

/* ---------- the lock: cipher playground ---------- */

const rot13 = (s) =>
  s.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });

const CIPHER_MODES = [
  { id: 'b64e', label: 'b64 encode' },
  { id: 'b64d', label: 'b64 decode' },
  { id: 'rot13', label: 'rot13' },
  { id: 'rev', label: 'reverse' },
];

function CipherToy({ onClose }) {
  const [input, setInput] = useState('obx03 was here.');
  const [mode, setMode] = useState('b64e');
  const [copied, setCopied] = useState(false);

  let out = '';
  try {
    if (mode === 'b64e') out = btoa(unescape(encodeURIComponent(input)));
    else if (mode === 'b64d') out = decodeURIComponent(escape(atob(input.trim())));
    else if (mode === 'rot13') out = rot13(input);
    else out = [...input].reverse().join('');
  } catch (e) {
    out = 'not valid base64. feed me encoded text.';
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(out);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      /* clipboard blocked */
    }
  };

  return (
    <ToyWindow title='cipher.txt' onClose={onClose} foot={['rot13 never saved anyone', 'copy it before you close']}>
      <div className='toy-cipher'>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          rows={2}
          aria-label='Cipher input'
        />
        <div className='tc-modes'>
          {CIPHER_MODES.map((m) => (
            <button
              key={m.id}
              type='button'
              className='cv-mini-btn'
              aria-pressed={mode === m.id}
              onClick={() => setMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
        <pre className='tc-out'>{out || '...'}</pre>
        <button type='button' className='cv-btn' onClick={copy}>
          {copied ? (
            <>
              <Check size={14} /> copied
            </>
          ) : (
            <>
              <Copy size={14} /> copy output
            </>
          )}
        </button>
      </div>
    </ToyWindow>
  );
}
