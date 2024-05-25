/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'es.kampaoh.com',
        port: '',
      },
    ],
  },}

module.exports = nextConfig
