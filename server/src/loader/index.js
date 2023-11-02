const expressLoader = require('./express')
 //TODO: add dbLoader


exports.init =  async (app) => {
  await expressLoader(app)
  console.log('Express Initialized')

}