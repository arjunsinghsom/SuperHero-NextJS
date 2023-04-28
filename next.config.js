/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI : "mongodb://127.0.0.1:27017"
  }
}

module.exports = nextConfig
