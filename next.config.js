const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
