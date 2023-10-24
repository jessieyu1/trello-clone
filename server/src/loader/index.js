const expressLoader = require('./express')
const dbLoader = require('./db')

// exports.init = (expressApp) => {
//   expressLoader(expressApp)
//   console.log('Express Initialized')
//   //TODO: add dbLoader
// }

exports.init = async (expressApp) => {
  try {
    await dbLoader(); // 先加载数据库

    expressLoader(expressApp); // 然后加载 Express
    console.log('Express Initialized');
  } catch (error) {
    console.error('Initialization Error:', error);
    process.exit(1);
  }
}