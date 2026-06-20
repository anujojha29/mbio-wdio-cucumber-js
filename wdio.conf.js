exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 2,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--window-size=1440,1000']
      }
    },
    {
      browserName: 'MicrosoftEdge',
      'ms:edgeOptions': {
        args: ['--window-size=1440,1000']
      }
    }
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://mb.io/en-AE',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
      useCucumberStepReporter: true
    }]
  ],
  cucumberOpts: {
    require: ['./step-definitions/index.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: true,
    tagExpression: process.env.TAGS || '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },
  before: async function () {
    await browser.maximizeWindow()
  },
  afterStep: async function (step, scenario, result) {
    if (!result.passed) {
      await browser.takeScreenshot()
    }
  }
}
