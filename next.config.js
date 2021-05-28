// next.config.js
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    IDA_APP_ID: process.env.IDA_APP_ID,
    IDA_APP_KEY: process.env.IDA_APP_KEY,
    GRAPHQL_URI: process.env.GRAPHQL_URI,
    AUTOCOMPLETE_KEY: process.env.AUTOCOMPLETE_KEY,
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