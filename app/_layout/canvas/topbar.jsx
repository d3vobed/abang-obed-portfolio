'use client';

import { useEffect, useState } from 'react';

import { Clapperboard, Grip, Heart, Home, Moon, PenLine, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const NAV = [
  { href: '/', title: 'home', Icon: Home },
  { href: '/about', title: 'about', Icon: PenLine },
  { href: '/film', title: 'film', Icon: Clapperboard },
  { href: '/writing', title: 'writing', Icon: Grip },
];

/** Live local clock — Abuja / Lagos time. */
export function Clock({ className = '', dark = false }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'Africa/Lagos',
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`font-dmono text-[12px] uppercase tracking-[0.18em] ${dark ? 'text-white/70' : 'text-[#43494b]'} ${className}`}
      suppressHydrationWarning
    >
      {now ?? '--:--:--'}
    </span>
  );
}

/** Light / dark switch — persists to localStorage, flips <html data-theme>. */
export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('obx-theme', next);
    } catch {
      /* private mode — session-only theme is fine */
    }
    setTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type='button'
      onClick={toggle}
      className='cv-theme-toggle'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'light mode' : 'dark mode'}
    >
      {isDark ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
    </button>
  );
}

/**
 * Top bar — canvas nav pills, avatar chips, contact button + ruler.
 * `dark` inverts the palette for the contact page.
 */
export function TopBar({ dark = false }) {
  const pathname = usePathname();
  const isActive = href => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 ${dark ? 'canvas-dark' : 'bg-white'}`}>
      <div className='flex items-center justify-between gap-2 border-b px-3 py-2.5 sm:px-5'
        style={{ borderColor: dark ? 'var(--cv-dark-line)' : 'var(--cv-line)' }}>
        <div className='flex min-w-0 items-center gap-1.5'>
          <span
            className={`hidden size-9 place-items-center rounded-lg sm:grid ${dark ? 'text-white/60' : 'text-[#43494b]'}`}
            aria-hidden
          >
            <Grip size={17} />
          </span>
          <nav aria-label='Primary' className='flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1'>
            {NAV.map(({ href, title, Icon }) => (
              <Link key={href} href={href} className='cv-nav' data-active={isActive(href)}>
                <Icon size={14} aria-hidden />
                {title}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex flex-none items-center gap-2 sm:gap-2.5'>
          <ThemeToggle />
          <span
            className={`hidden size-9 place-items-center overflow-hidden rounded-full border-2 md:grid ${
              dark ? 'border-white/25' : 'border-[#111212]'
            }`}
          >
            <Image src='/images/avatar.jpg' alt='Abang Obed pixel avatar' width={36} height={36} className='size-full object-cover' />
          </span>
          <span
            className={`font-dmono hidden size-9 place-items-center rounded-full border-2 text-[11px] font-medium sm:grid ${
              dark ? 'border-white/25 text-white/80' : 'border-[#c9cdc9] text-[#43494b]'
            }`}
            aria-hidden
          >
            03
          </span>
          <Link href='/contact' className='cv-nav-contact' aria-label='Contact Abang Obed'>
            <Heart size={14} aria-hidden />
            contact
          </Link>
        </div>
      </div>

      <div className='cv-ruler hidden sm:block' aria-hidden>
        <div className='cv-ruler-ticks' />
        <div className='cv-ruler-nums'>
          {Array.from({ length: 15 }, (_, i) => (
            <span key={i}>{(i + 1) * 100}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
