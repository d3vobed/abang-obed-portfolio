'use client';

import Image from 'next/image';

const experience = [
  {
    slug: 'kynettic',
    tag: 'Security Engineer',
    title: 'Kynettic',
    role: 'Lead Security Engineer (Contract)',
    dates: 'July 2026 – Present',
    image: '/images/kynettic-logo.png',
    bullets: [
      'Web application, API and mobile security assessments across authentication, authorization, session management, business logic and injection.',
      'Protocol-layer and application security in DeFi systems: swap-logic integrity, access control and transaction validation.',
      'Structured assessment reports with severity ratings, reproduction steps and prioritized remediation guidance.',
    ],
  },
  {
    slug: 'nema',
    tag: 'Security Operations',
    title: 'NEMA-HQ',
    role: 'Security Operations Specialist (Internship)',
    dates: 'June 2025 – January 2026',
    href: 'https://nema.gov.ng/about-nema/',
    image: '/images/thumb-nema.jpg',
    bullets: [
      'Monitored and investigated security events in a live government SOC using SIEM and monitoring workflows.',
      'Administered Active Directory and endpoint security on HP ProLiant servers with MikroTik and Cisco.',
      'Vulnerability assessments of network assets and the Huawei NetEngine CX600 platform; supported GIS data-relay and Mission Control.',
    ],
  },
  {
    slug: 'atl',
    tag: 'Technical Security Writer',
    title: 'ATL Labs (PinkDraconian)',
    role: 'Technical Security Writer',
    dates: 'June 14 – July 29, 2025',
    image: '/images/thumb-atl.jpg',
    bullets: [
      'Developed RBAC security courseware on access-control architecture, policy design and enforcement.',
      'Research and technical writing on identity management, access control and security governance.',
      'Produced course-visualization content for practitioner-focused security training.',
    ],
  },
  {
    slug: 'phlexit',
    tag: 'Backend Developer',
    title: 'Phlex IT Events',
    role: 'Staff Backend Developer',
    dates: 'April 2024 – July 2025',
    href: 'https://www.myphlexit.com/',
    image: '/images/thumb-phlexit.jpg',
    bullets: [
      'REST APIs with NestJS and PostgreSQL for authentication, OTP verification, session management and ticketing at scale.',
      'Server-side pagination and client caching across datasets exceeding 50,000 attendee records.',
      'MongoDB ORM architecture and CI/CD pipeline for secure deployments.',
    ],
  },
  {
    slug: 'ide',
    tag: 'Web & System Architect',
    title: 'IDE Nigeria',
    role: 'Sr. Website Developer & System Architect (Contract)',
    dates: 'January 2021 – January 2026',
    href: 'https://stonerockers.com/',
    image: '/images/thumb-ide.jpg',
    bullets: [
      'Multi-company operations platform (Simdozi, Marblefoods, Stonerockers, Aoahomes, BigHomes) with Node.js, Laravel, Three.js, C# and Azure.',
      'Mobile-first responsive interfaces with Tailwind CSS, improving engagement by 57%.',
      'Resolved IAM misconfigurations and cloud deployment security issues.',
    ],
  },
  {
    slug: '234coins',
    tag: 'Cloud — Freelance (Upwork)',
    title: '234coins.net',
    role: 'AWS Cloud Engineer',
    dates: 'December 2023',
    href: 'https://www.upwork.com/',
    image: '/images/thumb-upwork.jpg',
    bullets: [
      'Optimized AWS IAM service roles, reducing deployment errors by 50% on the Unity runtime engine.',
      'Diagnosed cloud CORS misconfigurations and reliability issues.',
      'Real-time Redis monitoring for token loading and device activity.',
    ],
  },
  {
    slug: 'gigafro',
    tag: 'Startup Marketplace',
    title: 'GigAfro / StreetVibez',
    role: 'Security Engineer — Freelance Marketplace',
    dates: 'January 2026',
    href: 'https://streetvibex.com/',
    image: '/images/thumb-gigafro.jpg',
    bullets: [
      'Built and launched a production marketplace connecting freelancers to gigs with real-time geolocation and ranking.',
      'Designed a dispatch system across Android, iOS and web clients in a live production environment.',
    ],
  },
];

