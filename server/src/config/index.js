if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
module.exports = {
  port: process.env.PORT || 8000,
  api: { prefix: process.env.API_PREFIX || '/api/v1' },
  mongoConnection: process.env.CONNECTION_STRING,
}
