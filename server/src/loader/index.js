const expressLoader = require('./express')
const dbLoader = require('./db')

exports.init = async (expressApp) => {
    await dbLoader();
    expressLoader(expressApp)
    console.log('ExpressInitialized')
}