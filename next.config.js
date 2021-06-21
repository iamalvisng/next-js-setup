module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
