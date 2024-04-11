/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "www.investopedia.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
