import type { Options } from '@wdio/types';
const headless: boolean = process.argv.includes('--headless') ? true : false;
const browserOptions = {
  args: headless
    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--disable-infobars']
    : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--disable-infobars']
};

export const dynamicConfig: Options.Testrunner = {
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': browserOptions,
      acceptInsecureCerts: true
    }
  ],
};