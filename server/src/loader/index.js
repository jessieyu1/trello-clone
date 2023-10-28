const expressLoader = require('./express')
const dbLoader = require('./db')

exports.init = async (expressApp) => {
  
  expressLoader(expressApp)
  console.log('Express Initialized')
  await dbLoader();
  //TODO: add dbLoader done
}