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
  webpack: (config) => {
    config.resolve.extensions = ['.js', '.jsx', ...config.resolve.extensions];
    config.resolve.modules.push(path.resolve('./'));
    return config;
  }
});