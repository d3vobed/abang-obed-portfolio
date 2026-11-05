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
  'Backend Developer',
  'Storyteller',
];

export const heroStickers = [
  { label: 'Security × Cinema', color: 'orange', className: 'top' },
  { label: 'Security Engineer.', color: 'green', className: 'left' },
  { label: 'CPTS Certified', color: 'pink', className: 'right' },
  { label: 'Codesandbox CVE Credited', color: 'sky', className: 'bleft' },
  { label: 'HackerOne Bounty', color: 'yellow', className: 'bright' },
];

/* floating dev objects around the hero (futc-style, but hacking themed) */
export const floatTiles = [
  { icon: 'camera', color: 'pink', style: { top: '16%', left: '6%', '--rot': '-6deg', '--dur': '7.5s' } },
  { icon: 'terminal', color: 'paper', style: { top: '12%', right: '8%', '--rot': '5deg', '--dur': '6.5s', '--delay': '.6s' } },
  { icon: 'bug', color: 'green', style: { top: '52%', left: '3%', '--rot': '-4deg', '--dur': '8s', '--delay': '1.1s' } },
  { icon: 'lock', color: 'yellow', style: { top: '58%', right: '4%', '--rot': '7deg', '--dur': '7s', '--delay': '.3s' } },
  { icon: 'wifi', color: 'sky', style: { top: '78%', left: '12%', '--rot': '3deg', '--dur': '9s', '--delay': '.9s' } },
  { icon: 'cpu', color: 'sky', style: { top: '30%', right: '2%', '--rot': '-7deg', '--dur': '7.8s', '--delay': '1.4s' } },
];

export const tickerWords = [
  'Security × Cinema',
  'CPTS Certified',
  'CVE Credited',
  'HackerOne',
  'Filmmaker',
  'Abuja NG',
  'Open to Work',
];

export const about = {
  kicker: '01',
  title: 'About Me',
  sub: 'You scrolled past the hero. It gets better down here.',
  paragraphs: [
    'I am a curious person. I like building things and taking them apart to see how they work.',
    'That curiosity pulled me into cybersecurity. I work across offensive security, reverse engineering, malware and application security research. Most of my time goes into how systems behave, how vulnerabilities show up, and how attacks actually work under the surface. I enjoy turning ideas into tools and research people can actually use, for challenges like hackathons.',
    'Outside security I write and make films. It sounds like a different world but it runs on the same curiosity. Asking questions, solving problems, telling stories that matter.',
    'Always learning, always building. If you enjoy solving meaningful problems, I would like to hear from you.',
  ],
  photos: [
    { src: '/images/about.jpg', caption: 'Abuja, NG', className: 'left' },
    { src: '/images/avatar.jpg', caption: 'obx03', className: 'right' },
  ],
  cv: '/files/abang-obed-resume.pdf',
};

export const reel = {
  title: 'highlights',
  ext: '.mov',
  sub: 'A looping reel of frames from my films, research and builds. Dither it if you like.',
  poster: '/images/change-poster.jpg',
};

