/* ============================================================
   OBX03 — all site content. Facts mirror the LinkedIn profile
   (source of truth) plus verified history from the original CV.
   Written in Obed's own voice. No em dashes anywhere.
   ============================================================ */

export const profile = {
  firstName: 'OBED',
  name: 'Abang Obed',
  handle: 'obx03',
  headline: 'Cybersecurity Researcher | Filmmaker',
  email: 'obx@wearehackerone.com',
  altEmail: 'abangobed360@gmail.com',
  base: 'Abuja, Nigeria',
  timezone: 'Africa/Lagos',
  availability: 'Available for security & film projects',
  site: 'obx03.tech',
};

export const typedRoles = [
  'Security Researcher',
  'Filmmaker',
  'Reverse Engineer',
  'Storyteller',
];

/* floating dev objects around the hero. three, slow, quiet. */
export const floatTiles = [
  { icon: 'camera', color: 'pink', style: { top: '13%', left: '4%', '--rot': '-6deg', '--dur': '9s' } },
  { icon: 'terminal', color: 'paper', style: { top: '14%', right: '8%', '--rot': '5deg', '--dur': '8s', '--delay': '.8s' } },
  { icon: 'bug', color: 'green', style: { top: '64%', left: '5%', '--rot': '-4deg', '--dur': '10s', '--delay': '1.4s' } },
];

export const hero = {
  window: 'welcome.txt',
  label: 'hello, my name is',
  intro: 'I break systems to make them safer, and make films that stick.',
};

export const about = {
  kicker: '01',
  title: 'About This Obed...',
  sub: 'The short version. The honest one.',
  paragraphs: [
    'Obed is a cybersecurity researcher and filmmaker based in Abuja, Nigeria. He spends most days studying how systems break, and most nights turning what he finds into tools, writeups or stories.',
    'He just co-founded Cyphra, a cybersecurity consulting firm, where penetration tests and security assessments are the daily bread. He has found and responsibly disclosed bugs in products like CodeSandbox, X (Twitter) and Google Chrome, holds the CPTS certification, and keeps a running list of things he still wants to break.',
    'On the other screen he works as creative director at Icon Digital Edge. There he wrote, directed and edited SFH Access for the Society For HealthCare Access, pulling first AC duty for the DOP. His short film Change (2026) lives under Tech Cinema on YouTube.',
    'The two crafts share one engine: curiosity. Asking how it works, asking why it fails, and telling the story honestly either way. If you are building something meaningful, he would like to hear about it.',
  ],
  photos: [
    { src: '/images/about.jpg', caption: 'Abuja, NG', className: 'left' },
    { src: '/images/avatar.jpg', caption: 'obx03', className: 'right' },
  ],
  facts: [
    ['Lives in', 'Abuja, Nigeria'],
    ['Email', 'obx@wearehackerone.com'],
    ['Currently', 'Co-founding Cyphra & directing at Icon Digital Edge'],
  ],
};

export const reel = {
  title: 'highlights',
  ext: '.mov',
  sub: 'A looping reel of frames from my films, research and builds.',
  poster: '/images/change-poster.jpg',
};

export const worksDone = {
  kicker: '02',
  title: 'Works Done',
  sub: 'Security, film & backend. Sometimes all three in one week.',
  frame: { brand: 'OBX/WORKS', meta: ['6 roles', 'security · film · backend', '2025/2026 exp.'] },
  roles: [
    {
      idx: 'ROLE 01',
      title: 'Cyphra, Co-Founder',
      body: 'Co-founded a cybersecurity consulting firm. Penetration testing, vulnerability assessments and security advisory for real products, from the first scoping call to the final report.',
      stack: 'Offensive Security · VAPT · Advisory',
      href: null,
    },
    {
      idx: 'ROLE 02',
      title: 'Icon Digital Edge, Creative Director',
      body: 'Direct the creative side of client productions, currently SFH Access for the Society For HealthCare Access. Wrote, edited, directed and pulled 1st AC duty for the DOP across skits, talking heads and a podcast session.',
      stack: 'Direction · Writing · Editing · 1st AC',
      href: '/filmography/sfh-access',
    },
    {
      idx: 'ROLE 03',
      title: 'Kynettic, Lead Security Engineer',
      body: 'Lead authorized penetration tests across production web, mobile and API infrastructure for a P2P trading platform. Reported sensitive data exposure, access control weaknesses and business logic flaws in payment workflows with risk based priorities.',
      stack: 'Web · API · Mobile · DeFi',
      href: null,
    },
    {
      idx: 'ROLE 04',
      title: 'Gigafro, Security Consultant',
      body: 'Evaluated platform security across real time geolocation, gig dispatch and worker ranking systems. Vulnerability assessments of the marketplace web, mobile and backend, covering authentication, authorization and business logic.',
      stack: 'VAPT · Business Logic · APIs',
      href: null,
    },
    {
      idx: 'ROLE 05',
      title: 'NEMA, System Network Administrator',
      body: 'Enterprise network infrastructure at the emergency management agency: fibre optic links, MikroTik and Cisco gear, and Mission Control Center support with GIS geolocation and distress signal tracking. Deployed Active Directory and an interdepartmental file management system.',
      stack: 'MikroTik · Cisco · AD · GIS · MCC',
      href: null,
    },
    {
      idx: 'ROLE 06',
      title: 'Myphlexit, Staff Backend Developer',
      body: 'Backend services and REST APIs with NestJS and PostgreSQL for authentication, ticketing and core workflows. Designed the MongoDB data access architecture and set up CI/CD with AWS CloudFormation.',
      stack: 'NestJS · PostgreSQL · MongoDB · AWS',
      href: null,
    },
  ],
};

