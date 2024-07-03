/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://www.wccda.org/donate",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