const disclosures = [
  {
    vendor: 'Google Chrome',
    title: 'Polyglot ZIP executed as HTML (stored XSS via MIME discard)',
    status: 'Triaged',
    year: '2026',
    link: 'https://issues.chromium.org/issues/509555616',
  },
  {
    vendor: 'Apple',
    title: 'Client-side request signing uses predictable SHA-256 hash — forgeable rating/save',
    status: 'Triaged · Reproduced',
    year: '2026',
  },
  {
    vendor: 'Apple',
    title: 'Broken Access Control — enumeration & binding of internal Apple employee exams',
    status: 'Triaged · Reviewing',
    year: '2026',
  },
  {
    vendor: 'Apple',
    title: 'Missing Login CSRF token — cross-origin login forgery (sift-shield.apple.com)',
    status: 'Triaged · Reproduced',
    year: '2026',
  },
  {
    vendor: 'Microsoft',
    title: 'Microsoft Dataverse Web API SQL Server fault disclosure and internal custom API exposure',
    status: 'Triaged',
    year: '2026',
    image: '/images/ms-dataverse-portal.png',
  },
  {
    vendor: 'Elastic',
    title: 'APM Server API key cache bypasses secret validation + DoS',
    status: 'Triaged',
    year: '2026',
    link: 'https://hackerone.com/reports/3715105',
  },
  {
    vendor: 'Elastic',
    title: 'Arbitrary file write via intake-receiver path traversal',
    status: 'Triaged',
    year: '2026',
    link: 'https://hackerone.com/reports/3711987',
  },
  {
    vendor: 'X / xAI',
    title: 'Messaging restriction bypass via post-sharing (Community Notes)',
    status: 'Triaged · Open',
    year: '2026',
    link: 'https://hackerone.com/reports/3954160',
  },
  {
    vendor: 'Rockstar Games',
    title: 'Reflected XSS on VPN getconfig.esp (CVE-2025-0133)',
    status: 'Triaged',
    year: '2025',
    link: 'https://hackerone.com/reports/3277292',
  },
  {
    vendor: 'Figma',
    title: 'IDOR on chapter membership (deleted / deactivated chapters)',
    status: 'Triaged',
    year: '2025',
    link: 'https://hackerone.com/reports/3339899',
  },
  {
    vendor: 'Syfe',
    title: 'Web Cache Deception via semicolon delimiter (api.syfe.com)',
    status: 'Triaged',
    year: '2026',
    link: 'https://hackerone.com/reports/3530679',
  },
  {
    vendor: 'CodeSandbox',
    title: 'High-severity GraphQL VM allocation bypass (GHSA-5jw5-g7mr-h26r)',
    status: 'Credited',
    year: '2024',
    link: 'https://github.com/codesandbox/codesandbox-client/security/advisories/GHSA-5jw5-g7mr-h26r',
  },
];

const ctfs = [
  { title: 'HackTheBox — CPTS Certified', meta: 'Active Directory, pentesting, vuln assessment · Feb 2024', href: 'https://profile.hackthebox.com/profile/01a03172-185e-72bf-b83a-4197965a8404' },
  { title: 'TryHackMe', meta: 'CTF / hands-on security labs', href: 'https://tryhackme.com/p/populistpreventi' },
  { title: 'CyberSafe HQ — HackTheBox 1st Place', meta: 'Competition winner · 2023' },
  { title: 'Gemini Hackathon — LiDAR Spatial Assistant', meta: 'Special Recognition · Feb 2026', href: 'https://gemini3.devpost.com/' },
  { title: 'Opik Comet — AI Budgeting Agent', meta: 'Runner-Up · Jan 2026' },
  { title: 'NCAIR Hackathon — Dementia Chatbot', meta: 'Winner · $1,000 grant · Sep 2025' },
  { title: 'CTFtime — team 303681', meta: 'Competitive CTF team', href: 'https://ctftime.org/team/303681' },
];

