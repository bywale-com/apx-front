/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for production deployment
  output: 'standalone',
  
  // Set up proper asset prefix for domain
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Configure images for production
  images: {
    domains: ['home.apexintro.com'],
    unoptimized: true
  },
  
  // Enable compression
  compress: true,
  
  // Disable ESLint during build for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configure headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
