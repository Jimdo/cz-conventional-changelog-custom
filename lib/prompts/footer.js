'use strict';

module.exports = function getFooterPrompt() {
  return {
    type: 'input',
    name: 'footer',
    message: 'List any breaking changes or issues closed by this change:\n',
  };
};