export const educationBlock = {
  kicker: '03',
  title: 'Education',
  sub: 'One degree in progress, one certification that actually tested me.',
  schools: [
    {
      school: 'Federal University of Technology, Minna',
      degree: 'B.Tech, CyberSecurity Science',
      dates: '2021 - 2026',
      note: 'Thesis on a secure telemetry-driven code mutation framework for EDR resilience testing in Windows environments.',
    },
    {
      school: 'Hack TheBox Academy',
      degree: 'Certified Penetration Testing Specialist (CPTS)',
      dates: 'February 2024 · HTBCERT-2508B8ABE8',
      note: 'Active Directory exploitation, penetration testing, vulnerability assessment, reverse engineering and reporting.',
    },
  ],
};

export const projectsBlock = {
  kicker: '04',
  title: 'Projects',
  sub: "Ideas I had and ran with. Some shipped, all taught me something.",
  window: { left: '6 items', mid: '2026 K in disk', right: 'curiosity available' },
  projects: [
    {
      icon: 'film',
      year: '2025',
      name: 'Video Storybook',
      body: 'AI video editing application that turns still images into wide angled shots, event continuity and dynamic motion for storyboard previews.',
      tags: 'MiDaS · TensorFlow · ControlNet · ML Kit',
    },
    {
      icon: 'smartphone',
      year: '2024',
      name: 'Azure Stack USSD Service',
      body: "Scalable USSD service on Azure Stack Hub for enterprise mobile access to USSD services on network, with Africa's Talking.",
      tags: 'USSD · ASP.NET Web API · Azure',
    },
    {
      icon: 'navigation',
      year: '2026',
      name: 'LiDAR Spatial Assistant',
      body: 'iOS app using device LiDAR for real time 3D room scanning and object detection with audio navigation cues for blind users. Gemini hackathon special recognition.',
      tags: 'React Native · YOLOv9 · ARCore',
    },
    {
      icon: 'terminal',
      year: '2023',
      name: 'Autobot OS',
      body: 'Custom Python operating system runtime to observe execution paths and collect endpoint telemetry for EDR resilience research.',
      tags: 'Python · Win32 API · ETW',
    },
    {
      icon: 'activity',
      year: '2024',
      name: 'EtwScope',
      body: 'Windows telemetry tooling for tracing and visibility research, the companion to my thesis work on EDR resilience.',
      tags: 'ETW · C · Python',
    },
    {
      icon: 'monitor',
      year: '2026',
      name: 'obx03.tech',
      body: 'This site. Hand built with Next.js, dither textures, film grain and one floating camera too many.',
      tags: 'Next.js · Tailwind',
    },
  ],
};

export const honorsBlock = {
  kicker: '05',
  title: 'Honors',
  sub: 'Things I am quietly proud of.',
  honors: [
    {
      icon: 'sparkles',
      color: 'sky',
      title: 'Gemini Hackathon Recognition',
      body: 'Special recognition for the LiDAR spatial assistant for blind users.',
    },
    {
      icon: 'shield',
      color: 'pink',
      title: 'CodeSandbox CVE Credited',
      body: 'Credited on GHSA-5jw5-g7mr-h26r for a high severity security report on CodeSandbox.',
    },
    {
      icon: 'trophy',
      color: 'green',
      title: 'NCAIR Hackathon Winner',
      body: '$1,000 grand prize for a conversational AI companion for dementia care.',
    },
    {
      icon: 'bug',
      color: 'yellow',
      title: 'HackerOne X Bounty',
      body: 'Improper access control on X (Twitter), critical severity, $2K bounty on HackerOne.',
    },
    {
      icon: 'chrome',
      color: 'orange',
      title: 'Google Chrome Bug Found',
      body: 'Found and responsibly disclosed a security bug in Google Chrome.',
    },
  ],
};

/* ---------------- filmography ---------------- */

