'use strict';

module.exports = function getSubjectPrompt() {
  return {
    type: 'input',
    name: 'subject',
    message: 'Write a short, imperative tense description of the change:\n',
  };
};
