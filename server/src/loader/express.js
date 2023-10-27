const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const apiRoutes = require('../routes/v1/api')

module.exports = async (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  app.use('/api/v1', apiRoutes)

  return app
}
