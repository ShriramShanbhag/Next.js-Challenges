import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'svs.gsfc.nasa.gov',
        protocol: 'https',
        pathname: '/**'

      }
    ]
  }
};

export default nextConfig;
