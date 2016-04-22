'use strict';

const GitLogHelper = require('commitizen-git-log-helper');
const CREATE_NEW_STR = ' - CREATE NEW - ';
const NO_SPECIFIC_STR = ' - NO SPECIFIC - ';

function getScopePrompt(config, gitLogHelper) {
  return gitLogHelper.log.then((log) => [
    {
      type: 'list',
      name: 'scope',
      message: 'Select the scope of this change:\n',
      choices(answers) {
        return [
          CREATE_NEW_STR,
          ' - NO SPECIFIC - ',
        ].concat(
          GitLogHelper.getSortedScopesForType(log, answers.type)
        );
      },
    },
    {
      type: 'input',
      name: 'scope',
      message: 'Name the scope of this change:\n',
      when(answers) {
        return answers.scope === CREATE_NEW_STR;
      },
    },
  ]);
}

getScopePrompt.NO_SPECIFIC_STR = NO_SPECIFIC_STR;

module.exports = getScopePrompt;
