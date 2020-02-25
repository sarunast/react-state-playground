// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addBabelPlugin('react-hot-loader/babel'),
  addBabelPlugin('babel-plugin-styled-components'),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
  }),
);