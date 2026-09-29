/**
 * Canvas content data — all facts (employers, titles, dates, metrics)
 * mirror the resume and the previous site verbatim.
 */

export const profile = {
  name: 'Abang Obed',
  short: 'OBED',
  tagline: ['Security Engineer', 'Researcher & Filmmaker'],
  intro:
    'I work in security engineering and research, studying how systems behave under observation and where their assumptions break. The rest of the time I make films about people.',
  location: 'Abuja, Nigeria',
  origin: 'Cross River, Nigeria',
  email: 'obx@wearehackerone.com',
  status: 'Open to security & film work',
};

export const heroStickers = [
  { label: 'Security Engineer.', color: 'green', className: '-rotate-6', style: {} },
  { label: 'CPTS Certified', color: 'pink', className: 'rotate-6', style: {} },
  { label: 'CodeSandbox CVE Credited', color: 'sky', className: 'rotate-2', style: {} },
  { label: 'HackerOne Bounty', color: 'cream', className: '-rotate-3', style: {} },
  { label: 'SECURITY × CINEMA', color: 'yellow', className: 'rotate-3', style: {} },
];

export const skillTags = [
  { label: 'Offensive Security', color: 'bg-[#eeb63c]', icon: 'target' },
  { label: 'Detection & Response', color: 'bg-[#29a56c] !text-white', icon: 'radar' },
  { label: 'AppSec Research', color: 'bg-[#e01e5a] !text-white', icon: 'shield' },
  { label: 'Cinema', color: 'bg-[#3ec1f3]', icon: 'clapper' },
];

export const works = [
  {
    id: 'kynettic',
    tab: 'Project 01',
    color: '#3ec1f3',
    date: 'Jul 2026 — Present',
    title: 'Kynettic — Lead Security Engineer',
    kind: 'Security Engineering · Contract',
    description:
      'Web, API and mobile security assessments across authentication, authorization, session management, business logic and injection — plus protocol-layer review of DeFi systems: swap-logic integrity, access control and transaction validation.',
    stack: ['Web/API/Mobile', 'DeFi', 'Severity Reports', 'Remediation'],
    image: '/images/thumb-kynettic.jpg',
    alt: 'Kynettic — security engineering',
    links: [{ label: 'Details', href: '/about' }],
  },
  {
    id: 'change',
    tab: 'Project 02',
    color: '#eeb63c',
    date: '2026',
    title: 'Change — A Single Note. A Hundred Stories',
    kind: 'Short Film · Writer & Director',
    description:
      'When one decision disrupts an already connected group of lives, its consequences unfold in ways no one can control — one note of change becomes a hundred untold stories. 14 min, Crime / Thriller.',
    stack: ['Nigeria', '14 min', 'Crime / Thriller', 'English'],
    image: '/images/change-poster.jpg',
    alt: 'Change — short film poster',
    links: [
      { label: 'Film page', href: '/film' },
      { label: 'Trailer', href: 'https://www.youtube.com/@techcinemaresyst' },
    ],
  },
  {
    id: 'etwscope',
    tab: 'Project 03',
    color: '#e01e5a',
    tabInk: '#ffffff',
    date: '2025 — Research',
    title: 'EtwScope — STCMF Telemetry Research',
    kind: 'Security Research',
    description:
      'A secure telemetry-driven code mutation framework for controlled endpoint detection and response resilience testing in Windows environments — the research line behind the B.Tech thesis and Autobot OS tooling.',
    stack: ['ETW', 'Windows Internals', 'EDR', 'Python'],
    image: '/images/thumb-etwscope.jpg',
    alt: 'EtwScope — telemetry research',
    links: [{ label: 'Thesis', href: '/about' }],
  },
];

