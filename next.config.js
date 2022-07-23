/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
