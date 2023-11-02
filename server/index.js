<<<<<<< HEAD
const app = require('./app');
const config = require('./src/config')
const db = require('./src/loader/db')

async function startServer() {
  await db(config.mongo.uri)
  app.listen(config.port, (err) => {
=======
const app=require('./app')
const config=require('./src/config')

async function startServer(){
  app.listen(config.port,(err)=>{
>>>>>>> bbb6b750cc49ec39b8f3dd4a8f7c2066629c22a8
    if (err) {
      process.exit(1)
      return
    }
    console.log(
<<<<<<< HEAD
      `########🛡️ Server listening on port: ${config.port} 🛡️ ##########`,
    )
  })
}

startServer();
=======
      `########🛡️ Server listening on port: ${config.port} 🛡️ ##########`
    );
  })
}
startServer()
>>>>>>> bbb6b750cc49ec39b8f3dd4a8f7c2066629c22a8
