'use strict';

const GitLogHelper = require('commitizen-git-log-helper');
const getTypePrompt = require('./type');
const getScopePrompt = require('./scope');
const getSubjectPrompt = require('./subject');
const getBodyPrompt = require('./body');
const getFooterPrompt = require('./footer');

function flatten(things) {
  return things.reduce((result, thing) => result.concat(thing), []);
}

module.exports = function getPrompts(config) {
  const gitLogHelper = new GitLogHelper();

  const promtPromises = [
    getTypePrompt,
    getScopePrompt,
    getSubjectPrompt,
    getBodyPrompt,
    getFooterPrompt,
  ].map(promptGetter => promptGetter(config, gitLogHelper));

  return Promise.all(promtPromises).then(flatten);
};
