'use client';

import { useEffect, useRef, useState } from 'react';

import {
  ChevronDown,
  Code2,
  Film,
  Heart,
  Home,
  Layers,
  Menu,
  Moon,
  PenLine,
  Shield,
  Sun,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WORK_LINKS = [
  { href: '/works/film', label: 'Film Gallery', sub: 'Change & SFH Access', Icon: Film },
  { href: '/works/cybersecurity', label: 'Cybersecurity', sub: 'Assessments & research', Icon: Shield },
  { href: '/works/devops', label: 'Developer Operations', sub: 'Backend, cloud & builds', Icon: Code2 },
];

const NAV = [
  { href: '/', label: 'Home', Icon: Home },
  { label: 'Works', Icon: Layers, dropdown: WORK_LINKS },
  { href: '/blog', label: 'Blog', Icon: PenLine },
  { href: '/contact', label: 'Contact', Icon: Heart },
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
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef(null);

  const onDark = pathname === '/contact';

  useEffect(() => {
    setDropOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  const worksActive = pathname.startsWith('/works');

  return (
    <header className={`cv-topbar ${onDark ? 'on-dark' : ''}`}>
      <div className='wrap'>
        <div className='cv-topbar-row'>
          <nav className={`cv-nav hide-mobile ${onDark ? 'cv-nav--dark' : ''}`} aria-label='Main'>
            {NAV.map((item) =>
              item.dropdown ? (
                <div
                  className='cv-drop'
                  key={item.label}
                  ref={dropRef}
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <button
                    type='button'
                    className={`navlink ${worksActive ? 'active' : ''}`}
                    aria-expanded={dropOpen}
                    aria-haspopup='true'
                    onClick={() => setDropOpen((v) => !v)}
                  >
                    <item.Icon size={14} />
                    {item.label}
                    <ChevronDown
                      size={12}
                      style={{ transform: dropOpen ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}
                    />
                  </button>
                  <div className={`cv-drop-panel ${dropOpen ? 'open' : ''}`}>
                    {WORK_LINKS.map(({ href, label, sub, Icon }) => (
                      <Link href={href} key={href}>
                        <Icon size={15} />
                        <span>
                          {label}
                          <small>{sub}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={item.href} key={item.href} className={pathname === item.href ? 'active' : ''}>
                  <item.Icon size={14} />
                  {item.label}
                </Link>
              ),
            )}
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
            <span className='cv-avatar-btn'>
              <span className='cv-avatar'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src='/images/avatar.jpg' alt='obx03 avatar' />
              </span>
              <span className='cv-count'>03</span>
            </span>
            <Link href='/contact' className='cv-btn hide-mobile'>
              <Heart size={14} />
              Contact
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className='wrap'>
          <div className='cv-mobile-panel'>
            {NAV.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <span className='grp'>Works</span>
                  {WORK_LINKS.map(({ href, label }) => (
                    <Link href={href} key={href} className={`sub ${pathname === href ? 'active' : ''}`}>
                      {label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link href={item.href} key={item.href} className={pathname === item.href ? 'active' : ''}>
                  {item.label}
                </Link>
              ),
            )}
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
