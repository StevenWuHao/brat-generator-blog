import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.prod.website-files.com",
      "startupfa.me",
      "magicbox.tools",
      "poweruptools.com",
    ],
  },
};

export default nextConfig;
