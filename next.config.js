/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["stripe-camo.global.ssl.fastly.net"],
    domains: ["res.cloudinary.com"],
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
