
module.exports = function withBundleAnalyzer(config = {}) {
  return {
    ...config,
    webpack(webpackConfig, options) {
      const { isServer } = options;
      if(!isServer && process.env.ANALYZE) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        webpackConfig.plugins.push(new BundleAnalyzerPlugin())
      }

      if (typeof config.webpack === 'function') {
        return config.webpack(webpackConfig, options);
      }

      return webpackConfig;
    }
  };
};
