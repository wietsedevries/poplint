const withCSS = require('@zeit/next-css');

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
  // exportPathMap: () => {
  //   return {
  //     '/': { page: '/' },
  //     '/ranking': { page: '/ranking' },
  //     '/style-guides': { page: '/style-guides' },
  //     '/semi-vs-no-semi': { page: '/semi-vs-no-semi' },
  //     '/tabs-vs-spaces': { page: '/tabs-vs-spaces' },
  //   };
  // },
};
