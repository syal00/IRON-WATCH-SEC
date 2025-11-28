/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use 'export' for production builds, not for dev server
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig


