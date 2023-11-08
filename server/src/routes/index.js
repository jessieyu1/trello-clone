const express = require('express');
const v1Router = express.Router();

const boardsRouter = require('./board.routes');

v1Router.use('/boards', boardsRouter);

module.exports = v1Router;