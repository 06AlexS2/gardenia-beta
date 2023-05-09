/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    MONGODB_URI: "mongodb+srv://alexitoss:Cq33t8hxn2wkgkVZ@vetcluster.dpdra2s.mongodb.net/gardenia?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "1H4V3_sP0k3n",
    NEXTAUTH_URL: "https://gardenia-beta.vercel.app",
  },
}

module.exports = nextConfig
