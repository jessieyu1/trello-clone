const userController = require('../../controllers/api/v1/user.controller')

const express = require('express')
const router = express.Router()

router.get('', userController.getAllUsers)
router.get('/:id', userController.getUser)
router.post('', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
