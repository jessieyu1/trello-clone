const expressLoader = require('./express')
const dbLoader = require('./db')

exports.init = (expressApp) => {
  expressLoader(expressApp)
  console.log('Express Initialized')
  //TODO: add dbLoader
}