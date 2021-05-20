// next.config.js
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    IDA_API_ID: process.env.IDA_API_ID,
    IDA_API_KEY: process.env.IDA_API_KEY,
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
