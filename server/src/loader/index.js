const expressLoader = require('./express')
const dbLoader = require('./db')

exports.init = (expressApp) => {
  dbLoader()
  expressLoader(expressApp)
  console.log('Express Initialized')
}
