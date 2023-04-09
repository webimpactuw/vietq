/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { urlImports: ["https://themer.sanity.build/"] },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
