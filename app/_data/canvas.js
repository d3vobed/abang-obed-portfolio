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

/* floating dev objects around the hero, three per side, and every
   single one of them is a toy. click to open, click again to close. */
export const floatTiles = [
  { icon: 'camera', color: 'pink', side: 'left', action: 'gallery', label: 'Open the stills gallery', style: { top: '11%', left: '3.5%', '--rot': '-6deg', '--dur': '9s' } },
  { icon: 'cpu', color: 'orange', side: 'left', action: 'sysinfo', label: 'Open the system readout', style: { top: '46%', left: '2%', '--rot': '4deg', '--dur': '11s', '--delay': '.6s' } },
  { icon: 'bug', color: 'green', side: 'left', action: 'game', label: 'Play bug.exe', style: { top: '79%', left: '4%', '--rot': '-4deg', '--dur': '10s', '--delay': '1.4s' } },
  { icon: 'terminal', color: 'paper', side: 'right', action: 'notepad', label: 'Open the notepad', style: { top: '13%', right: '6.5%', '--rot': '5deg', '--dur': '8s', '--delay': '.8s' } },
  { icon: 'wifi', color: 'sky', side: 'right', action: 'subscan', label: 'Scan subdomains on crt.sh', style: { top: '48%', right: '3%', '--rot': '-3deg', '--dur': '11s', '--delay': '1.8s' } },
  { icon: 'lock', color: 'yellow', side: 'right', action: 'cipher', label: 'Open the cipher toy', style: { top: '81%', right: '5.5%', '--rot': '3deg', '--dur': '8s', '--delay': '2.1s' } },
];

export const hero = {
  window: 'welcome.txt',
  label: 'hello, my name is',
  intro: 'I break systems to make them safer, and make films that stick.',
  hint: 'ps: the floating tiles are toys now. click around. the terminal still keeps your notes.',
  now: 'Co-founding Cyphra & directing at Icon Digital Labs',
  focus: 'Offensive security · Malware · Film',
  cert: 'CPTS · Hack The Box, Feb 2024',
  rails: [
    { n: '01', label: 'about', href: '#about' },
    { n: '02', label: 'works done', href: '#works' },
    { n: '03', label: 'education', href: '#education' },
    { n: '04', label: 'projects', href: '#projects' },
    { n: '05', label: 'honors', href: '#honors' },
  ],
};

export const notepad = {
  title: 'note.txt',
  seed:
    'ps. this pad is yours.\n' +
    'i use mine to dump ideas mid build:\n' +
    'exploit notes, shot lists, half thoughts.\n\n' +
    'type here. it saves itself on this device.\n' +
    '  - obed',
};

