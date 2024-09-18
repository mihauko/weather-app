/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        pathname: '/weather/64x64/day/*',
      },
    ],
    domains: ['cdn.weatherapi.com'],
  },
};

export default nextConfig;
