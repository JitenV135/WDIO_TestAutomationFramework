import type { Options } from '@wdio/types'
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
//import SlackReporter from "@moroo/wdio-slack-reporter";
import { environment, ENV } from './src/utils/environments.utils.js';
import { createRequire } from "module";
import { testData, TestType, emailTests } from './src/utils/data/testData.js';
import { API } from './src/utils/api/api.utils.js';
import logout from './src/support/actions/common/logout.js';
import createInbox from './src/utils/api/mailslurp/actions/createInbox.js';
import clean from './src/utils/data/cleanup/clean.js';

const require = createRequire(import.meta.url);

const allure = require('allure-commandline');

const allureDir = './reports/allure';

if (!ENV || !['local', 'staging', 'prod'].includes(ENV)) {
  console.log(
    'Please use the following format when running the test script: ENV=staging|prod'
  );
  process.exit();
}

export const testgql = environment[ENV].baseUrl

const local = process.argv.includes('--local') ? 'LOCAL': '';
const firefox = process.argv.includes('--firefox') ? 'FIREFOX' : '';
const docker = process.argv.includes('--docker') ? 'DOCKER' : '';
const selenoid = process.argv.includes('--selenoid') ? 'SELENOID' : '';
const edge = process.argv.includes('--edge') ? 'EDGE' : '';
const crossbrowser = process.argv.includes('--crossbrowser') ? 'CROSSBROWSER' : '';
const standalone = process.argv.includes('--standalone') ? 'STANDALONE' : '';
const safari = process.argv.includes('--safari') ? 'SAFARI' : '';
const appium = process.argv.includes('--appium') ? 'APPIUM' : '';
const browserstack = process.argv.includes('--browserstack') ? 'BROWSERSTACK' : '';
const saucelabs = process.argv.includes('--saucelabs') ? 'SAUCELABS' : '';
const serviceType = firefox || edge || docker || selenoid || crossbrowser || safari || standalone || appium || browserstack || saucelabs || local;
console.log('Service type: ' + serviceType);
const dynamicConfig = await import(`./src/configs/wdio.${serviceType}.conf.ts`);

