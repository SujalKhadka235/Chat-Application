/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.gitbusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
