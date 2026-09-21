'use client';

import { useEffect, useState } from 'react';

import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { navItems, socialMedias } from '@/data';

function useClock() {
  const [now, setNow] = useState('00:00:00');
  useEffect(() => {
    const fmt = n => String(n).padStart(2, '0');
    const tick = () => {
      const d = new Date();
      setNow(`${fmt(d.getHours())}:${fmt(d.getMinutes())}:${fmt(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Socials({ className }) {
  return (
    <div className={className}>
      {socialMedias.slice(0, 4).map(s => (
        <a key={s.title} href={s.href} target='_blank' rel='noopener'>
          {s.title}
        </a>
      ))}
    </div>
  );
}

export function NovoraNavbar() {
  const time = useClock();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='nv-topbar'>
        <div className='nv-container nv-topbar-inner'>
          <Socials className='nv-socials' />
          <Link href='/' className='nv-logo'>
            Abang<em>obX</em>
          </Link>
          <Link href='/contact' className='nv-bookcall'>
            <Image
              src='/images/avatar.jpg'
              width={26}
              height={26}
              alt=''
              sizes='26px'
            />
            Book call
          </Link>
        </div>
      </div>

      <nav className='nv-nav'>
        <div className='nv-container nv-nav-inner'>
          <ul className='nv-links'>
            {navItems.map(item => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className='nv-nav-meta'>
            <span className='nv-clock'>
              <Clock size={13} style={{ verticalAlign: '-2px', marginRight: '0.4rem' }} />
              {time} WAT
            </span>
            <a href='mailto:obx@wearehackerone.com'>obx@wearehackerone.com</a>
          </div>
          <button
            type='button'
            className='nv-burger'
            aria-label='Menu'
            onClick={() => setOpen(v => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nv-mobile ${open ? 'nv-mobile-open' : ''}`}>
        <div className='nv-mobile-top'>
          <span className='nv-logo'>
            Abang<em>obX</em>
          </span>
          <button
            type='button'
            className='nv-burger'
            aria-label='Close'
            onClick={() => setOpen(false)}
          >
            <span style={{ transform: 'translateY(3.5px) rotate(45deg)' }} />
            <span style={{ transform: 'translateY(-1.5px) rotate(-45deg)' }} />
          </button>
        </div>
        <nav className='nv-mobile-links'>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </nav>
        <div className='nv-mobile-foot'>
          <span>{time} WAT</span>
          <a href='mailto:obx@wearehackerone.com'>obx@wearehackerone.com</a>
        </div>
      </div>
    </>
  );
}