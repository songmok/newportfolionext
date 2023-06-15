/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: ".",
  images: {
    domains: [
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "www.notion.so",
    ],
  },
  server: {
    webSocketProxy: {
      path: "/_next/webpack-hmr",
      target: "http://localhost:5000",
      ws: true,
    },
  },
};

module.exports = nextConfig;
