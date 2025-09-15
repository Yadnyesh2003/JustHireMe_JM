import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/vapi/generate", // The API route to which you want to apply the headers
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://api.vapi.ai", // Or '*' to allow all origins (less secure)
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "POST, OPTIONS", // Allow POST and preflight OPTIONS requests
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type", // Allow the Content-Type header
          },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
