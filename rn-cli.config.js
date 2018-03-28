const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  getBlacklistRE() {
    return metroBundler.createBlacklist(['../../node_modules/react-native']);
    // return metroBundler.createBlacklist([/\.\/node_modules\/react-native\/.*/]);
  },
  getProjectRoots() {
    return [path.resolve(__dirname), path.resolve(__dirname, '../../')];
  },
};
module.exports = config;
