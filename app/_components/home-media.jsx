import Image from 'next/image';
import Link from 'next/link';

const stills = [
  { src: '/images/film-still.png', label: 'Change — still' },
  { src: '/images/film-still1.png', label: 'Change — still' },
  { src: '/images/film-still2.png', label: 'Change — still' },
];

export default function HomeMedia() {
  return (
    <section className='aman'>
      <div className='container'>
        <p className='section-title'>Film &amp; motion</p>
        <div className='media-grid'>
          {stills.map((s, i) => (
            <Link key={i} href='/film' className='media-card'>
              <Image src={s.src} alt={s.label} width={640} height={400} className='media-img' />
              <span className='media-label'>{s.label}</span>
            </Link>
          ))}
          <a
            href='https://www.youtube.com/watch?v=cdme3UoB_vY'
            target='_blank'
            rel='noopener'
            className='media-card'
          >
            <img
              src='https://i.ytimg.com/vi/cdme3UoB_vY/hqdefault.jpg'
              alt='Change — trailer'
              className='media-img'
            />
            <span className='media-label'>Change — trailer (YouTube)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
