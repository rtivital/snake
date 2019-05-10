/* eslint-disable no-console, import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const webpackConfig = require('../webpack.config');

const PORT = process.env.PORT || 5000;

const serverConfig = {
  contentBase: path.join(__dirname, '../dist'),
  publicPath: '/',
  stats: { colors: true },
  hot: true,
  historyApiFallback: true,
};

new WebpackDevServer(webpack(webpackConfig), serverConfig).listen(PORT, 'localhost', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Listening at ${chalk.bold.cyan(`http://localhost:${PORT}/`)}`);
  }
});
