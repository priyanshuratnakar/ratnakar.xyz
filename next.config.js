/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/howtobanger",
        destination: "/bangerplaybook",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
