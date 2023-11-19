/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "reqres.in",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "lecourrier-du-soir.com",
        port: "",
        pathname: "/wp-content/uploads/2017/07/Success-Story.jpg"
      }
    ],
  },
};

module.exports = nextConfig;
