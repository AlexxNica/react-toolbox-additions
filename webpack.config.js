const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './example/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'example.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.css', '.js', '.json'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style']
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      loader: 'babel',
      include: [path.join(__dirname, './lib'), path.join(__dirname, './example')]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.css$/,
      include: [path.join(__dirname, './lib'), path.join(__dirname, './example')],
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
    }]
  },
  postcss () {
    return [
      require('postcss-import')({
        root: __dirname,
        path: [path.join(__dirname, './lib')]
      }),
      require('postcss-mixins')(),
      require('postcss-each')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')({ clearMessages: true })
    ];
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};
