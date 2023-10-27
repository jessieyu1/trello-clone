const express = require('express')
const loader = require('./src/loader')

const app = express()

loader.init(app)

module.exports = app
