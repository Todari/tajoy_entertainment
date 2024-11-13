/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@tajoy-ent/ui'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
