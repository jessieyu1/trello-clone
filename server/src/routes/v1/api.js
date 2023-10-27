const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const listRoutes = require('./listRoutes')
const cardRoutes = require('./cardRoutes')
const boardRoutes = require('./boardRoutes')

router.use('/users', userRoutes)
router.use('/lists', listRoutes)
router.use('/cards', cardRoutes)
router.use('/boards', boardRoutes)

module.exports = router
