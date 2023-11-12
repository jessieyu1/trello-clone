const { Router } = require('express')
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controller/users.controller')
const {validateCreateUser} = require ('../validation/users.validation.js')

const userRouter= Router()


// 在这里把controller和route关联起来

userRouter.get('/',getAllUsers)
userRouter.get('/:userId',getUserById)
userRouter.post('/',createUser)
userRouter.put('/:userId',updateUserById)
userRouter.delete('/:userId',deleteUserById)

module.exports = userRouter