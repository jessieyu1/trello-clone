const express = require("express");
const v1Router = express.Router();

const boardsRouter = require("./board.routes");
const usersRouter = require("./user.router");

v1Router.use("/boards", boardsRouter);
v1Router.use("/users", usersRouter);
module.exports = v1Router;
