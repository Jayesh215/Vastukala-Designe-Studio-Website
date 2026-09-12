import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives inside a user directory that contains another lockfile,
  // so the workspace root is pinned explicitly.
  outputFileTracingRoot: path.join(import.meta.dirname, "."),
  images: {
    // Imagery is referenced by URL from the content layer so it can be swapped
    // without touching components. Add a hostname here before using a new source.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
