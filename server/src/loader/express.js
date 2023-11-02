<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

module.exports = async (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  return app
}

=======
const express=require('express')
const cors=require('cors')
const morgan=require('morgan')

module.exports=async(app)=>{
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))

  return app
}
>>>>>>> bbb6b750cc49ec39b8f3dd4a8f7c2066629c22a8
