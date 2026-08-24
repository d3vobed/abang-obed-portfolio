'use client';

import Image from 'next/image';

import '../../aman.css';

const experience = [
  {
    slug: 'kynettic',
    tag: 'Security Research',
    title: 'Kynettic',
    role: 'Security Engineer — Contract',
    dates: '[ADD DATES]',
    image: '/images/kynettic-logo.png',
    bullets: [
      'Authorized security assessments across Kynettic’s web app, mobile app and external infrastructure.',
      'Architecture-level security review covering authentication flows, API surface and deployment config.',
      'Phased findings — unauthenticated attack surface, subdomain audit, web & mobile reports — with remediation guidance.',
    ],
  },
  {
    slug: 'phlexit',
    tag: 'Backend Engineer',
    title: 'Phlexit',
    role: 'Backend Engineer',
    dates: '[ADD DATES]',
    image: '/images/thumb-phlexit.jpg',
    bullets: [
      'Built and maintained backend services and APIs for Phlexit’s platform.',
      '[ADD DETAILS]',
    ],
  },
  {
    slug: 'nema',
    tag: 'Security Operations — Nigeria',
    title: 'NEMA',
    role: 'Security Operations Intern',
    dates: 'Jun 2025 – Nov 2025',
    image: '/images/thumb-nema.jpg',
    bullets: [
      'Supported security operations at the National Emergency Management Agency.',
      'Worked inside a live government emergency-management environment alongside monitoring & incident workflows.',
    ],
  },
  {
    slug: 'ide',
    tag: 'Fullstack Engineer',
    title: 'IDE / Icondigital',
    role: 'Fullstack Engineer',
    dates: 'Jan 2021 – May 2025',
    image: '/images/thumb-ide.jpg',
    bullets: [
      'Fullstack engineering for Stonerockers NG (stonerockers.com), Simdozi LTD, Marblefoods NG, Aoahomes & BigHomes NG.',
      'Carried the senior developer role across client delivery — architecture, implementation and handover.',
    ],
  },
  {
    slug: '234coins',
    tag: 'Cloud — Freelance',
    title: '234coins.net',
    role: 'Cloud Engineer — AWS, Unity, EKS',
    dates: 'Dec 2023',
    image: '/images/thumb-234coins.jpg',
    bullets: [
      'Cloud engineering engagement on AWS: EKS-based infrastructure supporting Unity workloads.',
    ],
  },
  {
    slug: 'gigafro',
    tag: 'Startup Marketplace',
    title: 'GigAfro',
    role: 'Security Engineer',
    dates: 'Feb 2024 – Jan 2025',
    image: '/images/thumb-gigafro.jpg',
    bullets: [
      'Security engineering across GigAfro.com — a freelance marketplace in live production.',
      '[ADD DETAILS]',
    ],
  },
  {
    slug: 'htb',
    tag: 'CPTS — Certified',
    title: 'HackTheBox',
    role: 'CPTS — Certified Penetration Testing Specialist',
    dates: 'Issued Feb 2024',
    image: '/images/thumb-htb.jpg',
    bullets: [
      'Credential ID HTBCERT-2508B8ABE8.',
      'Labs, machines and writeups — see Blog for the published walkthroughs.',
    ],
  },
  {
    slug: 'hackathon',
    tag: 'Gemini · Opik Comet',
    title: 'Hackathons',
    role: 'Contestant',
    dates: '[ADD YEARS]',
    image: '/images/thumb-hackathon.jpg',
    bullets: [
      'Gemini Hackathon — [ADD DETAILS]',
      'Opik Comet Hackathon Contest — [ADD DETAILS]',
    ],
  },
];

const publications = [
  {
    year: 'In preparation',
    title: 'STCMF: measuring endpoint telemetry coverage',
    note: 'Whitepaper on ETW coverage gaps observed through EtwScope. Draft stage.',
  },
  {
    year: '2024',
    title: 'CodeSandbox — GraphQL VM allocation bypass (GHSA-5jw5-g7mr-h26r)',
    note: 'Coordinated disclosure, triaged and resolved by the vendor.',
  },
];

const talks = [
  '[ADD TALK — title, event, year]',
  '[ADD PRESENTATION — title, event, year]',
];

const projects = [
  { name: 'Video Storybook', href: 'https://github.com/d3vobed/Video-Storybook', done: true, desc: 'AI storyboarding: real-world objects to 3D / photoreal stills with MiDaS, TensorFlow and ControlNet.' },
  { name: 'Soccer Behavioural Analysis (SBA)', href: 'https://github.com/d3vobed/SBA', done: true, desc: 'Mobile analysis app tracking players in real time for mood and performance signals.' },
  { name: 'Azure Stack USSD', href: 'https://github.com/d3vobed/Azure-stack-ussd', done: true, desc: 'Scalable USSD service on Azure Stack Hub for enterprise mobile access.' },
  { name: 'Circles (snapBLE)', href: 'https://github.com/d3vobed/snapBLE', done: true, desc: 'P2P, low-bitrate Bluetooth video calling protocol.' },
  { name: 'React-OauthRouter', href: 'https://github.com/d3vobed/oauth-react-router', done: true, desc: 'OAuth support for react-router (Facebook, Google, GitHub, LinkedIn, Twitter).' },
  { name: 'Dementia Chatbot', href: 'https://github.com/d3vobed/conversationalai', done: true, desc: 'Conversational AI for dementia patients with emotion fine-tuning and reminders.' },
  { name: 'AFTNStreamDecoder', href: 'https://github.com/d3vobed/aftnstreamdecoder', done: true, desc: 'Decoder for ATS emergency-signal messages, ML-assisted for accuracy.' },
  { name: 'Chameleon', href: null, done: false, desc: 'Volumetric facial scanner for facial replacement in film.' },
  { name: 'Autobot OS', href: null, done: false, desc: 'Python & C++ OS for file management, retrieval and admin tasks.' },
];

