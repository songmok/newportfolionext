/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      "images.unsplash.com",
      "songmok.site",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "s3.us-west-2.amazonaws.com",
      "www.notion.so",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/secure.notion-static.com/**",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/secure.notion-static.com/**",
      },
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