export const make = {
  kicker: '02',
  title: 'What I Make',
  sub: 'Security, film & software. Sometimes all three in one week.',
  presets: [
    {
      idx: 'PRESET 01',
      title: 'Offensive Security',
      body: 'Web, API and mobile penetration testing, DeFi protocol reviews, vulnerability research and responsible disclosure.',
      stack: 'Kynettic · Gigafro · HackerOne · CVE',
      href: '/works/cybersecurity',
    },
    {
      idx: 'PRESET 02',
      title: 'Film & Creative Direction',
      body: 'Writing, directing and editing. Change (2026) and creative direction for SFH Access at Icon Digital Edge.',
      stack: 'Change · SFH Access · Tech Cinema',
      href: '/works/film',
    },
    {
      idx: 'PRESET 03',
      title: 'Networks & Operations',
      body: 'Enterprise network administration, Active Directory, security monitoring and Mission Control support at NEMA.',
      stack: 'MikroTik · Cisco · GIS · MCC',
      href: '/works/cybersecurity',
    },
    {
      idx: 'PRESET 04',
      title: 'Software & Backend',
      body: 'REST APIs, data access architecture and CI/CD pipelines for products that carry real traffic.',
      stack: 'NestJS · PostgreSQL · AWS · MongoDB',
      href: '/works/devops',
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
  sub: 'Side builds that turned into real tools.',
  projects: [
    {
      year: '2025',
      name: 'Video Storybook',
      body: 'AI video editing application that turns still images into wide angled shots, event continuity and dynamic motion for storyboard previews. Built with MiDaS, TensorFlow, ControlNet, Skia and ML Kit.',
      tags: 'React Native · MLKit · MiDaS',
    },
    {
      year: '2024',
      name: 'Azure Stack USSD Service',
      body: 'Scalable USSD service on Azure Stack Hub for enterprise mobile access to USSD services on network, with Africa\'s Talking.',
      tags: 'USSD · ASP.NET Web API · Azure',
    },
    {
      year: '2026',
      name: 'LiDAR Spatial Assistant',
      body: 'iOS app using device LiDAR for real time 3D room scanning and object detection with YOLOv9 and ARCore, audio navigation cues for blind users. Gemini Hackathon special recognition.',
      tags: 'React Native · YOLOv9 · ARCore',
    },
    {
      year: '2023',
      name: 'Autobot OS',
      body: 'Custom Python operating system runtime to observe execution paths and collect endpoint telemetry for EDR resilience research.',
      tags: 'Python · Win32 API · ETW',
    },
  ],
};

export const honorsBlock = {
  kicker: '05',
  title: 'Honors',
  sub: 'Things I am quietly proud of.',
  honors: [
    {
      color: 'pink',
      title: 'CodeSandbox CVE Credited',
      body: 'Credited on GHSA-5jw5-g7mr-h26r for a high severity security report on CodeSandbox.',
    },
    {
      color: 'yellow',
      title: 'HackerOne X Bounty',
      body: 'Improper access control on X (Twitter), critical severity, $2K bounty on HackerOne.',
    },
    {
      color: 'green',
      title: 'NCAIR Hackathon Winner',
      body: '$1,000 grand prize for a conversational AI companion for dementia care.',
    },
    {
      color: 'sky',
      title: 'Gemini Hackathon Recognition',
      body: 'Special recognition for the LiDAR spatial assistant for blind users.',
    },
    {
      color: 'orange',
      title: 'CyberSafe HQ 1st Place',
      body: 'First place, HackTheBox CyberSafe HQ CTF.',
    },
    {
      color: 'paper',
      title: 'NACSSS Awareness Lead',
      body: 'Designed the graphics and demo concepts for Cybersecurity Awareness Month at FUT Minna.',
    },
  ],
};

/* ---------------- works ---------------- */

export const worksSecurity = {
  slug: 'cybersecurity',
  title: 'Cybersecurity',
  sub: 'Assessments, research and network operations. Grouped like presets, because that is how my brain files them.',
  presets: [
    {
      idx: 'SEC 01',
      title: 'Kynettic, Lead Security Engineer',
      body: 'Authorized penetration testing across production web, mobile and API infrastructure for a P2P trading platform. Found sensitive financial data exposure, user enumeration and access control weaknesses, plus business logic flaws in payment workflows and weak cryptographic entropy in biometric checks. Reported with risk based priorities so engineers could actually fix things.',
      stack: 'Web · API · Mobile · DeFi · Reporting',
      href: 'https://kynettic.com',
    },
    {
      idx: 'SEC 02',
      title: 'Gigafro, Security Consultant',
      body: 'Evaluated platform security across real time geolocation, gig dispatch, worker ranking and network based distribution. Vulnerability assessments of the marketplace web, mobile and backend, covering authentication, authorization, API endpoints, data handling and business logic.',
      stack: 'VAPT · Business Logic · APIs',
      href: 'https://gigafro.com',
    },
    {
      idx: 'SEC 03',
      title: 'NEMA, System Network Administrator',
      body: 'Enterprise network infrastructure at the emergency management agency: fibre optic links, MikroTik and Cisco gear, security monitoring and access management. Supported Mission Control Center operations with GIS geolocation, triangulation and distress signal tracking. Deployed Active Directory and an interdepartmental digital file management system.',
      stack: 'MikroTik · Cisco · AD · GIS · MCC',
      href: null,
    },
    {
      idx: 'SEC 04',
      title: 'CodeSandbox, Vulnerability Report',
      body: 'Reported a high severity security issue through the GitHub Security Advisory program. Officially credited on GHSA-5jw5-g7mr-h26r.',
      stack: 'Responsible Disclosure · CVE',
      href: 'https://github.com/code-sandbox/security-advisories/security/advisories/GHSA-5jw5-g7mr-h26r',
    },
    {
      idx: 'SEC 05',
      title: 'X (Twitter) via HackerOne',
      body: 'Improper access control vulnerability classified as critical severity, recognized with a $2K bounty on HackerOne.',
      stack: 'HackerOne · Access Control',
      href: 'https://hackerone.com',
    },
    {
      idx: 'SEC 06',
      title: 'EtwScope & Windows Telemetry Research',
      body: 'Built EtwScope and Autobot OS to observe execution paths and collect endpoint telemetry, researching how code level changes affect Windows security visibility and EDR resilience. Written up in my B.Tech thesis.',
      stack: 'ETW · Win32 API · Python · EDR',
      href: 'https://github.com/d3vobed',
    },
  ],
};

export const worksDev = {
  slug: 'devops',
  title: 'Developer Operations',
  sub: 'Backend engineering, cloud and the builds in between.',
  presets: [
    {
      idx: 'DEV 01',
      title: 'Myphlexit, Staff Backend Developer',
      body: 'Backend services and REST APIs with NestJS and PostgreSQL powering authentication, ticket management and core workflows. Server side pagination, optimized queries and client caching for datasets over 50,000 records. Designed the MongoDB data access architecture and set up CI/CD with AWS CloudFormation.',
      stack: 'NestJS · PostgreSQL · MongoDB · AWS',
      href: null,
    },
    {
      idx: 'DEV 02',
      title: 'IDE Nigeria, Sr. Website Developer & System Architect',
      body: 'Multi company operations platform on Node.js, Laravel, Three.js, C# and Azure with role based access control and a modular department structure. Mobile first Tailwind interfaces that cut page load times and lifted engagement by 57%.',
      stack: 'Node.js · Laravel · Three.js · Azure',
      href: null,
    },
    {
      idx: 'DEV 03',
      title: 'ATL Labs, Technical Security Writer',
      body: 'Built RBAC security courseware covering access control architecture, policy design and enforcement, plus research and technical writing on identity management for a security education programme.',
      stack: 'RBAC · Courseware · Research',
      href: 'https://pinkdraconian.com',
    },
    {
      idx: 'DEV 04',
      title: '234coins.net, AWS Cloud Engineer',
      body: 'Fixed AWS IAM service roles to resolve regional permission and upload failures on a Unity runtime, diagnosed CORS misconfigurations, and implemented real time Redis monitoring for token loading and device activity.',
      stack: 'AWS IAM · Redis · Unity',
      href: null,
    },
    {
      idx: 'DEV 05',
      title: 'EtwScope, Security Tooling',
      body: 'Windows telemetry tooling for tracing and visibility research, the companion to my thesis work on EDR resilience.',
      stack: 'ETW · C · Python',
      href: 'https://github.com/d3vobed',
    },
    {
      idx: 'DEV 06',
      title: 'Video Storybook & Azure USSD',
      body: 'AI video editing from still images (MiDaS, TensorFlow, ControlNet, Skia, ML Kit) and a scalable USSD service on Azure Stack Hub with Africa\'s Talking.',
      stack: 'ML Kit · Azure · USSD',
      href: '/blog',
    },
  ],
};

/* ---------------- film ---------------- */

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