export const miniWorks = [
  {
    title: 'HackTheBox',
    meta: 'CPTS Certified',
    image: '/images/thumb-htb.jpg',
    href: 'https://www.hackthebox.com/',
    external: true,
  },
  {
    title: 'CodeSandbox',
    meta: 'CVE / Disclosure',
    image: '/images/thumb-csb.jpg',
    href: 'https://github.com/d3vobed',
    external: true,
  },
  {
    title: 'GigAfro',
    meta: 'Startup Marketplace',
    image: '/images/thumb-gigafro.jpg',
    href: '/about',
    external: false,
  },
  {
    title: 'NEMA-HQ',
    meta: 'Government SOC',
    image: '/images/thumb-nema.jpg',
    href: '/about',
    external: false,
  },
];

export const experience = [
  {
    org: 'Kynettic',
    role: 'Lead Security Engineer (Contract)',
    period: 'July 2026 — Present',
    place: 'Remote (Lagos, Nigeria)',
    points: [
      'Web application, API and mobile security assessments — authentication, authorization, session management, business logic, injection.',
      'Protocol-layer and application security in DeFi systems: swap-logic integrity, access control, transaction validation.',
      'Structured assessment reports with severity ratings, reproduction steps and prioritized remediation.',
    ],
  },
  {
    org: 'NEMA-HQ',
    role: 'Security Operations Specialist (Internship)',
    period: 'June 2025 — January 2026',
    place: 'Abuja, Nigeria',
    points: [
      'Live government SOC monitoring — SIEM alert triage, threat detection, incident investigation and response.',
      'Active Directory and endpoint security on HP ProLiant with MikroTik and Cisco; EDR and network segmentation.',
      'Vulnerability assessments incl. Huawei NetEngine CX600; supported GIS data-relay and Mission Control operations.',
    ],
  },
  {
    org: 'ATL Labs (PinkDraconian)',
    role: 'Technical Security Writer',
    period: 'June 14 — July 29, 2025',
    place: 'Tessenderlo, Belgium',
    points: [
      'Developed RBAC security courseware — access-control architecture, policy design, enforcement mechanisms.',
      'Research and technical writing on identity management, access control and security governance.',
    ],
  },
  {
    org: 'Phlex IT Events',
    role: 'Staff Backend Developer',
    period: 'April 2024 — July 2025',
    place: 'Remote (London, UK)',
    points: [
      'REST APIs with NestJS and PostgreSQL — auth, OTP verification, session management, ticketing at scale.',
      'Server-side pagination and caching across 50,000+ attendee records; MongoDB ORM architecture and CI/CD.',
    ],
  },
  {
    org: 'IDE Nigeria',
    role: 'Sr. Website Developer & System Architect (Contract)',
    period: 'January 2021 — January 2026',
    place: 'Abuja, Nigeria',
    points: [
      'Multi-company operations platform (Simdozi, Marblefoods, Stonerockers, Aoahomes, BigHomes) — Node.js, Laravel, Three.js, C#, Azure.',
      'Mobile-first interfaces with Tailwind CSS (+57% engagement); resolved IAM misconfigurations and cloud deployment security issues.',
    ],
  },
  {
    org: '234coins.net (Freelance, Upwork)',
    role: 'AWS Cloud Engineer',
    period: 'December 2023',
    place: 'Remote',
    points: [
      'Optimized AWS IAM service roles — reduced deployment errors by 50% on the Unity runtime engine.',
      'Diagnosed CORS misconfigurations; implemented real-time Redis monitoring for gameplay synchronization.',
    ],
  },
];

export const education = [
  {
    title: 'B.Tech in Cyber Security Science',
    org: 'Federal University of Technology, Minna',
    period: '2021 — 2026',
    detail:
      'Operating systems, Windows internals, endpoint security and telemetry research; custom Windows runtime and security tooling with Python and the Win32 API.',
  },
  {
    title: 'HTB Certified Penetration Testing Specialist (CPTS)',
    org: 'HackTheBox EU · Credential ID HTBCERT-2508B8ABE8',
    period: 'February 2024',
    detail:
      'Active Directory exploitation, penetration testing, vulnerability assessment, thick-client enumeration, reverse engineering, reporting.',
  },
];

