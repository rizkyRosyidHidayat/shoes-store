/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: 'https://62cee602826a88972d05576c.mockapi.io/api/v1'
  }
}

module.exports = nextConfig
