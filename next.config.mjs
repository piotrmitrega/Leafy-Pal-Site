/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

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
  basePath: isGitHubPages ? "/Leafy-Pal-Site" : "",
  assetPrefix: isGitHubPages ? "/Leafy-Pal-Site/" : "",
  trailingSlash: true,
};

export default nextConfig;
