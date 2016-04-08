'use strict';

module.exports = function getBodyPrompt() {
  return {
    type: 'input',
    name: 'body',
    message: 'Provide a longer description of the change:\n',
  };
};
