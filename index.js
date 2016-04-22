'use strict';

const getChangelogrcConfig = require('get-changelogrc-config');
const getPrompts = require('./lib/prompts');
const formatCommitMsg = require('./lib/formatCommitMsg');
const changelogrcAngular = require('changelogrc-angular');
const log = require('./lib/log');

module.exports = {
  prompter(inquirer, commit) {
    getChangelogrcConfig()
      .catch(() => changelogrcAngular)
      .then(config => getPrompts(config)
        .then(prompts => inquirer.prompt(prompts, answers => {
          const message = formatCommitMsg(answers, config);

          if (message) {
            return commit(message);
          }

          return log.warn('nothing committed');
        }))
      )
      .catch(err => log.error(err));
  },
};
