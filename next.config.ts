import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  },
};
nextConfig.typescript = {
  ignoreBuildErrors: true,
};
export default nextConfig;
