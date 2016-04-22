'use strict';

const commitable = require('../commitable');
const typeToChoice = require('../typeToChoice');

module.exports = function getTypePrompt(config, gitLogHelper) {
  const committableTypes = config.types
    .filter(commitable);

  return gitLogHelper
    .sortTypesByUsage(committableTypes.map(type => type.key))
    .then(sortedTypeKeys => {
      const sortedTypes = sortedTypeKeys
        .map(typeKey => committableTypes.find(cType => cType.key === typeKey));

      return {
        type: 'list',
        name: 'type',
        message: 'Select the type of change that you\'re committing:',
        choices: sortedTypes.map(typeToChoice(config.types)),
      };
    });
};
