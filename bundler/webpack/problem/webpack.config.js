/**
 * @type {import('webpack').Configuration}
 */
 module.exports = {
  entry: {
    module1: ['src/module-1/index.js'],
    module2: ['src/module-2/index.js'],
    common: ['src/common/index.js'],
    vendor: ['lodash'],
    main: ['src/index.js'],
  },

  mode: 'production',

  output: {
    filename: '[name].[chunkhash:8].js',
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {},
  },
}