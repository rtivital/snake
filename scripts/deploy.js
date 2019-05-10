/* eslint-disable no-console, import/no-extraneous-dependencies */
const bluebird = require('bluebird');
const publish = bluebird.promisify(require('gh-pages').publish);
const chalk = require('chalk');
const rimraf = bluebird.promisify(require('rimraf'));
const build = require('./build');
const webpackConfig = require('../webpack.config');

rimraf(webpackConfig.output.path)
  .then(() => console.log(chalk.green.bold`✔ Removed old public folder`))
  .then(build)
  .then(() => console.log(chalk.yellow`Deploying to Github Pages...`))
  .then(() => publish(webpackConfig.output.path))
  .then(() => console.log(chalk.green.bold`✔ Successfully deployed to Github pages!`))
  .catch((error) => console.error(chalk.red.bold`✗ Error occured while deploying to Github Pages:`, '\n', error));
