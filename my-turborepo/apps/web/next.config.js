/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/assets"],
};

const config = {
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

export default config;
