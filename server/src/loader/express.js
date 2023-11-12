const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const v1Router = require('../routes')
const config = require('../config')


const validationError = require('../middleware/error/validationError')
const unknownError = require('../middleware/error/unknownError')
const notFoundError = require('../middleware/error/notFoundError')
const objectIdError = require('../middleware/error/objectIdError')
const jsonError = require('../middleware/error/jsonError')

module.exports = async (app) => {

  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))

  app.use(config.api.prefix, v1Router)

  app.use(jsonError)
  app.use(objectIdError)
  app.use(validationError)
  app.use(notFoundError)
  app.use(unknownError)

  return app
}
