import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',               
        destination: 'http://localhost:8000/api/:path*',  
      },
    ]
  },
};

export default nextConfig;