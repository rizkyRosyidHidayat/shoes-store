/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: 'https://my-json-server.typicode.com/rizkyRosyidHidayat/shoes-store-db'
  }
}

module.exports = nextConfig
