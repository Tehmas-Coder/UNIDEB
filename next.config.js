/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // minimumCacheTTL: 60 * 60 * 2, // 2 Hours
    // domains: [
    // ],
  },
  compress: true,
  trailingSlash: true,
  output: "export",
};