const talks = [
  {
    title: 'Threat detection approaches for iOS application architecture',
    meta: 'FUT Minna — CyberNexus Starter · 2026',
    detail: 'Malware analysis, reverse engineering and antimalware techniques.',
  },
  {
    title: 'Wireless phishing attacks & awareness (Airgeddon)',
    meta: 'NACSS Cybersecurity Awareness Month, Al-Amin Secondary School · 2023',
    detail: 'Practical wireless phishing demonstration and awareness session.',
  },
];

const projects = [
  { title: 'GigAfro / StreetVibez', meta: 'Live freelance marketplace · Flutter, Swift, React, GraphQL · Jan 2026', href: 'https://streetvibex.com/', done: true },
  { title: 'Conversational AI for Dementia Care', meta: 'NCAIR · emotion-aware dialogue · $1k grant · 2025', done: true },
  { title: 'LiDAR Spatial Assistant for Blind Users', meta: 'Gemini Hackathon · ARKit, YOLOv9, ARCore · 2026', done: true },
  { title: 'AI Budgeting Agent', meta: 'Opik Comet Runner-Up · MCP stack · 2026', done: true },
  { title: 'Azure Stack USSD', meta: 'Scalable USSD on Azure Stack Hub + Africa’s Talking · 2023', done: true },
  { title: 'Video Storybook', meta: 'AI storyboarding: MiDaS, TensorFlow, ControlNet', done: true },
  { title: 'Soccer Behavioural Analysis (SBA)', meta: 'Mobile analysis app for player mood & performance', done: true },
  { title: 'Circles (snapBLE)', meta: 'P2P low-bitrate Bluetooth video calling protocol', done: true },
  { title: 'React-OauthRouter', meta: 'OAuth for react-router (Facebook, Google, GitHub, LinkedIn, Twitter)', done: true, href: 'https://github.com/d3vobed' },
  { title: 'AFTNStreamDecoder', meta: 'Decoder for ATS emergency-signal messages, ML-assisted', done: true },
  { title: 'Chameleon', meta: 'Volumetric facial scanner for facial replacement in film', done: false },
  { title: 'Autobot OS', meta: 'Python & C++ OS for file management, retrieval and admin tasks', done: false },
];

const aiRedTeam = [
  {
    platform: 'Gray Swan Arena',
    meta: 'LLM red teaming — prompt injection, jailbreaks and agent safety',
    stats: [
      'Global Rank #924',
      '220 global points · 12 unique breaks',
      '1,226 submissions in the last year',
    ],
    challenges: [
      { name: 'IPI Lucky Break', rank: '#103 of 485', breaks: '11 breaks' },
      { name: 'Indirect Prompt Injection Aug 2026', rank: '#133 of 807', breaks: '24 breaks' },
      { name: 'Indirect Prompt Injection Jul 2026', rank: '#201 of 473', breaks: '1 break' },
    ],
    href: 'https://app.grayswan.ai/profile',
  },
  {
    platform: 'Judgement Day — AI Red Team Arena',
    meta: 'AIM Intelligence × Korea AISI · global AI safety red-team competition (Apr–May 2026)',
    stats: [
      'Global Rank #59',
      'Total score 149.00 · 399 approved submissions',
      '27 breaches · 7% breach rate',
    ],
    challenges: [
      { name: 'Epidemiological Surveillance: Outbreak Alert Suppression', rank: '35.00 pts', breaks: '5 approved / 23' },
      { name: 'Emergency Triage: Multi-modal Resource Coordination', rank: '33.00 pts', breaks: '7 approved / 93' },
      { name: 'Industrial Robot: Physical Sensory Deception', rank: '25.00 pts', breaks: '6 approved / 57' },
      { name: 'Deepfake Detection: Forensic Finding Suppression', rank: '16.00 pts', breaks: '3 approved / 34' },
      { name: 'Cybersecurity SOC: Incident Suppression', rank: '14.00 pts', breaks: '2 approved / 45' },
      { name: 'Dam Flood Control: Emergency Overtopping Deception', rank: '12.00 pts', breaks: '2 approved / 25' },
      { name: 'Sports Integrity: Statistical Anomaly Normalization', rank: '9.00 pts', breaks: '1 approved / 62' },
      { name: 'Aircraft Predictive Maintenance: Safety-Critical Hold Deferral', rank: '5.00 pts', breaks: '1 approved / 60' },
    ],
    href: 'https://app.grayswan.ai/profile',
  },
];

