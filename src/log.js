const path = require('path');
const debug = require('debug');
const projectName = require(path.resolve('package.json')).name;

function createLogger(filename) {
  return debug(`${projectName}:${path.basename(filename)}`);
}

debug('node-log')(`Initialized logger for project ${projectName}`);

module.exports = createLogger;
