'use strict';

const commitable = require('./commitable');
const baseIndention = 2;

function format(key, description, typelen) {
  const indendetDescription = description
    .split('\n')
    .join(`\n${' '.repeat(baseIndention + typelen + 2)}`);

  return `${key}:${' '.repeat(typelen - key.length + 1)}${indendetDescription}`;
}

module.exports = function typeToChoice(alltypes) {
  const typelen = alltypes.filter(commitable)
    .reduce((result, type) => Math.max(type.key.length, result), 0);

  return function converter(type) {
    return {
      value: type.key,
      name: format(type.key, type.description, typelen),
    };
  };
};
