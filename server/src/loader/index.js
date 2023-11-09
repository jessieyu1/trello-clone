const expressLoader = require('./express')
const logger = require('pino')()

exports.init = async (app) => {
  await expressLoader(app)
  logger.info('Express Initialized logged by logger')
}