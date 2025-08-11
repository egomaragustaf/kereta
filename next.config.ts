import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "banner-access.krl.co.id",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
