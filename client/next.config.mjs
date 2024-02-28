import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com" ,
      },
    ],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddjcpzprt",
  },
};

export default nextConfig;
