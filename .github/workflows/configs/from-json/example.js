// @ts-check

/** @type import('./type').IConfig */
const config = {
  // web: [
  //   { name: 'server-1', ip: '123.456.78.90' },
  //   { name: 'server-2', ip: '123.456.78.111' },
  // ],
  db: [{ dbserver: 'server-3', ip: '123.456.78.90' }],
};

require('../lib').setJsonOutput(config);
