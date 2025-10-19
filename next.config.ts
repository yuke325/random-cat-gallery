import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
      },
      {
        protocol: "https",
        hostname: "api.thecatapi.com",
      },
      // 他のドメインを追加する場合はここに
    ],
  },
};

export default nextConfig;
