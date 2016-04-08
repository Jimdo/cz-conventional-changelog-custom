'use strict';

const wrap = require('word-wrap');
const log = require('./log');
const maxLineWidth = 100;
const wrapOptions = {
  trim: true,
  newline: '\n',
  indent: '',
  width: maxLineWidth,
};

module.exports = function formatCommitMsg(answers) {
  const scope = answers.scope.trim() ? `(${answers.scope.trim()})` : '';
  const head = `${answers.type}${scope}: ${answers.subject.trim()}`;
  const body = answers.body;

  if (head.length > maxLineWidth) {
    log.warn(
      `commit head is ${head.length - maxLineWidth} ` +
      'characters longer than recommended',
      `consider shortening by using \`${log.chalk.cyan('git commit --amend')}\`.`
    );
  }

  return [
    head,
    wrap(body, wrapOptions),
    wrap(answers.footer, wrapOptions),
  ].join('\n\n');
};