export const filmography = {
  kicker: 'WORKS / FILM',
  title: 'The gallery',
  sub: 'Two productions, hung properly. Click any still to see it big, the way a gallery intends.',
  entries: [
    {
      idx: 'FILM 01',
      href: '/filmography/change',
      cover: '/images/film-still.png',
      title: 'Change',
      sub: 'A Single Note. A Hundred Stories',
      meta: '2026 · 14 min · Crime / Thriller',
      credit: 'Written & directed by Abang Obed.',
    },
    {
      idx: 'FILM 02',
      href: '/filmography/sfh-access',
      cover: '/images/sfh/sfh-3.jpg',
      title: 'SFH Access',
      sub: 'Society For HealthCare Access',
      meta: '2026 · Skits · Talking Heads · Podcast',
      credit: 'Creative direction under Icon Digital Edge.',
    },
  ],
};

export const filmChange = {
  slug: 'change',
  title: 'Change',
  subtitle: 'A Single Note. A Hundred Stories',
  year: '2026',
  synopsis:
    'When one decision disrupts an already connected group of lives, its consequences unfold in ways no one can control. Through raw encounters and struggles, the story explores how even the smallest action can echo across many lives, turning one note of change into a hundred untold stories.',
  meta: [
    ['Year', '2026'],
    ['Runtime', '14 min'],
    ['Genre', 'Crime / Thriller'],
    ['Country', 'Nigeria'],
    ['Language', 'English'],
  ],
  credit: 'Written & directed by Abang Obed.',
  links: [
    { label: 'TMDB', href: 'https://www.themoviedb.org/movie/1602112-change-a-single-note-a-hundred-stories' },
    { label: 'Watch on YouTube', href: 'https://youtu.be/cdme3UoB_vY' },
    { label: 'Letterboxd', href: 'https://letterboxd.com/obx03' },
    { label: 'Vimeo', href: 'https://vimeo.com/obx03' },
  ],
  trailer: 'https://www.youtube.com/embed/cdme3UoB_vY',
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
  stills: [
    { src: '/images/film-still.png', caption: 'Tech (Obed Ilabija), the plan takes shape' },
    { src: '/images/film-still1.png', caption: 'Danielle (Magdalene Egbe), a single decision unravels' },
    { src: '/images/film-still2.png', caption: 'Connected lives, one note of change' },
    { src: '/images/change-hero.jpg', caption: 'Poster frame' },
    { src: '/images/film-char.png', caption: 'Character study' },
    { src: '/images/change-poster.jpg', caption: 'One sheet' },
  ],
};

export const filmSfh = {
  slug: 'sfh-access',
  title: 'SFH Access',
  subtitle: 'Society For HealthCare Access',
  year: '2026',
  synopsis:
    'Creative direction for Society For HealthCare Access under Icon Digital Edge. I wrote, edited, directed and pulled first AC duty for the DOP. Short skits, talking head videos and a podcast session, built to make healthcare access feel human.',
  meta: [
    ['Year', '2026'],
    ['Client', 'Society For HealthCare Access'],
    ['Company', 'Icon Digital Edge'],
    ['Role', 'Creative Director'],
    ['Format', 'Skits · Talking Heads · Podcast'],
  ],
  credit: 'Wrote, edited, directed & 1st AC to the DOP.',
  links: [
    { label: 'TikTok @sfh_access', href: 'https://www.tiktok.com/@sfh_access' },
  ],
  stills: [
    { src: '/images/sfh/sfh-1.jpg', caption: 'The full cast and crew, between takes' },
    { src: '/images/sfh/sfh-2.jpg', caption: 'Podcast session, mid conversation' },
    { src: '/images/sfh/sfh-3.jpg', caption: 'Rolling. 4K 25p on the interview setup' },
  ],
  videos: [
    { id: '7701765257068367125', label: 'Field day with the team' },
    { id: '7701004189853322516', label: 'Behind the scenes' },
    { id: '7699434715975109889', label: 'On set' },
    { id: '7699067184814755093', label: 'Access stories' },
    { id: '7698692416873844020', label: 'Cutting room' },
    { id: '7698440225239944468', label: 'The work continues' },
  ],
};

export const techCinema = {
  title: 'Tech Cinema',
  body: 'My film work lives under Tech Cinema on YouTube, where the shorts, behind the scenes process and visual experiments get published.',
  href: 'https://www.youtube.com/@techcinemaresyst',
};

/* ---------------- writing ---------------- */

export const externalWriting = [
  { title: 'Essays & security writeups', tag: 'Medium', url: 'https://medium.com/@obx03' },
  { title: 'Older writeups, HTB, Active Directory, engineering', tag: 'Blog', url: 'https://d3vobed.github.io' },
  { title: 'Technical notes & research', tag: 'GitHub', url: 'https://github.com/d3vobed' },
  { title: 'TryHackMe profile', tag: 'TryHackMe', url: 'https://tryhackme.com/p/obx03' },
];
