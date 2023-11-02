const { Router } = require('express')
const { getAllUsers, getUserById, addUser, updateUserById, deleteUserById } = require('../controller/users.controller')

const userRouter= Router()


// 在这里把controller和route关联起来

userRouter.get('/',getAllUsers)
userRouter.get('/:userId',getUserById)
userRouter.post('/',addUser)
userRouter.put('/:userId',updateUserById)
userRouter.delete('/:userId',deleteUserById)

module.exports = userRouter