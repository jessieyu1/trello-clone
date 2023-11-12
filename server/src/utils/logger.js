const pino = require('pino')
const logger = pino({
   
    colorize: true,
    translateTime: true,
    ignore:'pid,hostname'
  
})

module.exports=logger