/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'pokeapi.co'],
  },
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;

// /api/v2/pokemon/1/
