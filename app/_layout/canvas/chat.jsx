'use client';

/* ============================================================
   OBX/ASK — floating chat widget, modeled on the little
   assistant pattern sebiomo.com uses: a floating icon that
   opens a small panel answering quick questions about the work.
   Topic answers come from the site's own content. Free text is
   matched against keywords; anything unknown falls back to the
   quick questions. No em dashes anywhere.
   ============================================================ */

import { useCallback, useEffect, useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

/* ---------------- knowledge base ---------------- */

const TOPICS = {
  intro: {
    question: 'Who are you?',
    label: 'About me',
    answer:
      "I'm Abang Obed, a cybersecurity researcher and filmmaker in Abuja, Nigeria. I take systems apart to see how they fail, and I make films that ask the same questions about people. Right now I'm co-founding Cyphra, a cybersecurity consulting firm, and directing film work under Icon Digital Edge.",
    follow: ['films', 'security', 'cyphra', 'contact'],
    links: [
      { href: '/filmography', label: 'Filmography' },
      { href: '/blog', label: 'Blog' },
    ],
    keywords: ['who', 'about', 'intro', 'obed', 'obx', 'yourself', 'hello', 'hi', 'hey', 'bio'],
  },
  films: {
    question: 'Show me your films',
    label: 'Films',
    answer:
      'Two productions so far. Change is a 14 minute crime thriller I wrote and directed, out in 2026. SFH Access is a creative direction project for the Society For HealthCare Access. Both are hung in the filmography, stills and all.',
    follow: ['change', 'sfh', 'techcinema'],
    links: [
      { href: '/filmography', label: 'Open the gallery' },
      { href: '/filmography/change', label: 'Change' },
      { href: '/filmography/sfh-access', label: 'SFH Access' },
    ],
    keywords: ['film', 'films', 'movie', 'cinema', 'watch', 'director', 'directed', 'directing', 'gallery', 'stills'],
  },
  change: {
    question: 'Tell me about Change',
    answer:
      'Change (A Single Note. A Hundred Stories) is my short film. One decision disrupts an already connected group of lives, and the consequences unfold in ways no one can control. 14 minutes, crime and thriller, shot in Nigeria, coming 2026. I wrote and directed it.',
    follow: ['films', 'sfh', 'techcinema'],
    links: [
      { href: '/filmography/change', label: 'Change in the gallery' },
      { href: 'https://youtu.be/cdme3UoB_vY', label: 'Watch on YouTube' },
    ],
    keywords: ['change', 'single note', 'hundred stories', 'thriller', 'short film', 'danielle', 'tech'],
  },
  sfh: {
    question: 'What is SFH Access?',
    answer:
      'SFH Access is creative direction work for the Society For HealthCare Access under Icon Digital Edge. I wrote, edited, directed and pulled first AC duty for the DOP. Short skits, talking head videos and a podcast session, built to make healthcare access feel human.',
    follow: ['films', 'change', 'contact'],
    links: [
      { href: '/filmography/sfh-access', label: 'SFH Access in the gallery' },
      { href: 'https://www.tiktok.com/@sfh_access', label: 'TikTok @sfh_access' },
    ],
    keywords: ['sfh', 'healthcare', 'health', 'access', 'skits', 'skit', 'podcast', 'tiktok', 'talking head'],
  },
  techcinema: {
    question: 'What is Tech Cinema?',
    answer:
      'Tech Cinema is my YouTube channel. The shorts, behind the scenes process and visual experiments get published there. It is where the film work lives between productions.',
    follow: ['films', 'change', 'contact'],
    links: [{ href: 'https://www.youtube.com/@techcinemaresyst', label: 'Tech Cinema on YouTube' }],
    keywords: ['tech cinema', 'youtube', 'channel', 'subscribe', 'behind the scenes', 'bts', 'experiments'],
  },
  security: {
    question: 'What security work do you do?',
    label: 'Security',
    answer:
      'Offensive security mostly: penetration testing, reverse engineering, malware and application security research. I lead authorized pentests on a P2P trading platform at Kynettic, assessed the Gigafro marketplace, and I spend a lot of time on Windows internals and EDR telemetry research.',
    follow: ['cyphra', 'honors', 'experience'],
    links: [{ href: '/blog', label: 'Security writeups' }],
    keywords: [
      'security', 'pentest', 'pentesting', 'penetration', 'bug', 'bugs', 'vulnerability', 'malware',
      'reverse', 'appsec', 'exploit', 'edr', 'windows', 'telemetry', 'vapt', 'offensive',
    ],
  },
  cyphra: {
    question: 'What is Cyphra?',
    label: 'Cyphra',
    answer:
      'Cyphra is a cybersecurity consulting firm I just co-founded. We run penetration tests, vulnerability assessments and security advisory for real products, from the first scoping call to the final report.',
    follow: ['security', 'honors', 'contact'],
    links: [],
    keywords: ['cyphra', 'consulting', 'consultancy', 'firm', 'co-founded', 'cofounder', 'founder', 'company'],
  },
  experience: {
    question: 'Where have you worked?',
    label: 'Experience',
    answer:
      'Right now: co-founding Cyphra, creative director at Icon Digital Edge, lead security engineer at Kynettic, and system network administrator at NEMA. Before that, security consulting at Gigafro and backend development at Myphlexit. The short version lives in the works section.',
    follow: ['security', 'cyphra', 'projects'],
    links: [{ href: '/#about', label: 'About this Obed' }],
    keywords: [
      'experience', 'work', 'worked', 'job', 'jobs', 'roles', 'kynettic', 'gigafro', 'nema',
      'myphlexit', 'icon digital', 'employer', 'career',
    ],
  },
  projects: {
    question: 'What have you built?',
    label: 'Projects',
    answer:
      'A few things: Video Storybook turns still images into moving storyboard shots with AI. A LiDAR spatial assistant for blind users earned special recognition at the Gemini hackathon. EtwScope does Windows telemetry research, and Autobot OS watches how code executes for EDR research. This site is hand built too.',
    follow: ['honors', 'films', 'contact'],
    links: [{ href: '/#about', label: 'See the projects' }],
    keywords: [
      'project', 'projects', 'built', 'build', 'storybook', 'lidar', 'etwscope', 'autobot',
      'ussd', 'app', 'tool', 'tools',
    ],
  },
  honors: {
    question: 'Any awards or bugs?',
    label: 'Honors',
    answer:
      "Some things I'm quietly proud of: found and responsibly disclosed bugs in Google Chrome and CodeSandbox, credited on a security advisory, an improper access control report on X (Twitter) through HackerOne, the NCAIR hackathon grand prize, and special recognition at the Gemini hackathon.",
    follow: ['security', 'cyphra', 'projects'],
    links: [],
    keywords: [
      'award', 'awards', 'honor', 'honors', 'chrome', 'codesandbox', 'twitter', 'hackerone',
      'bounty', 'cve', 'hackathon', 'gemini', 'ncair', 'prize', 'won', 'recognition',
    ],
  },
  blog: {
    question: 'Do you write?',
    label: 'Writing',
    answer:
      'Yes. The blog on this site carries my writeups, and older security research lives on Medium and my GitHub pages. Mostly the kind of notes I wished existed when I was learning.',
    follow: ['security', 'projects', 'contact'],
    links: [
      { href: '/blog', label: 'Read the blog' },
      { href: 'https://medium.com/@obx03', label: 'Medium' },
    ],
    keywords: ['blog', 'write', 'writing', 'writeup', 'writeups', 'medium', 'article', 'articles', 'post', 'read'],
  },
  contact: {
    question: 'How do I reach you?',
    label: 'Contact',
    answer:
      'Email is fastest: obx@wearehackerone.com. You can also find me on GitHub as d3vobed, or use the contact page and the form there.',
    follow: ['cyphra', 'films', 'intro'],
    links: [
      { href: '/contact', label: 'Contact page' },
      { href: 'https://github.com/d3vobed', label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/obx03', label: 'LinkedIn' },
    ],
    keywords: [
      'contact', 'reach', 'email', 'hire', 'message', 'talk', 'github', 'linkedin',
      'available', 'freelance', 'dm', 'reach out',
    ],
  },
};

const ROOT = ['films', 'security', 'cyphra', 'experience', 'projects', 'honors', 'blog', 'contact'];
const STORE_TURNS = 'obx-chat:v1';
const STORE_OPEN = 'obx-chat:open';
const DUR_PER_WORD = 26;

/* ---------------- free text matching ---------------- */

function matchTopic(raw) {
  const text = raw.toLowerCase().trim();
  if (!text) return null;
  let best = null;
  let bestScore = 0;
  Object.entries(TOPICS).forEach(([key, t]) => {
    let score = 0;
    t.keywords.forEach((k) => {
      if (text.includes(k)) score += k.length >= 6 ? 3 : 2;
    });
    if (score > bestScore) {
      bestScore = score;
      best = key;
    }
  });
  return bestScore > 0 ? best : null;
}

/* ---------------- pieces ---------------- */

function FollowUps({ topics, onAsk, asked }) {
  const list = topics.filter((t) => !asked.includes(t));
  if (!list.length) return null;
  return (
    <div className='cx-follow'>
      <p className='cx-follow-label'>Follow-ups</p>
      {list.slice(0, 4).map((t, i) => (
        <button
          type='button'
          key={t}
          className='cx-follow-btn'
          style={{ animationDelay: `${80 * i}ms` }}
          onClick={() => onAsk(t)}
        >
          <svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
            <path d='M9 10l-5 5 5 5' />
            <path d='M20 4v7a4 4 0 0 1-4 4H4' />
          </svg>
          {TOPICS[t].question}
        </button>
      ))}
    </div>
  );
}

function TypedAnswer({ text, onDone, instant = false }) {
  const words = text.split(' ');
  const [shown, setShown] = useState(instant ? words.length : 0);

  useEffect(() => {
    if (instant) return undefined;
    if (shown >= words.length) {
      onDone?.();
      return undefined;
    }
    const t = setTimeout(() => setShown((s) => s + 1), DUR_PER_WORD);
    return () => clearTimeout(t);
  }, [shown, words.length, instant, onDone]);

  const done = shown >= words.length;
  return (
    <p className='cx-answer'>
      {words.slice(0, shown).join(' ')}
      {!done ? <span className='cx-caret' aria-hidden='true' /> : null}
    </p>
  );
}

function Turn({ topic, instant, asked, onAsk }) {
  const [done, setDone] = useState(instant);
  const t = TOPICS[topic];
  return (
    <section className='cx-turn'>
      <div className='cx-user-row'>
        <p className='cx-user'>{t.question}</p>
      </div>
      <TypedAnswer text={t.answer} instant={instant} onDone={() => setDone(true)} />
      {done && t.links?.length ? (
        <div className='cx-links' style={{ animationDelay: '120ms' }}>
          {t.links.map((l) =>
            l.href.startsWith('/') ? (
              <a key={l.label} href={l.href} className='cx-link'>
                {l.label} →
              </a>
            ) : (
              <a key={l.label} href={l.href} className='cx-link' target='_blank' rel='noopener'>
                {l.label} ↗
              </a>
            ),
          )}
        </div>
      ) : null}
      {done ? <FollowUps topics={t.follow || []} onAsk={onAsk} asked={asked} /> : null}
    </section>
  );
}

/* ---------------- widget ---------------- */

export function ChatWidget() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState([]);
  const [draft, setDraft] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  const onContact = pathname === '/contact';

  useEffect(() => {
    setMounted(true);
    try {
      const raw = sessionStorage.getItem(STORE_TURNS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setTurns(parsed.filter((t) => TOPICS[t] || (typeof t === 'string' && t.startsWith('__miss__'))));
        }
      }
      setOpen(sessionStorage.getItem(STORE_OPEN) === '1');
    } catch (e) {
      /* private mode */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      sessionStorage.setItem(STORE_TURNS, JSON.stringify(turns));
    } catch (e) {
      /* ignore */
    }
    if (turns.length && bodyRef.current) {
      bodyRef.current.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [turns, mounted]);

  const setOpenState = useCallback((v) => {
    setOpen(v);
    try {
      sessionStorage.setItem(STORE_OPEN, v ? '1' : '0');
    } catch (e) {
      /* ignore */
    }
  }, []);

  const ask = useCallback((topic) => {
    if (!TOPICS[topic]) return;
    setTurns((prev) => (prev[prev.length - 1] === topic ? prev : [...prev, topic]));
    setDraft('');
  }, []);

  const onOpen = () => {
    setOpenState(true);
    requestAnimationFrame(() => {
      const desktop = window.matchMedia('(min-width: 640px)').matches;
      if (desktop) inputRef.current?.focus();
      if (!turns.length) ask('intro');
    });
  };

  const onClose = useCallback(() => setOpenState(false), [setOpenState]);

  const submit = (e) => {
    e.preventDefault();
    const hit = matchTopic(draft);
    if (hit) {
      ask(hit);
    } else if (draft.trim()) {
      const raw = draft.trim();
      setDraft('');
      setTurns((prev) => [...prev, `__miss__:${raw}`]);
    }
  };

  if (!mounted || onContact) return null;

  const asked = turns.filter((t) => !t.startsWith('__miss__'));
  const shortcuts = ROOT.filter((t) => !asked.includes(t)).slice(0, 4);

  return (
    <div className='cx-root' data-open={open ? 'true' : 'false'}>
      <div
        ref={bodyRef}
        className='cx-panel'
        role='dialog'
        aria-label='Ask me about my work'
        aria-hidden={!open}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
      >
        <header className='cx-head'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/images/avatar.jpg' alt='' width='30' height='30' className='cx-avatar' />
          <div>
            <p className='cx-name'>Abang Obed</p>
            <p className='cx-sub'>Ask about my work</p>
          </div>
          <button type='button' className='cx-close' aria-label='Close chat' onClick={onClose}>
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' aria-hidden='true'>
              <path d='M6 6l12 12M18 6L6 18' />
            </svg>
          </button>
        </header>

        <div className='cx-body'>
          {!turns.length ? (
            <p className='cx-empty'>
              Quick questions about the films, the security work, Cyphra, or how to reach me. Pick one, or type your own.
            </p>
          ) : null}
          {turns.map((t, i) =>
            t.startsWith('__miss__:') ? (
              <section className='cx-turn' key={`miss-${i}`}>
                <div className='cx-user-row'>
                  <p className='cx-user'>{t.replace('__miss__:', '')}</p>
                </div>
                <p className='cx-answer'>
                  I did not catch that one. I can talk about the films, the security work, Cyphra, the projects, or how to reach me. Try one of these.
                </p>
              </section>
            ) : (
              <Turn key={`${t}-${i}`} topic={t} instant={i < turns.length - 1} asked={asked} onAsk={ask} />
            ),
          )}
        </div>

        <form className='cx-foot' onSubmit={submit}>
          <div className='cx-inputrow'>
            <input
              ref={inputRef}
              className='cx-input'
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder='Ask about my work…'
              aria-label='Ask about my work'
            />
            <button type='submit' className='cx-send' aria-label='Send'>
              <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                <path d='M12 19V5' />
                <path d='M5 12l7-7 7 7' />
              </svg>
            </button>
          </div>
          <div className='cx-chips' data-shortcuts='true'>
            {shortcuts.map((t) => (
              <button type='button' key={t} className='cx-chip' onClick={() => ask(t)}>
                {TOPICS[t].label}
              </button>
            ))}
            {!shortcuts.length ? (
              <button
                type='button'
                className='cx-chip'
                onClick={() => {
                  setTurns([]);
                  ask('intro');
                }}
              >
                Start over
              </button>
            ) : null}
          </div>
        </form>
      </div>

      <button
        type='button'
        className='cx-fab'
        aria-label={open ? 'Close chat' : 'Ask me about my work'}
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {open ? (
          <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' aria-hidden='true'>
            <path d='M6 6l12 12M18 6L6 18' />
          </svg>
        ) : (
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
            <path d='M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z' />
          </svg>
        )}
      </button>
    </div>
  );
}
