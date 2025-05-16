/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-1585749864755-f1adb4ec8e29",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/photo-1585749864755-f1adb4ec8e29",
      },
    ],
  },
};

module.exports = nextConfig;
