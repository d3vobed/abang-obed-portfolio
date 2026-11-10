/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/works', destination: '/filmography', permanent: true },
      { source: '/works/:path*', destination: '/filmography', permanent: true },
    ];
  },
};

module.exports = nextConfig;