export const about = {
  kicker: '01',
  title: 'About This Obed...',
  sub: 'The short version. The honest one.',
  paragraphs: [
    'Obed is a cybersecurity researcher and filmmaker based in Abuja, Nigeria. He spends most days studying how systems break, and most nights turning what he finds into tools, writeups or stories.',
    'He just co-founded Cyphra, a cybersecurity consulting firm, where penetration tests and security assessments are the daily bread. He has found and responsibly disclosed bugs in products like CodeSandbox and X (Twitter), holds the CPTS certification, and keeps a running list of things he still wants to break.',
    'On the other screen he works as creative director at Icon Digital Labs. There he wrote, directed and edited SFH Access for the Society For HealthCare Access, pulling first AC duty for the DOP. His short film Change (2026) lives under Tech Cinema on YouTube.',
    'The two crafts share one engine: curiosity. Asking how it works, asking why it fails, and telling the story honestly either way. If you are building something meaningful, he would like to hear about it.',
  ],
  photos: [
    { src: '/images/about.jpg', caption: 'Abuja, NG', className: 'left' },
    { src: '/images/avatar.jpg', caption: 'obx03', className: 'right' },
  ],
  facts: [
    ['Lives in', 'Abuja, Nigeria'],
    ['Email', 'obx@wearehackerone.com'],
    ['Currently', 'Co-founding Cyphra & directing at Icon Digital Labs'],
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
  sub: 'One stage each for the work, twelve roles deep. The reel advances on its own; click a segment to take over.',
  frame: { brand: 'OBX/WORKS', meta: ['12 roles', 'security · film · cloud · builds', '2021/2026'] },
  roles: [
    {
      idx: 'ROLE 01',
      title: 'Cyphra',
      body: 'Co-founded a cybersecurity consulting firm. Penetration testing, vulnerability assessments and security advisory for real products, from the first scoping call to the final report.',
      stack: 'Offensive Security · VAPT · Advisory',
      headline: 'Security consulting, scoping call to final report',
      img: '/images/work-cyphra.jpg',
      tileColor: null,
      mark: null,
      href: 'https://cyphraltd.tech/',
      ext: true,
    },
    {
      idx: 'ROLE 02',
      title: 'Icon Digital Labs',
      body: 'Direct the creative side of client productions, currently SFH Access for the Society For HealthCare Access. Wrote, edited, directed and pulled 1st AC duty for the DOP across skits, talking heads and a podcast session.',
      stack: 'Direction · Writing · Editing · 1st AC',
      headline: 'Film and branded content, directed end to end',
      img: '/images/sfh/sfh-2.jpg',
      tileColor: null,
      mark: null,
      href: '/filmography',
      ext: false,
    },
    {
      idx: 'ROLE 03',
      title: 'Kynettic',
      body: 'Lead authorized penetration tests across production web, mobile and API infrastructure for a P2P trading platform. Reported sensitive data exposure, access control weaknesses and business logic flaws in payment workflows with risk based priorities.',
      stack: 'Web · API · Mobile · DeFi',
      headline: 'Pentesting a P2P trading platform',
      img: '/images/work-kynettic.jpg',
      tileColor: null,
      mark: null,
      href: 'https://kynettic.com/',
      ext: true,
    },
    {
      idx: 'ROLE 04',
      title: 'Streetvibex (Gigafro)',
      body: 'Security consulting for the gig marketplace, now live as Streetvibex. Evaluated real time geolocation, gig dispatch and worker ranking systems across web, mobile and backend, covering authentication, authorization and business logic.',
      stack: 'VAPT · Business Logic · APIs',
      headline: 'Security across a gig marketplace',
      img: '/images/work-streetvibex.jpg',
      tileColor: null,
      mark: null,
      href: 'https://streetvibex.com/',
      ext: true,
    },
    {
      idx: 'ROLE 05',
      title: 'NEMA',
      body: 'Enterprise network infrastructure at the emergency management agency: fibre optic links, MikroTik and Cisco gear, and Mission Control Center support with GIS geolocation and distress signal tracking. Deployed Active Directory and an interdepartmental file management system.',
      stack: 'MikroTik · Cisco · AD · GIS · MCC',
      headline: 'Networks and Mission Control support',
      img: '/images/work-nema.jpg',
      tileColor: null,
      mark: null,
      href: 'https://nema-app-demo.vercel.app/',
      ext: true,
    },
    {
      idx: 'ROLE 06',
      title: 'Myphlexit',
      body: 'Backend services and REST APIs with NestJS and PostgreSQL for authentication, ticketing and core workflows. Designed the MongoDB data access architecture and set up CI/CD with AWS CloudFormation.',
      stack: 'NestJS · PostgreSQL · MongoDB · AWS',
      headline: 'Backend APIs with NestJS and PostgreSQL',
      img: '/images/work-phlexit.jpg',
      tileColor: null,
      mark: null,
      href: 'https://www.myphlexit.com/',
      ext: true,
    },
    {
      idx: 'ROLE 07',
      title: 'Stone Rockers',
      body: 'Client build under Icon Digital Labs for an engineering construction company: marketing site with isometric 3D visuals, project showcase and a direct contact funnel.',
      stack: 'Web · 3D Visuals · Client Build',
      headline: 'Engineering company web presence',
      img: '/images/work-stonerockers.jpg',
      tileColor: null,
      mark: null,
      href: 'https://stonerockers.com/',
      ext: true,
    },
    {
      idx: 'ROLE 08',
      title: 'Marble Foods',
      body: 'Client build for an agricultural commodities company: product catalogue across six value chains, sustainability story, order tracking and insights.',
      stack: 'Web · Catalogue · Tracking',
      headline: 'Agro commodities, six value chains',
      img: '/images/work-marblefoods.jpg',
      tileColor: null,
      mark: null,
      href: 'https://marble-foods-umber.vercel.app/',
      ext: true,
    },
    {
      idx: 'ROLE 09',
      title: 'Simdozi International',
      body: 'Client build for an agro investment group: national presence map for Orange-Fleshed Sweet Potato programs across Nigerian states, products and value chain projects.',
      stack: 'Web · Data Map · Programs',
      headline: 'National OFSP presence map',
      img: '/images/work-simdozi.jpg',
      tileColor: null,
      mark: null,
      href: 'https://www.simdoziinternationaltd.com/',
      ext: true,
    },
    {
      idx: 'ROLE 10',
      title: 'AOA Homes',
      body: 'Client build for a real estate and construction brand: property showcase, seasonal campaigns and a contact funnel that turns viewers into site visits.',
      stack: 'Web · Real Estate · Campaigns',
      headline: 'Real estate brand and listings',
      img: '/images/work-aoahomes.jpg',
      tileColor: null,
      mark: null,
      href: 'https://www.aoahomes.com/',
      ext: true,
    },
    {
      idx: 'ROLE 11',
      title: '234coins',
      body: 'AWS cloud engineering for a web3 gaming platform: IAM service roles, CORS and deployment reliability, and real time Redis monitoring for token loading and gameplay sync across regions, including two player Unity games.',
      stack: 'AWS IAM · Redis · Unity Games',
      headline: 'Cloud engineering for Unity games',
      img: '/images/thumb-234coins.jpg',
      tileColor: null,
      mark: null,
      href: null,
      ext: false,
    },
    {
      idx: 'ROLE 12',
      title: 'ATL Labs (PinkDraconian)',
      body: 'Technical security writing for a security education programme: RBAC courseware covering access control architecture, policy design and enforcement, plus course visualization content.',
      stack: 'RBAC · Courseware · Technical Writing',
      headline: 'RBAC security courseware',
      img: '/images/thumb-atl.jpg',
      tileColor: null,
      mark: null,
      href: null,
      ext: false,
    },
  ],
};

export const educationBlock = {
  kicker: '03',
  title: 'Education & License',
  sub: 'One degree, one license that actually tested me, and the papers behind both.',
  schools: [
    {
      school: 'Federal University of Technology, Minna',
      degree: 'B.Tech, CyberSecurity Science',
      dates: '2021 - 2026',
      note: 'Focused on operating systems, Windows internals, endpoint security and telemetry research; developed custom Windows runtime and security tooling with Python and the Win32 API.',
    },
  ],
  papers: [
    {
      idx: 'PAPER 01',
      title: 'Design and Implementation of a Secure Telemetry-Driven Code Mutation Framework for Controlled Endpoint Detection and Response Resilience Testing in Windows Environments',
      meta: 'B.Tech Thesis · Federal University of Technology, Minna · 2026',
    },
    {
      idx: 'PAPER 02',
      title: 'Conversational Artificial Intelligence for Dementia Care: Emotion-Aware Dialogue Design and System Architecture',
      meta: 'Technical Report, with Seun Ajayi · NCAIR, Abuja · 2025',
    },
  ],
  license: {
    name: 'Certified Penetration Testing Specialist',
    issuer: 'Hack The Box Academy',
    dates: 'Issued Feb 2024 · ID HTBCERT-2508B8ABE8',
    note: 'Active Directory exploitation, penetration testing, vulnerability assessment, thick client enumeration, reverse engineering and reporting.',
    img: '/images/cert.jpg',
    imgCaption: 'CPTS · HTBCERT-2508B8ABE8',
  },
};

export const projectsBlock = {
  kicker: '04',
  title: 'Projects',
  sub: "Ideas I had and ran with. Some shipped, all taught me something. Hover a tile for the arrow; everything points somewhere.",
  window: { left: '9 items', mid: '2026 K in disk', right: 'curiosity available' },
  github: 'https://github.com/d3vobed',
  projects: [
    {
      icon: 'film',
      year: '2025',
      name: 'Video Storybook',
      body: 'AI video editing application that turns still images into wide angled shots, event continuity and dynamic motion for storyboard previews.',
      tags: 'MiDaS · TensorFlow · ControlNet · ML Kit',
      href: 'https://github.com/d3vobed',
      ext: true,
    },
    {
      icon: 'shield',
      year: '2025',
      name: 'NEMA Response System',
      body: 'Role based incident response platform for emergency workflows: reporter, responder, admin and super admin portals for incident submission, assignment and live response tracking.',
      tags: 'Incident Response · RBAC · Live Demo',
      href: 'https://nema-app-demo.vercel.app/',
      ext: true,
    },
    {
      icon: 'clapper',
      year: '2026',
      name: 'Change',
      body: 'My short film. A 14 minute crime thriller published under Tech Cinema, listed on TMDB, with the full stills gallery in the filmography.',
      tags: 'Direction · Screenwriting · 14 min',
      href: '/filmography/change',
      ext: false,
    },
    {
      icon: 'navigation',
      year: '2026',
      name: 'LiDAR Spatial Assistant',
      body: 'iOS app using device LiDAR for real time 3D room scanning and object detection with audio navigation cues for blind users. Gemini hackathon special recognition.',
      tags: 'React Native · YOLOv9 · ARCore',
      href: 'https://github.com/d3vobed',
      ext: true,
    },
    {
      icon: 'terminal',
      year: '2023',
      name: 'Autobot OS',
      body: 'Custom Python operating system runtime to observe execution paths and collect endpoint telemetry for EDR resilience research.',
      tags: 'Python · Win32 API · ETW',
      href: 'https://github.com/d3vobed',
      ext: true,
    },
    {
      icon: 'activity',
      year: '2024',
      name: 'EtwScope',
      body: 'Windows telemetry tooling for tracing and visibility research, the companion to my thesis work on EDR resilience.',
      tags: 'ETW · C · Python',
      href: 'https://github.com/d3vobed',
      ext: true,
    },
    {
      icon: 'smartphone',
      year: '2024',
      name: 'Azure Stack USSD Service',
      body: "Scalable USSD service on Azure Stack Hub for enterprise mobile access to USSD services on network, with Africa's Talking.",
      tags: 'USSD · ASP.NET Web API · Azure',
      href: 'https://github.com/d3vobed',
      ext: true,
    },
    {
      icon: 'sparkles',
      year: '2025',
      name: 'Dementia Care AI',
      body: 'Conversational companion for dementia care with emotion aware dialogue design and system architecture, built with Seun Ajayi. Grand prize at the NCAIR hackathon.',
      tags: 'Conversational AI · NCAIR · Grand Prize',
      href: 'https://github.com/d3vobed',
      ext: true,
    },
    {
      icon: 'monitor',
      year: '2026',
      name: 'SFH Access',
      body: 'Branded video series for the Society For HealthCare Access: skits, talking heads and a podcast session. Written, directed, edited, first AC to the DOP.',
      tags: 'Direction · Editing · Production',
      href: '/filmography/sfh-access',
      ext: false,
    },
  ],
};

export const honorsBlock = {
  kicker: '05',
  title: 'Honors, Awards, Talks & Recognition',
  sub: 'Things I am quietly proud of.',
  honors: [
    {
      icon: 'sparkles',
      color: 'sky',
      title: 'Gemini Hackathon Recognition',
      body: 'Special recognition for the LiDAR spatial assistant for blind users, 2026.',
    },
    {
      icon: 'shield',
      color: 'pink',
      title: 'CodeSandbox CVE Credited',
      body: 'Credited on GHSA-5jw5-g7mr-h26r for a high severity security report, 2024.',
    },
    {
      icon: 'trophy',
      color: 'green',
      title: 'NCAIR Hackathon Winner',
      body: '$1,000 grand prize for a conversational AI companion for dementia care, 2025.',
    },
    {
      icon: 'bug',
      color: 'yellow',
      title: 'HackerOne X Bounty',
      body: 'Improper access control on X (Twitter), critical severity, $2K bounty, 2023.',
    },
    {
      icon: 'flag',
      color: 'orange',
      title: 'CyberSafe HQ HackTheBox',
      body: 'First place winner in the HackTheBox capture the flag, 2023.',
    },
    {
      icon: 'medal',
      color: 'paper',
      title: 'CPTS Certified',
      body: 'Certified Penetration Testing Specialist, Hack The Box, Feb 2024.',
    },
    {
      icon: 'mic',
      color: 'sky',
      title: 'Talk · CyberNexus Starter',
      body: 'Threat detection approaches for iOS app architecture, malware analysis and reverse engineering, FUT Minna, 2026.',
    },
    {
      icon: 'mic',
      color: 'pink',
      title: 'Talk · NACSSS Awareness Month',
      body: 'Wireless phishing attacks and awareness with Airgeddon, Al-Amin Secondary School, 2023.',
    },
    {
      icon: 'users',
      color: 'green',
      title: 'Campus Lead · CSEAN',
      body: 'Led the CSEAN student chapter on campus: initiatives, engagement and technical learning, 2024 - 2025.',
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

/* ---------------- cv (served for the chat widget) ---------------- */

export const cvFile = {
  href: '/files/abang-obed-cv.pdf',
  label: 'Download the CV (PDF)',
};
