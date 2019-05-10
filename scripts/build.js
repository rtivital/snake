/* eslint-disable no-console, import/no-extraneous-dependencies */
const webpack = require('webpack');
const chalk = require('chalk');
const config = require('../webpack.config');

function build() {
  console.log(chalk.yellow`Building bundle`);

  return new Promise((resolve, reject) => {
    webpack(config).run((err) => {
      if (err) {
        return reject(err);
      }
      console.log(chalk.green.bold`✔ Bundle was successfully built!`);
      return resolve();
    });
  });
}

module.exports = build;

process.env.BUILD === 'build' && build();
