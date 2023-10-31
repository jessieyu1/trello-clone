const expressLoader = require('./express')

exports.init =  async (app) => {
  await expressLoader(app)
  console.log('Express Initialized')
}