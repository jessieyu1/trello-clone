const { Router } = require('express')
const v1Router = Router()
const userRouter = require('./user.routes')
const boardRouter = require('./board.routes')
const cardRouter = require('./card.routes')
const listRouter = require('./list.routes')
const authRouter= require('./auth.routes')
const authGuard = require('../middleware/authGuard')

v1Router.use('/users', authGuard, userRouter)
v1Router.use('/boards', boardRouter)
v1Router.use('/cards', cardRouter)
v1Router.use('/lists', listRouter)
v1Router.use('/auth', authRouter)

module.exports = v1Router

