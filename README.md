## node-log

Wrapper for https://www.npmjs.com/package/debug

#### Usage:
```
var log = require('node-log')(__filename);

log('hello world');

Output (in console):
{my-project-name}:{current-file-name} hello world
```

#### How does it work?
It simply builds the debug `namespace` from `name` in your `package.json` and `__filename`, which is used to initialize node-log.

#### I see no output in the console :S

You need to set the proper DEBUG environment variable. E.g:
`DEBUG={your-project-name}:*`

Where 'your-project-name' is the name attribute in your package.json.
