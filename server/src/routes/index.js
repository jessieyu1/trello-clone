const { Router } = require('express')
const v1Router = Router()
const userRouter = require('./user.routes')
const boardRouter = require('./board.routes')
const cardRouter = require('./card.routes')
const listRouter = require('./list.routes')
const authRouter= require('./auth.routes')
const authGuard = require('../middleware/authGuard')
const emailRouter = require('./email.routes')

v1Router.use('/users', authGuard, userRouter)
v1Router.use('/boards', authGuard, boardRouter)
v1Router.use('/cards', cardRouter)
v1Router.use('/lists', listRouter)
v1Router.use('/auth', authRouter)

v1Router.use('/email',emailRouter)
module.exports = v1Router

