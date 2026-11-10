'use client';

import { useEffect, useState } from 'react';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/filmography', label: 'Filmography' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Clock({ className = '' }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Africa/Lagos',
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`cv-clock ${className}`} suppressHydrationWarning>
      {now ? `${now} WAT` : '—:—:— WAT'}
    </span>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('obx-theme', next);
    } catch (e) {
      /* private mode */
    }
    setTheme(next);
  };

  return (
    <button
      type='button'
      className='cv-icon-btn'
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'dark' ? <Sun size={16} /> : theme === 'light' ? <Moon size={16} /> : <span style={{ width: 16 }} />}
    </button>
  );
}

export function TopBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const onDark = pathname === '/contact';

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`cv-topbar ${onDark ? 'on-dark' : ''}`}>
      <div className='wrap'>
        <div className='cv-topbar-row'>
          <nav className={`cv-nav hide-mobile ${onDark ? 'cv-nav--dark' : ''}`} aria-label='Main'>
            {NAV.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={
                  item.href === '/'
                    ? pathname === '/' || pathname.startsWith('/filmography')
                      ? 'active'
                      : ''
                    : pathname === item.href || pathname.startsWith(item.href)
                      ? 'active'
                      : ''
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type='button'
            className={`cv-nav cv-burger ${onDark ? 'cv-nav--dark' : ''}`}
            aria-label='Open menu'
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          <div className='cv-top-right'>
            <Clock />
            <ThemeToggle />
            <Link href='/' className='cv-avatar-btn' aria-label='Home'>
              <span className='cv-avatar'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src='/images/avatar.jpg' alt='obx03 avatar' />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className='wrap'>
          <div className='cv-mobile-panel'>
            {NAV.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={pathname === item.href || pathname.startsWith(item.href) ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div className='cv-ruler' aria-hidden='true'>
        {[0, 200, 400, 600, 800, 1000, 1200].map((n) => (
          <span key={n} style={{ left: `calc(50% - 600px + ${n}px)` }}>
            {n}
          </span>
        ))}
      </div>
    </header>
  );
}
