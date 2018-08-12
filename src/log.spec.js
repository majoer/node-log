const mock = require('mock-require');
let log = require('./log')(__filename);

describe('log', () => {
  let actualNamespace;
  let actualMessage;

  beforeEach(() => {
    mock('debug', (namespace) => {
      actualNamespace = namespace;

      return (message) => {
        actualMessage = message;
        console.log(`${actualNamespace} ${message}`);
      };
    });

    log = mock.reRequire('./log')(__filename);
  });

  afterEach(() => {
    mock.stopAll();
  });

  it('Should log expected message', () => {
    log('My message');

    expect(actualNamespace).toBe('node-log:log.spec.js');
    expect(actualMessage).toBe('My message');
  });
});
