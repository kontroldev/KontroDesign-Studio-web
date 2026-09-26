import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cloudflare Pages publishes the static files generated in `out`.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
