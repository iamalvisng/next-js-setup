module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  // Proxy to backend
  async rewrites() {
    return [
      {
        source: '/web/api/:path*',
        destination: 'http://localhost:8081/web/api/:path*',
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
