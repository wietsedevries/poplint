const isProd = process.env.NODE_ENV === 'production'

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
      include: /flexboxgrid/,
    });
    return config;
  },
  assetPrefix: isProd ? '' : '',
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/ranking': { page: '/ranking' },
      '/style-guides': { page: '/style-guides' },
      '/semi-vs-no-semi': { page: '/semi-vs-no-semi' },
      '/tabs-vs-spaces': { page: '/tabs-vs-spaces' },
    };
  },
};
