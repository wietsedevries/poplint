// const isProd = process.env.NODE_ENV === 'production';
const withOffline = require('next-offline')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
      include: /flexboxgrid/,
    });
    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/ranking': { page: '/ranking' },
    '/style-guides': { page: '/style-guides' },
    '/semi-vs-no-semi': { page: '/semi-vs-no-semi' },
    '/tabs-vs-spaces': { page: '/tabs-vs-spaces' },
  }),
};

module.exports = withOffline(nextConfig);
