'use strict';

const commitable = require('../commitable');
const typeToChoice = require('../typeToChoice');

module.exports = function getTypePrompt(config) {
  const prompt = {
    type: 'list',
    name: 'type',
    message: 'Select the type of change that you\'re committing:',
    choices: config.types
      .filter(commitable)
      .map(typeToChoice(config.types)),
  };

  return prompt;
};
