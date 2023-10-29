const app = require('./app');
const config = require('./src/config')
const db = require('./src/loader/db')

async function startServer() {
  await db(config.mongo.uri)
  app.listen(config.port, (err) => {
    if (err) {
      process.exit(1)
      return
    }
    console.log(
      `########🛡️ Server listening on port: ${config.port} 🛡️ ##########`,
    )
  })
}

startServer();