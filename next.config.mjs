/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/Leafy-Pal-Site",
  assetPrefix: "/Leafy-Pal-Site/",
  trailingSlash: true,
};

export default nextConfig;
