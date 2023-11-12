const { Router } = require('express')

const authRouter = Router()

const {register,login}=require('../controller/auth.controller')
  
authRouter.post('/register', register)

authRouter.post('/login', login)

module.exports=authRouter