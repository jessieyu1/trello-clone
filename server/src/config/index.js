<<<<<<< HEAD
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
  
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
module.exports = {
  port: process.env.PORT || 8000,
  api: { prefix: process.env.API_PREFIX || '/api/v1' },
  mongo: {
    uri: process.env.MONGO_URI,
  }
=======
if (process.env.NODE_ENV !=='production') {
  require('dotenv').config()
}

process.env.NODE_ENV=process.env.NODE_ENV || 'development'
module.exports={
  port:process.env.PORT || 8000,
  api:{prefix:process.env.API_PREFIX || '/api/v1'}
>>>>>>> bbb6b750cc49ec39b8f3dd4a8f7c2066629c22a8
}