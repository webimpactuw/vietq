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
        destination: "https://www.apichaya.org/give",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