export default function Works() {
  return (
    <div id='works' className='aman'>
      {/* Experience */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-title'>Experience</h2>
          <div className='timeline'>
            {experience.map(item => (
              <article key={item.slug} id={`works-${item.slug}`} className='timeline-item'>
                <div className='timeline-media'>
                  <Image src={item.image} alt={item.title} width={96} height={96} className='timeline-img' />
                </div>
                <div className='timeline-body'>
                  <span className='source-tag'>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p className='timeline-role'>{item.role}</p>
                  <p className='timeline-dates'>{item.dates}</p>
                  <ul className='timeline-bullets'>
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {item.href ? (
                    <a className='timeline-link mono' href={item.href} target='_blank' rel='noopener'>
                      Visit →
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering projects */}
      <section className='section section-white'>
        <div className='container'>
          <h2 className='section-title'>Engineering Projects</h2>
          <p className='section-note'>
            Everything else, cyber and otherwise, lives on{' '}
            <a className='mono' href='https://github.com/d3vobed' target='_blank' rel='noopener'>
              github.com/d3vobed
            </a>
            .
          </p>
          <div className='card-grid'>
            {projects.map((p, i) => (
              <div key={i} className={`card ${p.done ? '' : 'card-soon'}`}>
                <h3>{p.title}</h3>
                <p>{p.meta}</p>
                {p.done && p.href ? (
                  <a className='mono' href={p.href} target='_blank' rel='noopener'>Code →</a>
                ) : !p.done ? (
                  <span className='soon-tag'>Coming soon</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security disclosures */}
      <section className='section section-white'>
        <div className='container'>
          <h2 className='section-title'>Security Disclosures</h2>
          <div className='disclosure-grid'>
            {disclosures.map((d, i) => (
              <div key={i} className='disclosure-card'>
                <div className='disclosure-top'>
                  <span className='source-tag'>{d.vendor}</span>
                  <span className={`status-badge status-${d.status.split(' ')[0].toLowerCase()}`}>{d.status}</span>
                </div>
                <p className='disclosure-title'>{d.title}</p>
                {d.image ? (
                  <div className='disclosure-image'>
                    <Image src={d.image} alt={d.vendor} width={320} height={180} />
                  </div>
                ) : null}
                <div className='disclosure-foot'>
                  <span className='mono'>{d.year}</span>
                  {d.link ? (
                    <a className='mono' href={d.link} target='_blank' rel='noopener'>Report →</a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI red teaming */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-title' id='ai'>AI Red Teaming</h2>
          <div className='card-grid'>
            {aiRedTeam.map((a, i) => (
              <div key={i} className='card card-ai'>
                <h3>{a.platform}</h3>
                <p>{a.meta}</p>
                <ul className='timeline-bullets'>
                  {a.stats.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
                <div className='ai-challenges'>
                  {a.challenges.map((c, j) => (
                    <div key={j} className='ai-challenge'>
                      <span className='ai-challenge-name'>{c.name}</span>
                      <span className='mono ai-challenge-meta'>{c.rank} · {c.breaks}</span>
                    </div>
                  ))}
                </div>
                {a.href ? (
                  <a className='mono' href={a.href} target='_blank' rel='noopener'>Profile →</a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTFs & Hackathons */}
      <section className='section section-white'>
        <div className='container'>
          <h2 className='section-title' id='ctfs'>CTFs &amp; Hackathons</h2>
          <div className='card-grid'>
            {ctfs.map((c, i) => (
              <div key={i} className='card'>
                <h3>{c.title}</h3>
                <p>{c.meta}</p>
                {c.href ? (
                  <a className='mono' href={c.href} target='_blank' rel='noopener'>Link →</a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-title' id='talks'>Talks &amp; Presentations</h2>
          <div className='timeline'>
            {talks.map((t, i) => (
              <article key={i} className='timeline-item'>
                <div className='timeline-body'>
                  <span className='source-tag'>Talk</span>
                  <h3>{t.title}</h3>
                  <p className='timeline-role'>{t.meta}</p>
                  <p>{t.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
