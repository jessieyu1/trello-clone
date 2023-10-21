const app=require('./app')
const config=require('./src/config')

async function startServer(){
  app.listen(config.port,(err)=>{
    if (err) {
      process.exit(1)
      return
    }
    console.log(
      `########🛡️ Server listening on port: ${config.port} 🛡️ ##########`
    );
  })
}
startServer()