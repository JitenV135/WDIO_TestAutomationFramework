import type { Options } from '@wdio/types';

export const dynamicConfig: Options.Testrunner = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      { browserstackLocal: false, opts: { forcelocal: false } },
    ],
  ],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: 'latest',
        os: 'Windows',
        osVersion: '11',
      }
    },
    {
      browserName: 'Firefox',
      'bstack:options': {
        browserVersion: 'latest',
        os: 'Windows',
        osVersion: '11',
      }
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        browserVersion: '17.0',
        os: 'OS X',
        osVersion: 'Sonoma'
      }
    },
  ],
};