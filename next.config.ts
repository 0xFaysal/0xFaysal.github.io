import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  // Keep a running dev server's Webpack chunks separate from production builds.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
});

export default nextConfig;
