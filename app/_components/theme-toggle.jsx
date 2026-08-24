'use client';

import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = document.documentElement.getAttribute('data-theme');
    if (stored === 'dark') setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      type='button'
      aria-label='Toggle dark mode'
      onClick={() => setDark(v => !v)}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-muted-foreground/40 text-background transition-colors hover:bg-background hover:text-foreground ${className}`}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
