/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/assets"],
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  ...nextConfig,
};
