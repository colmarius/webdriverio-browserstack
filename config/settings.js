const isRemote = env => (env === 'remote')

const localUrl = 'http://localhost:3000'
const productionUrl = 'https://github.com'
const bsEnv = process.env.BS_ENV || 'remote'
const bsUser = process.env.BS_USER || 'BS_USER'
const bsKey = process.env.BS_KEY || 'BS_KEY'
const debugEnabled = process.env.DEBUG === 'true'
const baseUrl = isRemote(bsEnv) ? productionUrl : localUrl
const logLevel = process.env.LOG_LEVEL || 'silent'
const buildId = 'your_build_id_from_browserstack'

const commonCapabilities = (config) => {
  return config.map(function(capability) {
    return Object.assign(capability, {
      'browserstack.debug': debugEnabled,
      'browserstack.video': debugEnabled,
      'browserstack.customSendKeys': 800,
    })
  })
}

const remoteCapabilities = commonCapabilities([
                            {
                              platform: 'WINDOWS',
                              browserName: 'Firefox',
                              browser_version: '45',
                              resolution: '1600x1200',
                            },
                          ])

const isVerbose = (/verbose/i).test(logLevel)
function log () {
  if (isVerbose) {
    console.log.apply(console, arguments)
  }
}

exports.commonCapabilities = commonCapabilities
exports.remoteCapabilities = remoteCapabilities

exports.log = log

exports.env = {
  localUrl,
  productionUrl,
  bsEnv,
  bsUser,
  bsKey,
  baseUrl,
  logLevel,
  buildId,
}
