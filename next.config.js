// next.config.js
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
  
  },
  exportPathMap: (defaultPathMap) => defaultPathMap,
  cssLoaderOptions: {
    url: false
  },
  webpack: (config) => ({
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          loader: 'emit-file-loader',
        },
        {
          test: /\.css$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader'],
        },
      ],
    },
  }),
});
