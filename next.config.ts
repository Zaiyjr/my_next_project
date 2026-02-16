import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //  domains: ['https://teamplatedev.github.io'],
    //  unoptimized:true,
    remotePatterns: [
      {
        protocol: 'https',
       hostname: 'teamplatedev.github.io',
        pathname: '**',
       
      },
      {
        protocol: 'https',
        hostname: 'teamplatedev.github.io',
        pathname: '/**',
      },
      
    ],
  },
};

export default nextConfig;