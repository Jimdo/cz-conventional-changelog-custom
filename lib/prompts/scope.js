'use strict';

module.exports = function getScopePrompt() {
  return {
    type: 'input',
    name: 'scope',
    message: 'Denote the scope of this change ($location, $browser, $compile, etc.):\n',
  };
};
