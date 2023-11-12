const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const v1Router = require('../routes')
const config = require('../config')

const errorHandler = require('../middleware/error/errorHandler')

module.exports = async (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))

  app.use(config.api.prefix, v1Router)

  app.use(errorHandler)

  return app
}
