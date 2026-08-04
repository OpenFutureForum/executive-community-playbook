import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/executive-community-playbook" : "",
  assetPrefix: isGitHubPages ? "/executive-community-playbook/" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
