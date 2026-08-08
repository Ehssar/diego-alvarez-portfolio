import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static `out/` directory. This keeps the site compatible with
  // GitHub Pages when publishing is enabled later.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
