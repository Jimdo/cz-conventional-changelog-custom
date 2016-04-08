/* eslint no-console: 0 */
'use stict';

const chalk = require('chalk');

module.exports = {
  warn(header, message) {
    console.log(chalk.yellow(`\nWARNING:\n${header}`));
    if (message && message.length) {
      console.log(message);
    }
  },
  error(err) {
    console.log(chalk.red(err.stack || err));
  },
  chalk,
};
