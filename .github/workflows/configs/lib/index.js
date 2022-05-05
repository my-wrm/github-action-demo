// @ts-check

/** @type import('@actions/core') */
const core = require('@actions/core');

/**
 * Set Output with JSON format to GitHub Actions
 * @param {any} value
 */
function setJsonOutput(value) {
  const outputName = process.argv[2] ? process.argv[2] : 'matrix';
  core.setOutput(outputName, JSON.stringify(value));
}

module.exports = { setJsonOutput };
