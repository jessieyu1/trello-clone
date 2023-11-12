const { Router } = require('express')
const v1Router = Router()
const userRouter = require('./user.routes')
const boardRouter = require('./board.routes')
const cardRouter = require('./card.routes')
const listRouter = require('./list.routes')

v1Router.use('/users', userRouter)
v1Router.use('/boards', boardRouter)
v1Router.use('/cards', cardRouter)
v1Router.use('/lists', listRouter)

module.exports = v1Router