export const config: Options.Testrunner = Object.assign(
    {},
    {
        //
        // ====================
        // Runner Configuration
        // ====================
        // WebdriverIO supports running e2e tests as well as unit and component tests.
        runner: 'local',
        autoCompileOpts: {
            autoCompile: true,
            tsNodeOpts: {
                project: './tsconfig.json',
                transpileOnly: true
            }
        },
        
        //
        // ==================
        // Specify Test Files
        // ==================
        // Define which test specs should run. The pattern is relative to the directory
        // of the configuration file being run.
        //
        // The specs are defined as an array of spec files (optionally using wildcards
        // that will be expanded). The test for each spec file will be run in a separate
        // worker process. In order to have a group of spec files run in the same worker
        // process simply enclose them in an array within the specs array.
        //
        // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
        // then the current working directory is where your `package.json` resides, so `wdio`
        // will be called from there.
        //
        specs: [
            './src/features/**/*.feature'
        ],
        // Patterns to exclude.
        exclude: [
            // 'path/to/excluded/files'
        ],
        //
        // ============
        // Capabilities
        // ============
        // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
        // time. Depending on the number of capabilities, WebdriverIO launches several test
        // sessions. Within your capabilities you can overwrite the spec and exclude options in
        // order to group specific specs to a specific capability.
        //
        // First, you can define how many instances should be started at the same time. Let's
        // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
        // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
        // files and you set maxInstances to 10, all spec files will get tested at the same time
        // and 30 processes will get spawned. The property handles how many capabilities
        // from the same test should run tests.
        //
        maxInstances: 10,
        //
        // If you have trouble getting all important capabilities together, check out the
        // Sauce Labs platform configurator - a great tool to configure your capabilities:
        // https://saucelabs.com/platform/platform-configurator
        //
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,
            browserVersion: '115',
            'goog:chromeOptions': {
                args: [
                    '--disable-infobars',
                ],
            },
        }],
    
        //
        // ===================
        // Test Configurations
        // ===================
        // Define all options that are relevant for the WebdriverIO instance here
        //
        // Level of logging verbosity: trace | debug | info | warn | error | silent
        logLevel: 'info',
        //
        // Set specific log levels per logger
        // loggers:
        // - webdriver, webdriverio
        // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
        // - @wdio/mocha-framework, @wdio/jasmine-framework
        // - @wdio/local-runner
        // - @wdio/sumologic-reporter
        // - @wdio/cli, @wdio/config, @wdio/utils
        // Level of logging verbosity: trace | debug | info | warn | error | silent
        // logLevels: {
        //     webdriver: 'info',
        //     '@wdio/appium-service': 'info'
        // },
        //
        // If you only want to run your tests until a specific amount of tests have failed use
        // bail (default is 0 - don't bail, run all tests).
        bail: 0,
        //
        // Set a base URL in order to shorten url command calls. If your `url` parameter starts
        // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
        // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
        // gets prepended directly.
        baseUrl: environment[ENV].baseUrl,
        //
        // Default timeout for all waitFor* commands.
        waitforTimeout: 10000,
        //
        // Default timeout in milliseconds for request
        // if browser driver or grid doesn't send response
        connectionRetryTimeout: 120000,
        //
        // Default request retries count
        connectionRetryCount: 3,
        //
        // Test runner services
        // Services take over a specific job you don't want to take care of. They enhance
        // your test setup with almost no effort. Unlike plugins, they don't add new
        // commands. Instead, they hook themselves up into the test process.
        // services: [],
        //
        // Framework you want to run your specs with.
        // The following are supported: Mocha, Jasmine, and Cucumber
        // see also: https://webdriver.io/docs/frameworks
        //
        // Make sure you have the wdio adapter package for the specific framework installed
        // before running any tests.
        framework: 'cucumber',
        //
        // The number of times to retry the entire specfile when it fails as a whole
        // specFileRetries: 1,
        //
        // Delay in seconds between the spec file retry attempts
        // specFileRetriesDelay: 0,
        //
        // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
        // specFileRetriesDeferred: false,
        //
        // Test reporter for stdout.
        // The only one supported by default is 'dot'
        // see also: https://webdriver.io/docs/dot-reporter
        reporters: [
            'spec',
            [
                'allure',
                {
                  outputDir: allureDir + '/allure-results',
                  useCucumberStepReporter: true,
                  disableWebdriverStepsReporting: true,
                  disableWebdriverScreenshotReporting: true,
                }
            ],
            [
                'cucumberjs-json', 
                {
                    jsonFolder: '.tmp/json/',
                    language: 'en',
                }
            ],
            // [
            //     SlackReporter,
            //     {
            //         slackOptions: {
            //             type: 'web-api',
            //             channel: process.env.SLACK_CHANNEL,
            //             slackBotToken: process.env.SLACK_BOT_TOKEN,
            //             filterForDetailResults: [
            //                 'passed',
            //                 'failed',
            //                 'pending',
            //                 'skipped'
            //               ],
            //         },
            //         notifyTestFinishMessage: true,
            //         useScenarioBasedStateCounts: true,
            //         emojiSymbols: {
            //             passed: ':white_check_mark:',
            //             failed: ':x:',
            //             skipped: ':double_vertical_bar:',
            //             pending: ':grey_question:',
            //             start: ':rocket:',
            //             finished: ':checkered_flag:',
            //             watch: ':stopwatch:'
            //         },
            //     }
            // ]
        ],
    
        //
        // If you are using Cucumber you need to specify the location of your step definitions.
        cucumberOpts: {
            // <string[]> (file/dir) require files before executing features
            require: ['./src/steps/*.ts'],
            // <boolean> show full backtrace for errors
            backtrace: false,
            // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
            requireModule: [],
            // <boolean> invoke formatters without executing steps
            dryRun: false,
            // <boolean> abort the run on first failure
            failFast: false,
            // <boolean> hide step definition snippets for pending steps
            snippets: true,
            // <boolean> hide source uris
            source: true,
            // <boolean> fail if there are any undefined or pending steps
            strict: false,
            // <string> (expression) only execute the features or scenarios with tags matching the expression
            tagExpression: '',
            // <number> timeout for step definitions
            timeout: 60000,
            // <boolean> Enable this config to treat undefined definitions as warnings.
            ignoreUndefinedDefinitions: false
        },
        
        //
        // =====
        // Hooks
        // =====
        // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
        // it and to build services around it. You can either apply a single function or an array of
        // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
        // resolved to continue.
        /**
         * Gets executed once before all workers get launched.
         * @param {object} config wdio configuration object
         * @param {Array.<Object>} capabilities list of capabilities details
         */
        onPrepare: function () {
            const fs = require('fs');
    
            const dir = allureDir + '/allure-results';
            try {
              if (fs.existsSync(dir)) {
                fs.rmSync(dir, { recursive: true });
              }
              console.log(`${dir} deleted`);
            } catch (err) {
              console.error('error while deleting dir');
              if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                console.log('dir created');
              }
            }
        },
        /**
         * Gets executed before a worker process is spawned and can be used to initialise specific service
         * for that worker as well as modify runtime environments in an async fashion.
         * @param  {string} cid      capability id (e.g 0-0)
         * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
         * @param  {object} specs    specs to be run in the worker process
         * @param  {object} args     object that will be merged with the main configuration once worker is initialized
         * @param  {object} execArgv list of string arguments passed to the worker process
         */
        // onWorkerStart: function (cid, caps, specs, args, execArgv) {
        // },
        /**
         * Gets executed just after a worker process has exited.
         * @param  {string} cid      capability id (e.g 0-0)
         * @param  {number} exitCode 0 - success, 1 - fail
         * @param  {object} specs    specs to be run in the worker process
         * @param  {number} retries  number of retries used
         */
        // onWorkerEnd: function (cid, exitCode, specs, retries) {
        // },
        /**
         * Gets executed just before initialising the webdriver session and test framework. It allows you
         * to manipulate configurations depending on the capability or spec.
         * @param {object} config wdio configuration object
         * @param {Array.<Object>} capabilities list of capabilities details
         * @param {Array.<String>} specs List of spec file paths that are to be run
         * @param {string} cid worker id (e.g. 0-0)
         */
        // beforeSession: function (config, capabilities, specs, cid) {
        // },
        /**
         * Gets executed before test execution begins. At this point you can access to all global
         * variables like `browser`. It is the perfect place to define custom commands.
         * @param {Array.<Object>} capabilities list of capabilities details
         * @param {Array.<String>} specs        List of spec file paths that are to be run
         * @param {object}         browser      instance of created browser/device session
         */
        before: async function () {
          browser.maximizeWindow();
          const token = (await API.catalystLogin()).data.login.token;
          testData.setToken(token);
        },
        /**
         * Runs before a WebdriverIO command gets executed.
         * @param {string} commandName hook command name
         * @param {Array} args arguments that command would receive
         */
        // beforeCommand: function (commandName, args) {
        // },
        /**
         * Cucumber Hooks
         *
         * Runs before a Cucumber Feature.
         * @param {string}                   uri      path to feature file
         * @param {GherkinDocument.IFeature} feature  Cucumber feature object
         */
        // beforeFeature: function () {
        // },
        /**
         *
         * Runs before a Cucumber Scenario.
         * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
         * @param {object}                 context  Cucumber World object
         */
        beforeScenario: async function (world: any) {
          const promises: any = [];
          let testType;
          let testValue = '';

          world.pickle.tags.forEach(async (tag: any) => {
            testType = (tag.name).slice(1);

            if (Object.values(TestType).includes(testType)) {
              if (emailTests.includes(testType)) {
                promises.push(createInbox());
                await Promise
                .allSettled(promises)
                .then((results) => results.forEach((result) => {
                    if (result.status === 'fulfilled') {
                      testValue = result.value;
                    }
                }))
              }
              testData.addData(browser.sessionId, testType, testValue);
            } else {
              console.log('ERROR WITH TEST TYPE TAG:', testType);
            } 
          })
        },
        /**
         *
         * Runs before a Cucumber Step.
         * @param {Pickle.IPickleStep} step     step data
         * @param {IPickle}            scenario scenario pickle
         * @param {object}             context  Cucumber World object
         */
        beforeStep: function () {
          browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete')
          );
        },
        /**
         *
         * Runs after a Cucumber Step.
         * @param {Pickle.IPickleStep} step             step data
         * @param {IPickle}            scenario         scenario pickle
         * @param {object}             result           results object containing scenario results
         * @param {boolean}            result.passed    true if scenario has passed
         * @param {string}             result.error     error stack if scenario failed
         * @param {number}             result.duration  duration of scenario in milliseconds
         * @param {object}             context          Cucumber World object
         */
        afterStep: function () {
          browser.takeScreenshot();
        },
        /**
         *
         * Runs after a Cucumber Scenario.
         * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
         * @param {object}                 result           results object containing scenario results
         * @param {boolean}                result.passed    true if scenario has passed
         * @param {string}                 result.error     error stack if scenario failed
         * @param {number}                 result.duration  duration of scenario in milliseconds
         * @param {object}                 context          Cucumber World object
         */
        afterScenario: async function () {
          if ((await browser.getNamedCookie('authToken')).value && !((await browser.getUrl()).includes('signup'))) {
            await logout();
            console.log('LOG OUT SUCCESS');
          }
        },
        /**
         *
         * Runs after a Cucumber Feature.
         * @param {string}                   uri      path to feature file
         * @param {GherkinDocument.IFeature} feature  Cucumber feature object
         */
        // afterFeature: function (uri, feature) {
        // },
        
        /**
         * Runs after a WebdriverIO command gets executed
         * @param {string} commandName hook command name
         * @param {Array} args arguments that command would receive
         * @param {number} result 0 - command success, 1 - command error
         * @param {object} error error object if any
         */
        // afterCommand: function (commandName, args, result, error) {
        // },
        /**
         * Gets executed after all tests are done. You still have access to all global variables from
         * the test.
         * @param {number} result 0 - test pass, 1 - test fail
         * @param {Array.<Object>} capabilities list of capabilities details
         * @param {Array.<String>} specs List of spec file paths that ran
         */
        after: async function () {
          await clean();
        },
        /**
         * Gets executed right after terminating the webdriver session.
         * @param {object} config wdio configuration object
         * @param {Array.<Object>} capabilities list of capabilities details
         * @param {Array.<String>} specs List of spec file paths that ran
         */
        // afterSession: async function () {
        // },
        /**
         * Gets executed after all workers got shut down and the process is about to exit. An error
         * thrown in the onComplete hook will result in the test run failing.
         * @param {object} exitCode 0 - success, 1 - fail
         * @param {object} config wdio configuration object
         * @param {Array.<Object>} capabilities list of capabilities details
         * @param {<Object>} results object containing test results
         */
        onComplete: function() {
          const reportError = new Error('Could not generate Allure report');

          const generation = allure([
            'generate',
            allureDir + '/allure-results',
            '--clean',
            '-o',
            allureDir + '/allure-report'
          ]);

          return new Promise<void>((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000);
        
            generation.on('exit', function (exitCode: number) {
              clearTimeout(generationTimeout);
        
              if (exitCode !== 0) {
                return reject(reportError);
              }
        
              console.log('Allure report successfully generated');
              resolve();
            });
          });
        },
        /**
        * Gets executed when a refresh happens.
        * @param {string} oldSessionId session ID of the old session
        * @param {string} newSessionId session ID of the new session
        */
        // onReload: function(oldSessionId, newSessionId) {
        // }
    },
    dynamicConfig.dynamicConfig 
); 
