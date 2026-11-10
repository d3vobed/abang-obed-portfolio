'use client';

/* ============================================================
   WorksPlaylist — the "experiments" flow from sebiomo.com,
   rebuilt for the works section: one big featured frame that
   cycles through the roles like a playlist, with a numbered
   segment strip underneath. Each segment carries a progress
   line that fills while its work is on stage. Hover effects
   only, no colored buttons. No em dashes anywhere.
   ============================================================ */

import { useCallback, useEffect, useRef, useState } from 'react';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const DURATION = 7000;

export function WorksPlaylist({ items = [] }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef(null);
  const rafRef = useRef(0);
  const lastRef = useRef(0);

  const reduced = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /* pause the reel while the section is off screen */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tick = useCallback(
    (now) => {
      rafRef.current = requestAnimationFrame(tick);
      if (!inView || document.hidden || reduced) {
        lastRef.current = now;
        return;
      }
      const dt = now - (lastRef.current || now);
      lastRef.current = now;
      setProgress((p) => {
        const next = p + dt / DURATION;
        if (next >= 1) {
          setActive((a) => (a + 1) % items.length);
          return 0;
        }
        return next;
      });
    },
    [inView, items.length, reduced],
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  useEffect(() => {
    setPlaying(inView && !reduced);
  }, [inView, reduced]);

  const jump = (i) => {
    setActive(i);
    setProgress(0);
  };

  const current = items[active] || items[0];

  return (
    <div className='wp' ref={rootRef}>
      {/* featured frame */}
      <div className='wp-stage' data-playing={playing ? 'true' : 'false'}>
        {current.img ? (
          <span key={current.img} className='wp-media'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.img} alt='' aria-hidden='true' className='wp-img-back' />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.img} alt={current.title} className='wp-img' />
          </span>
        ) : (
          <div key={`tile-${active}`} className={`wp-tile cv-tile cv-tile--${current.tileColor || 'paper'}`}>
            <span className='wp-tile-mark' aria-hidden='true'>
              {current.mark || '>'}
            </span>
            <span className='wp-tile-name'>{current.title}</span>
          </div>
        )}
        <span className='wp-grain' aria-hidden='true' />

        <div className='wp-caption'>
          <span className='wp-no dep'>
            no. {String(active + 1).padStart(2, '0')}
          </span>
          <span className='wp-name'>
            {current.title}
            <i> · {current.headline}</i>
          </span>
          <span className='wp-cap-right dep'>
            {current.href ? (
              <Link href={current.href} className='wp-view'>
                View <ArrowUpRight size={12} style={{ verticalAlign: '-2px' }} />
              </Link>
            ) : (
              current.stack
            )}
          </span>
        </div>
      </div>

      {/* segment strip */}
      <div className='wp-segments' role='tablist' aria-label='Works playlist'>
        {items.map((it, i) => (
          <button
            type='button'
            key={it.title}
            role='tab'
            aria-selected={i === active}
            aria-label={`Show work No. ${i + 1}, ${it.title}`}
            className='wp-seg'
            onClick={() => jump(i)}
          >
            <span className='wp-track'>
              <span
                className='wp-fill'
                style={i === active ? { transform: `scaleX(${progress})` } : { transform: 'scaleX(0)' }}
              />
            </span>
            <span className={`wp-label dep ${i === active ? 'on' : ''}`}>
              no. {String(i + 1).padStart(2, '0')} · {it.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
