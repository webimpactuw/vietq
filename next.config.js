/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { urlImports: ["https://themer.sanity.build/"] },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION", //your next configs goes here
  },
  ...nextConfig,
});

// module.exports = nextConfig;
