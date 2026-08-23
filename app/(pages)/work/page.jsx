import { Contact, Navbar, Transition } from '@/layout';

import '../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Security engineering, security operations and offensive security work by Abang Obed — six years across assessments, research and systems.',
};

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <PageHero
        title='Work'
        meta='Security engineering · Operations · Offensive security · Systems'
      />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Security Engineering</h2>
            <p className='lead'>
              I have spent roughly six years working in practical security —
              operations, engineering and assessment work across government,
              startups and contract engagements. The entries below are the
              roles; the detail lives in the outcomes.
            </p>

            <div className='timeline'>
              <div className='timeline-item'>
                <span className='source-tag'>Kynettic</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>Security Engineer — Contract</h3>
                  <p>
                    <span className='placeholder'>[ADD DATES]</span>
                  </p>
                  <ul>
                    <li>
                      Ran authorized security assessments across Kynettic&rsquo;s
                      web application, mobile application and external
                      infrastructure.
                    </li>
                    <li>
                      Produced an architecture-level security review covering
                      authentication flows, API surface and deployment
                      configuration.
                    </li>
                    <li>
                      Delivered phased findings — unauthenticated attack
                      surface, subdomain audit, web and mobile reports — with
                      remediation guidance.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='timeline-item'>
                <span className='source-tag'>GigAfro</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>Security Engineer</h3>
                  <p>Feb 2024 – Jan 2025</p>
                  <ul>
                    <li>
                      Worked as the security engineer across GigAfro&rsquo;s
                      platform and infrastructure.
                    </li>
                    <li>
                      <span className='placeholder'>[ADD PROJECT DETAILS]</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='timeline-item'>
                <span className='source-tag'>NEMA</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>Security Operations Intern</h3>
                  <p>Jun 2025 – Nov 2025</p>
                  <ul>
                    <li>
                      Supported security operations at the National Emergency
                      Management Agency.
                    </li>
                    <li>
                      Worked inside a live government emergency-management
                      environment, alongside monitoring and incident workflows.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='timeline-item'>
                <span className='source-tag'>ACL Labs</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>
                    <span className='placeholder'>[ADD ROLE]</span>
                  </h3>
                  <p>
                    <span className='placeholder'>[ADD DATES]</span>
                  </p>
                  <ul>
                    <li>
                      <span className='placeholder'>[ADD DETAILS]</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='timeline-item'>
                <span className='source-tag'>Icondigital Nigeria</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>Senior Web Developer</h3>
                  <p>Jan 2021 – May 2025</p>
                  <ul>
                    <li>
                      Built and maintained production platforms end to end for
                      Stonerockers NG, Simdozi Limited, BigHomes NG, Aoahomes NG
                      and Marblefoods NG (contract).
                    </li>
                    <li>
                      Carried the senior developer role across client delivery —
                      architecture, implementation and handover.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='timeline-item'>
                <span className='source-tag'>234coins.net · Upwork</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>Cloud Engineer — AWS, Unity, EKS</h3>
                  <p>Dec 2023</p>
                  <ul>
                    <li>
                      Cloud engineering engagement on AWS: EKS-based
                      infrastructure supporting Unity workloads.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='timeline-item'>
                <span className='source-tag'>PrintPlace</span>
                <div className='entry' style={{ border: 'none', padding: 0 }}>
                  <h3>Network System Architect</h3>
                  <p>Feb 2023 – Mar 2023</p>
                  <ul>
                    <li>
                      Designed network system architecture for PrintPlace&rsquo;s
                      production environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section section-white'>
          <div className='container'>
            <h2 className='section-title'>Offensive Security</h2>
            <p className='lead'>
              Authorized testing and vulnerability research only. Findings go
              to vendors first; public disclosure happens through coordinated
              advisories or writeups once issues are resolved.
            </p>

            <div className='card-grid'>
              <a
                className='card'
                href='https://github.com/codesandbox/codesandbox-client/security/advisories/GHSA-5jw5-g7mr-h26r'
                target='_blank'
                rel='noopener'
              >
                <span className='source-tag'>Coordinated Disclosure</span>
                <h3>CodeSandbox — GraphQL VM allocation bypass</h3>
                <p>
                  Identified a VM allocation bypass in CodeSandbox&rsquo;s GraphQL
                  API. Triaged and resolved by the vendor.
                </p>
              </a>
              <a className='card' href='/writing'>
                <span className='source-tag'>CTF &amp; Labs</span>
                <h3>HTB CPTS — Certified Penetration Testing Specialist</h3>
                <p>
                  Issued Feb 2024 · Credential ID HTBCERT-2508B8ABE8.
                  Writeups from labs and machines live in Writing.
                </p>
              </a>
              <a className='card' href='/research'>
                <span className='source-tag'>Vulnerability Research</span>
                <h3>EtwScope / STCMF</h3>
                <p>
                  Ongoing endpoint telemetry research — what security controls
                  actually observe on Windows. Details under Research.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Engineering Projects</h2>
            <div className='projects-container'>
              {[
                {
                  name: 'Chameleon',
                  desc: 'Volumetric facial scanner using eyeliners to track facial points — built for facial replacement work in movies.',
                  href: 'https://github.com/d3vobed/chameleon',
                },
                {
                  name: 'Video Storybook',
                  desc: 'AI storyboarding software: converts real-world objects into 3D models or photoreal stills using MiDaS, TensorFlow and ControlNet, with wide-angle shots, event continuity and motion from single images.',
                  href: 'https://github.com/d3vobed/Video-Storybook',
                },
                {
                  name: 'Soccer Behavioural Analysis (SBA)',
                  desc: 'Mobile analysis app monitoring players in real-time matches for mood shifts — predicting fouls, tackles and loan/market-value signals.',
                  href: 'https://github.com/d3vobed/SBA',
                },
                {
                  name: 'Azure Stack USSD',
                  desc: 'Scalable USSD service on Azure Stack Hub for enterprise mobile access, wired to AfricasTalking.',
                  href: 'https://github.com/d3vobed/Azure-stack-ussd',
                },
                {
                  name: 'Circles (snapBLE)',
                  desc: 'P2P, low-resolution, snap-bitrate Bluetooth video calling protocol — bitchat, but for video.',
                  href: 'https://github.com/d3vobed/snapBLE',
                },
                {
                  name: 'React-OauthRouter',
                  desc: 'OAuth support for react-router — linking Facebook, Google, GitHub, LinkedIn and Twitter with developer tokens and axios.',
                  href: 'https://github.com/d3vobed/oauth-react-router',
                },
                {
                  name: 'Dementia Chatbot',
                  desc: 'Conversational AI for dementia patients — emotion fine-tuning, cognitive games, reminders and memory aid, multi-language with speech-to-text.',
                  href: 'https://github.com/d3vobed/conversationalai',
                },
                {
                  name: 'Autobot OS',
                  desc: 'Python and C++ based operating system for file management, retrieval, scanning and administrative tasks.',
                  href: null,
                },
                {
                  name: 'AFTNStreamDecoder',
                  desc: 'Decoder for ATS messages aimed at emergency signal intelligence, integrated with machine learning for accuracy tests.',
                  href: 'https://github.com/d3vobed/aftnstreamdecoder',
                },
              ].map(({ name, desc, href }) => (
                <div className='entry' key={name}>
                  <h3>
                    {href ? (
                      <a href={href} target='_blank' rel='noopener'>
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                  </h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='section section-white'>
          <div className='container'>
            <h2 className='section-title'>Education &amp; Certifications</h2>
            <div className='education-container'>
              <div className='education-entry entry'>
                <h3>B.Tech in Cyber Security Science</h3>
                <p>Federal University of Technology, Minna, Nigeria — 2021–2026</p>
              </div>
              <div className='education-entry entry'>
                <h3>HTB Certified Penetration Testing Specialist (CPTS)</h3>
                <p>
                  HackTheBox — Issued Feb 2024 · Credential ID{' '}
                  <span className='mono'>HTBCERT-2508B8ABE8</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
