/**
 * Lifted from @godaddy/gasket-plugin-linaria
 */

const LINARIA_EXTENSION = '.linaria.module.css';

/**
 * Iterate through webpack rules and update to include the linaria extension
 *
 * https://github.com/callstack/linaria/issues/724#issuecomment-775643517
 *
 * @param {Object} rules - webpack rules
 */
function traverse(rules) {

  for (const rule of rules) {
    if (typeof rule.loader === 'string' && rule.loader.includes('css-loader')) {
      if (
        rule.options &&
        rule.options.modules &&
        typeof rule.options.modules.getLocalIdent === 'function'
      ) {
        const nextGetLocalIdent = rule.options.modules.getLocalIdent;
        rule.options.modules.getLocalIdent = (
          context,
          _,
          exportName,
          options
        ) => {
          if (context.resourcePath.includes(LINARIA_EXTENSION)) {
            return exportName;
          }
          return nextGetLocalIdent(context, _, exportName, options);
        };
      }
    }
    if (typeof rule.use === 'object') {
      traverse(Array.isArray(rule.use) ? rule.use : [rule.use]);
    }
    if (Array.isArray(rule.oneOf)) {
      traverse(rule.oneOf);
    }
  }
}

/**
 * Modify webpack rules on the next config before the next server is created.
 *
 // * @param {Gasket} gasket - Gasket
 * @param {object} config - Next configuration from gasket.config
 * @returns {object} config
 */
module.exports = function withLinaria(config = {}) {
  return {
    ...config,
    webpack(webpackConfig, options) {
      traverse(webpackConfig.module.rules);

      webpackConfig.module.rules.push({
        test: /(?!_app)\.(tsx|ts|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('@linaria/webpack-loader'),
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              extension: LINARIA_EXTENSION
            }
          }
        ]
      });

      webpackConfig.module.rules.push({
        test: /_app\.(tsx|ts|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('@linaria/webpack-loader'),
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              extension: '.css'
            }
          }
        ]
      });

      if (typeof config.webpack === 'function') {
        return config.webpack(webpackConfig, options);
      }

      return webpackConfig;
    }
  };
};
