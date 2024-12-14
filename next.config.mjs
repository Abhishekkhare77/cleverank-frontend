/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["minio.catax.me"],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("canvas");
    }
    return config;
  },
};

export default nextConfig;
