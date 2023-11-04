const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const v1Router = require('../routes')
const config = require('../config')

module.exports = async (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(config.api.prefix, v1Router)
  return app
}

