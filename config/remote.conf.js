const https = require('https')
const { env, log, remoteCapabilities } = require('./settings')

exports.config = {
  maxInstances: 1,
  capabilities: remoteCapabilities,
  user: env.bsUser,
  key: env.bsKey,
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  sync: true,
  logLevel: env.logLevel,
  coloredLogs: true,
  bail: 1,
  screenshotPath: './errorShots/',
  baseUrl: env.baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['browserstack'],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000,
    expectationResultHandler: function(passed, assertion) {
      // do something
    }
  },
  onPrepare: function (config, capabilities) {
    log('config:', JSON.stringify(config))
    log('capabilities:', JSON.stringify(capabilities))
  },
  beforeSession: function (config, capabilities, specs) {
    // do something
  },
  before: function (capabilities, specs) {
    require('babel-register')
    log('Session running at:')
    log(JSON.stringify(capabilities))
    log(`https://www.browserstack.com/automate/builds/${env.buildId}/sessions/${browser.sessionId}`)
  },
  beforeSuite: function (suite) {
  },
  beforeHook: function () {
  },
  afterHook: function () {
  },
  beforeTest: function (test) {
  },
  beforeCommand: function (commandName, args) {
  },
  afterCommand: function (commandName, args, result, error) {
  },
  afterTest: function (test) {
  },
  afterSuite: function (suite) {
  },
  after: function (result, capabilities, specs) {
  },
  afterSession: function (config, capabilities, specs) {
  },
  onComplete: function(exitCode) {
  }
}
