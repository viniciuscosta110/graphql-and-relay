/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    relay: {
      src: "./",
      language: "typescript",
      artifactDirectory: "./__generated__",
    },
  },
};

module.exports = nextConfig;
