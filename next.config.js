/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
      },
      {
        protocol: 'https',
        hostname: 'gymbeam.sk',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
