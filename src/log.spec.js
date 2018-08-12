const mock = require('mock-require');
let log = require('./log');

describe('log', () => {
  let message;

  beforeEach(() => {
    mock('debug', (msg) => {
      message = msg;
    });

    log = mock.reRequire('./log');
  });

  afterEach(() => {
    mock.stopAll();
  });

  it('Should log expected message', () => {
    log('my-module');

    expect(message).toBe('node-log:my-module');
  });
});
