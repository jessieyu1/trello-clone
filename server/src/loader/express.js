const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const swaggerUi= require('swagger-ui-express')

const v1Router = require('../routes')
const config = require('../config')
const specs = require('../utils/swagger')
const errorHandler = require('../middleware/errorHandler')

module.exports = async (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

  app.use(config.api.prefix, v1Router)

  app.use(errorHandler)

  return app
}
