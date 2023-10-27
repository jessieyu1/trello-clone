const express = require('express')
const router = express.Router()

const userRoutes = require('./user.route')
const listRoutes = require('./list.route')
const cardRoutes = require('./card.route')
const boardRoutes = require('./board.route')

router.use('/users', userRoutes)
router.use('/lists', listRoutes)
router.use('/cards', cardRoutes)
router.use('/boards', boardRoutes)

module.exports = router
