import Image from 'next/image';
import Link from 'next/link';

const gallery = [
  { src: '/images/film-still.png', label: 'Change — still', href: '/film' },
  { src: '/images/film-still1.png', label: 'Change — still', href: '/film' },
  { src: '/images/film-still2.png', label: 'Change — still', href: '/film' },
  { src: '/images/kynettic-logo.png', label: 'Kynettic — Security Research', href: '/about#works-kynettic' },
  { src: '/images/thumb-phlexit.jpg', label: 'Phlexit — Backend', href: 'https://www.myphlexit.com/' },
  { src: '/images/thumb-nema.jpg', label: 'NEMA — SecOps', href: 'https://nema.gov.ng/about-nema/' },
  { src: '/images/thumb-ide.jpg', label: 'Stonerockers / IDE — Fullstack', href: 'https://stonerockers.com/' },
  { src: '/images/thumb-upwork.jpg', label: '234coins.net — Cloud (Upwork)', href: 'https://www.upwork.com/' },
  { src: '/images/thumb-gigafro.jpg', label: 'StreetVibez (GigAfro)', href: 'https://streetvibex.com/' },
  { src: '/images/thumb-htb.jpg', label: 'HackTheBox — CPTS', href: 'https://profile.hackthebox.com/profile/01a03172-185e-72bf-b83a-4197965a8404' },
  { src: '/images/thumb-hackathon.jpg', label: 'Hackathons — Gemini · Opik Comet', href: 'https://gemini3.devpost.com/' },
  { src: '/images/thumb-csb.jpg', label: 'CodeSandbox — CVE / Disclosure', href: 'https://codesandbox.io/' },
  { src: '/images/thumb-etwscope.jpg', label: 'EtwScope — Research', href: '/about#research' },
];

export default function HomeGallery() {
  return (
    <div className='aman'>
      <div className='container'>
        <p className='section-title'>Film &amp; work — in frame</p>
        <div className='gallery-grid'>
          {gallery.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className='gallery-card'
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Image src={item.src} alt={item.label} width={640} height={640} className='gallery-img' />
              <span className='gallery-label'>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
