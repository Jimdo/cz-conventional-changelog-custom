'use strict';

module.exports = function commitable(type) {
  return type.commitable !== false;
};
