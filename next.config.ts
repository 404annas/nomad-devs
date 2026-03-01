import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