export const awards = [
  { label: 'NCAIR Grant Recipient', detail: '$1k grant — Dementia ChatBot', year: '2025' },
  { label: 'CodeSandbox CVE', detail: 'GHSA-5jw5-g7mr-h26r', year: '2024' },
  { label: 'HackerOne Bounty', detail: 'X (Twitter) critical · $2K', year: '2023' },
  { label: 'HackTheBox 1st Place', detail: 'CyberSafe HQ', year: '2023' },
  { label: 'NCAIR Hackathon Winner', detail: '$1,000', year: '2025' },
  { label: 'Gemini Hackathon', detail: 'Special Recognition', year: '2026' },
];

export const film = {
  title: 'Change',
  subtitle: 'A Single Note. A Hundred Stories',
  synopsis:
    'When one decision disrupts an already connected group of lives, its consequences unfold in ways no one can control. Through raw encounters and struggles, the story explores how even the smallest action can echo across many lives — turning one note of change into a hundred untold stories.',
  meta: [
    ['Year', '2026'],
    ['Runtime', '14 min'],
    ['Genre', 'Crime / Thriller'],
    ['Country', 'Nigeria'],
    ['Language', 'English'],
  ],
  links: [
    { label: 'IMDb', href: 'https://www.imdb.com/name/nmobedabang' },
    { label: 'TMDB', href: 'https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories' },
    { label: 'Letterboxd', href: 'https://letterboxd.com/obx03' },
    { label: 'Vimeo', href: 'https://vimeo.com/obx03' },
    { label: 'YouTube', href: 'https://www.youtube.com/@techcinemaresyst' },
  ],
  stills: [
    { src: '/images/film-still.png', caption: 'Tech (Obed Ilabija) — the plan takes shape.' },
    { src: '/images/film-still1.png', caption: 'Danielle (Magdalene Egbe) — a single decision unravels.' },
    { src: '/images/film-still2.png', caption: 'Connected lives, one note of change.' },
  ],
  cast: [
    ['Magdalene Egbe', 'Danielle'],
    ['Clement Luka', 'Thug'],
    ['Obed Ilabija', 'Tech'],
    ['Emmanuel Jude', 'Timid'],
    ['Joel Joseph', 'Thankful'],
    ['Emmanuel Abang', 'Terri'],
    ['Micheal Otogo', 'Bartender'],
    ['Favour Anthony', 'Customer'],
  ],
};

export const externalWriting = [
  {
    tag: 'Aug 2025 · Medium',
    title: 'The man who was marked for death',
    excerpt:
      'On Hemingway’s phrase, finitude, and moving from being marked for death toward being marked for opportunity.',
    href: 'https://obx03.medium.com/the-man-who-was-marked-for-death-8c20d7f8f70a',
  },
  {
    tag: 'Aug 2025 · Medium',
    title: 'Bleaching through time',
    excerpt:
      'Time as experience rather than checklist — stripping away deadlines to find what actually matters.',
    href: 'https://obx03.medium.com/bleaching-through-time-8e758ec66736',
  },
  {
    tag: 'Jul 2025 · Blog',
    title: 'The Beginning Was Always The End',
    excerpt: 'An essay on endings that were present from the start.',
    href: 'https://d3vobed.github.io/posts/The-Beginning-Was-Always-The-End/',
  },
  {
    tag: 'Mar 2024 · Medium',
    title: '{HTB} Analysis Writeup',
    excerpt: 'Hands-on analysis from the HackTheBox labs — methodology, tooling and lessons.',
    href: 'https://obx03.medium.com',
  },
];

export const tickerWords = [
  'Security Engineering',
  'Offensive Research',
  'Detection & Response',
  'Malware Analysis',
  'AppSec',
  'Filmmaking',
  'Tech Cinema',
];
