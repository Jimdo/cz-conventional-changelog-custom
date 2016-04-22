'use strict';

const getTypePrompt = require('./type');
const getScopePrompt = require('./scope');
const getSubjectPrompt = require('./subject');
const getBodyPrompt = require('./body');
const getFooterPrompt = require('./footer');

function flatten(things) {
  return things.reduce((result, thing) => result.concat(thing), []);
}

module.exports = function getPrompts(config) {
  return Promise.all([
    getTypePrompt,
    getScopePrompt,
    getSubjectPrompt,
    getBodyPrompt,
    getFooterPrompt,
  ].map(promptGetter => promptGetter(config))).then(flatten);
};