export function Works() {
  return (
    <div id='works' className='aman'>
      {/* Experience */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-title'>Experience</h2>
          <p className='lead'>
            Roughly six years of practical security and engineering work across
            government, startups and contract engagements.
          </p>
          <div className='grid gap-6 md:grid-cols-2'>
            {experience.map(item => (
              <article
                key={item.slug}
                id={`works-${item.slug}`}
                className='card'
                style={{ width: 'auto' }}
              >
                <div className='flex items-center gap-4'>
                  <div className='relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white'>
                    <Image
                      src={item.image}
                      fill={true}
                      alt={item.title}
                      className='object-contain p-1'
                      sizes='64px'
                    />
                  </div>
                  <div>
                    <span className='source-tag'>{item.tag}</span>
                    <h3 style={{ marginBottom: 0 }}>{item.title}</h3>
                    <p style={{ color: '#707070', fontSize: '0.85rem' }}>
                      {item.role} · {item.dates}
                    </p>
                  </div>
                </div>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.1rem' }}>
                  {item.bullets.map(b => (
                    <li key={b} style={{ marginBottom: '0.4rem' }}>
                      {b.includes('[ADD') ? (
                        <span className='placeholder'>{b}</span>
                      ) : (
                        b
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section id='research' className='section section-white'>
        <div className='container'>
          <h2 className='section-title'>Research — STCMF / EtwScope</h2>
          <p className='lead'>
            EtwScope is the working name for research under STCMF into endpoint
            telemetry on Windows: what Event Tracing for Windows actually
            exposes about system behaviour, and how far an analyst can trust
            the picture security controls build from it.
          </p>

          <div className='research-block'>
            <h3>Problem</h3>
            <p>
              EDR and XDR platforms present a confident narrative of what is
              happening on an endpoint. Underneath sits ETW — a patchwork of
              providers with uneven coverage. The real question: which parts of
              system behaviour never reach the telemetry, and where do
              detection assumptions quietly break?
            </p>
          </div>
          <div className='research-block'>
            <h3>Approach</h3>
            <p>
              Build a collection framework around ETW sessions and provider
              manifests, instrument controlled workloads, and compare emitted
              events against the actions actually performed. Repeatable runs
              make the results measurable rather than anecdotal.
            </p>
          </div>
          <div className='research-block'>
            <h3>Telemetry &amp; Analysis</h3>
            <p>
              Sessions capture process, thread, image-load, file I/O, registry,
              network and .NET provider streams. Analysis aligns ground-truth
              actions with emitted events to surface gaps, ordering problems
              and silent failure modes in common detection pipelines.
            </p>
          </div>
          <div className='research-block'>
            <h3>Metrics &amp; Results</h3>
            <p>
              Coverage is measured per workload class: events emitted versus
              operations performed, per provider and per severity tier. Early
              runs point to consistent blind spots in specific provider
              combinations.
              <span className='placeholder'> [FULL RESULTS IN PAPER]</span>
            </p>
          </div>

          <h3
            style={{
              marginTop: '2.5rem',
              marginBottom: '1rem',
              color: '#1a2b3c',
              fontSize: '1.1rem',
            }}
          >
            Publications
          </h3>
          <div className='publications-container'>
            {publications.map(p => (
              <div className='publication-entry entry' key={p.title}>
                <span className='publication-year'>{p.year}</span>
                <h3 style={{ fontSize: '1.05rem' }}>{p.title}</h3>
                <p>{p.note}</p>
              </div>
            ))}
          </div>

          <div className='meta-row'>
            <span>Status: ongoing research project</span>
            <span className='pending'>Paper: in preparation</span>
            <span className='pending'>Code: [ADD GITHUB LINK]</span>
          </div>
        </div>
      </section>

      {/* Talks */}
      <section id='talks' className='section'>
        <div className='container'>
          <h2 className='section-title'>Talks &amp; Presentations</h2>
          <div className='publications-container'>
            {talks.map(t => (
              <div className='publication-entry entry' key={t}>
                <span className='placeholder'>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering projects */}
      <section className='section section-white'>
        <div className='container'>
          <h2 className='section-title'>Engineering Projects</h2>
          <div className='projects-container'>
            {projects.map(p => (
              <div className='entry' key={p.name}>
                <h3>
                  {p.done && p.href ? (
                    <a href={p.href} target='_blank' rel='noopener'>
                      {p.name}
                    </a>
                  ) : (
                    <>
                      {p.name}{' '}
                      {!p.done ? (
                        <span className='placeholder'>— coming soon</span>
                      ) : null}
                    </>
                  )}
                </h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
