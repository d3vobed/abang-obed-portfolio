/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://abangobed.vercel.app/'),
  title: {
    template: '%s | Abang Obed',
    default: 'Abang Obed • Security Engineer & Filmmaker',
  },
  description:
    'Abang Obed is a Security Engineer, Security Researcher and Filmmaker based in Abuja, Nigeria. His work moves between offensive security, security engineering and cinematic storytelling.',
  generator: 'Abang Obed',
  applicationName: 'Abang Obed',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Security Engineer',
    'Security Research',
    'Offensive Security',
    'Filmmaker',
    'Abang Obed',
    'Nigeria',
  ],
  authors: [{ name: 'Abang Obed', url: 'https://github.com/d3vobed' }],
  creator: 'Abang Obed',
  publisher: 'Abang Obed',
  twitter: {
    card: 'summary_large_image',
    title: 'Abang Obed • Security Engineer & Filmmaker',
    description:
      'Security Engineer, Security Researcher and Filmmaker based in Abuja, Nigeria.',
    creator: '@obedeee_Jr',
    images: {
      url: '/images/change-hero.jpg',
      alt: 'Change — A Single Note. A Hundred Stories',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
