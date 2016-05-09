'use strict';

const wrap = require('word-wrap');
const log = require('./log');
const wrapOptionDefaults = {
  trim: true,
  newline: '\n',
  indent: '',
};
const getScopePrompt = require('./prompts/scope');

function formatScope(scope) {
  const bareScope = scope
    .replace(getScopePrompt.NO_SPECIFIC_STR, '')
    .trim();

  return bareScope.length ? `(${bareScope})` : '';
}

function formatHead(type, scope, subject) {
  return `${type}${scope}: ${subject.trim()}`;
}

module.exports = function formatCommitMsg(answers, config) {
  const maxLineLengthOpts = Object.assign(
    { head: 100, body: 100 },
    config['max-line-length'] || {}
  );
  const wrapOptions = Object.assign(
    {},
    wrapOptionDefaults,
    { width: maxLineLengthOpts.body }
  );

  const head = formatHead(
    answers.type,
    formatScope(answers.scope),
    answers.subject
  );
  const body = answers.body;

  if (head.length > maxLineLengthOpts.head) {
    log.warn(
      `commit head is ${head.length - maxLineLengthOpts.head} ` +
        'characters longer than recommended',
      `consider shortening it to ${maxLineLengthOpts.head} chars ` +
        `by using \`${log.chalk.cyan('git commit --amend --allow-empty')}\`.\n`
    );
  }

  return [
    head,
    wrap(body, wrapOptions),
    wrap(answers.footer, wrapOptions),
  ].join('\n\n');
};
