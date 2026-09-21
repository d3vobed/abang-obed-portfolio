import Link from 'next/link';

import { socialMedias } from '@/data';

const mainLinks = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/film', title: 'Film' },
  { href: '/writing', title: 'Writing' },
  { href: '/contact', title: 'Contact' },
];

export function NovoraFooter() {
  return (
    <footer className='nv-footer'>
      <div className='nv-container'>
        <div className='nv-footer-inner'>
          <div>
            <h3 className='nv-footer-title'>
              Abang<em className='list-none'>obX</em>
              <br />
              Security · Research · Film
            </h3>
          </div>

          <div className='nv-footer-col'>
            <h4>Main links</h4>
            <ul>
              {mainLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='nv-footer-col'>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href='mailto:obx@wearehackerone.com'>obx@wearehackerone.com</a>
              </li>
              <li>
                <a href='/files/abang-obed-resume.pdf' target='_blank' rel='noopener'>
                  Download CV (PDF)
                </a>
              </li>
              <li>
                <a href='https://github.com/d3vobed' target='_blank' rel='noopener'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/obx03' target='_blank' rel='noopener'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='nv-footer-base'>
          <span>© {new Date().getFullYear()} Abang Obed — Abuja, Nigeria</span>
          <div className='nv-footer-socials'>
            {socialMedias.slice(0, 5).map(s => (
              <a key={s.title} href={s.href} target='_blank' rel='noopener'>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}