const express = require('express');
const loader = require('./src/loader');
const v1Router = require('./src/routes');
const config = require('./src/config')

const app = express();

loader.init(app)

// app.use(express.json())
app.use(config.api.prefix,v1Router)


module.exports = app;