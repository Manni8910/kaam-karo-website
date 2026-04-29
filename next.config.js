/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://kaam-backend-production.up.railway.app',
  },
  async redirects() {
    return [
      {
        source: '/p',
        destination: '/?utm_source=poster&utm_medium=offline&utm_campaign=launch',
        permanent: false,
      },
      {
        source: '/w',
        destination: '/?utm_source=whatsapp&utm_medium=share&utm_campaign=launch',
        permanent: false,
      },
      {
        source: '/i',
        destination: '/?utm_source=instagram&utm_medium=social&utm_campaign=launch',
        permanent: false,
      },
      {
        source: '/c',
        destination: '/?utm_source=college&utm_medium=offline&utm_campaign=launch',
        permanent: false,
      },
      {
        source: '/fb',
        destination: '/?utm_source=facebook&utm_medium=social&utm_campaign=launch',
        permanent: false,
      },
      {
        source: '/b',
        destination: '/?utm_source=business_outreach&utm_medium=offline&utm_campaign=launch',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
