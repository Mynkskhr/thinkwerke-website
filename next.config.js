/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // <-- REQUIRED for GitHub Pages
  trailingSlash: true,       // helps with static routing on Pages
  images: { unoptimized: true }, // next/image doesn't work on Pages without this
};

module.exports = nextConfig;
