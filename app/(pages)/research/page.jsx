import { Contact, Navbar, Transition } from '@/layout';

import '../aman.css';
import { PageHero } from '../_components/page-hero';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Research',
  description:
    'Security research by Abang Obed — STCMF / EtwScope endpoint telemetry research, vulnerability research and coordinated disclosure.',
};

export default function Research() {
  return (
    <Transition>
      <Navbar />
      <PageHero
        title='Research'
        meta='STCMF · Endpoint telemetry · Vulnerability research · Disclosure'
      />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>STCMF — EtwScope</h2>
            <p className='lead'>
              EtwScope is the working name for research conducted under STCMF
              into endpoint telemetry on Windows: what Event Tracing for
              Windows actually exposes about system behaviour, and how far an
              analyst can trust the picture that security controls build from
              it.
            </p>

            <div className='research-block fade-in'>
              <h3>Problem</h3>
              <p>
                EDR and XDR platforms present a confident narrative of what is
                happening on an endpoint. Underneath that narrative sits ETW —
                a patchwork of providers with uneven coverage. The question:
                which parts of real system behaviour never make it into the
                telemetry at all, and where do detection assumptions break?
              </p>
            </div>

            <div className='research-block fade-in'>
              <h3>Approach &amp; Implementation</h3>
              <p>
                Build a collection framework around ETW sessions and provider
                manifests, instrument controlled workloads, and compare the
                events captured against the actions actually performed. The
                tooling focuses on repeatable runs so results are measurable
                rather than anecdotal.
              </p>
            </div>

            <div className='research-block fade-in'>
              <h3>Telemetry &amp; Analysis</h3>
              <p>
                Sessions capture process, thread, image-load, file I/O,
                registry, network and .NET provider streams. Analysis aligns
                ground-truth actions with emitted events to surface gaps,
                ordering problems and silent failure modes in common detection
                pipelines.
              </p>
            </div>

            <div className='research-block fade-in'>
              <h3>Metrics &amp; Results</h3>
              <p>
                Coverage is measured per workload class: events emitted versus
                operations performed, per provider and per severity tier.
                Early runs point to consistent blind spots in specific
                provider combinations.
                <span className='placeholder'> [FULL RESULTS IN PAPER]</span>
              </p>
            </div>

            <div className='meta-row'>
              <span>Status: ongoing research project</span>
              <span className='pending'>Paper: in preparation</span>
              <span className='pending'>Code: [ADD GITHUB LINK]</span>
            </div>
          </div>
        </section>

        <section className='section section-white'>
          <div className='container'>
            <h2 className='section-title'>Vulnerability Research</h2>
            <p className='lead'>
              Vulnerability research happens against systems I am authorized
              to test — vendor programs, engagements, labs and my own
              infrastructure. Disclosures are coordinated; nothing sensitive
              about clients or engagements is published here.
            </p>

            <div className='entry'>
              <h3>
                <a
                  href='https://github.com/codesandbox/codesandbox-client/security/advisories/GHSA-5jw5-g7mr-h26r'
                  target='_blank'
                  rel='noopener'
                >
                  CodeSandbox — GraphQL VM allocation bypass
                  <span className='entry-year' style={{ marginLeft: '0.5rem' }}>
                    GHSA-5jw5-g7mr-h26r
                  </span>
                </a>
              </h3>
              <p>
                VM allocation bypass through CodeSandbox&rsquo;s GraphQL API.
                Reported privately, triaged by the vendor, resolved in their
                advisory.
              </p>
            </div>

            <div className='entry'>
              <h3>Authorized engagement work</h3>
              <p>
                Web application testing, API testing, mobile security,
                infrastructure and network assessment across contract
                engagements — including full-stack assessments of
                authentication flows, API surfaces and external attack
                surface. Scope and findings remain confidential.
              </p>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Notes &amp; Writeups</h2>
            <div className='publications-container'>
              <div className='publication-entry entry'>
                <span className='publication-year'>2024</span>
                <h3>
                  <a
                    href='https://obx03.medium.com/htb-analysis-writeup-9387065920bc'
                    target='_blank'
                    rel='noopener'
                  >
                    HTB — Analysis writeup
                  </a>
                </h3>
                <p>
                  Active Directory machine: LDAP injection via blind
                  character-by-character enumeration, kerberoasting-adjacent
                  credential recovery, Snort DLL hijack for privilege
                  escalation.
                </p>
              </div>
              <div className='publication-entry entry'>
                <span className='publication-year'>2024</span>
                <h3>
                  <a
                    href='https://d3vobed.github.io/posts/AzureAd-Recon/'
                    target='_blank'
                    rel='noopener'
                  >
                    Azure AD Recon
                  </a>
                </h3>
                <p>Reconnaissance techniques against Azure AD environments.</p>
              </div>
              <div className='publication-entry entry'>
                <span className='publication-year'>In preparation</span>
                <h3 style={{ color: '#707070' }}>
                  STCMF: measuring endpoint telemetry coverage
                </h3>
                <p>
                  Whitepaper on ETW coverage gaps observed through EtwScope.
                  Draft stage.
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
