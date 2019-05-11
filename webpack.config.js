const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getRepositoryName = require('git-repo-name').sync;

const PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;

// plugins used both in production and development
const plugins = [
  new HtmlWebpackPlugin({ template: 'template.ejs' }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
  }),
];

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',

  optimization: {
    minimize: PRODUCTION,
  },

  devtool: PRODUCTION ? false : 'eval',

  entry: PRODUCTION
    ? path.join(__dirname, './src/app')
    : [
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, './src/app'),
    ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: PRODUCTION ? `/${getRepositoryName()}/` : '/',
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot|ogg)$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: PRODUCTION ? plugins : [...plugins, new webpack.HotModuleReplacementPlugin()],
};
