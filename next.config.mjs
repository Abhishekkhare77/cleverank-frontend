import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  images: {
    // Replace domains with remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio.catax.me',
        port: '',
        pathname: '/**', // Adjust as needed for your image paths
      },
    ],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('canvas');
    }
    return config;
  },
};

export default nextConfig;
