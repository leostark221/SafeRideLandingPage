/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export → deploys to Cloudflare Pages (or any static host).
  output: 'export',
  // The export has no image-optimization server, so serve images as-is.
  images: { unoptimized: true },
  // Emit /route/index.html so Cloudflare serves clean URLs without redirects.
  trailingSlash: true,
};

export default nextConfig;
