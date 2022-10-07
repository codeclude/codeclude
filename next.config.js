/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  experimental: { 
    nftTracing: true 
  }
}

module.exports = nextConfig
