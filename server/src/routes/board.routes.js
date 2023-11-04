// TODO: Board Routes:

// Get a list of all boards: GET /api/boards
// Get a specific board: GET /api/boards/:boardId
// Update a board's details: PUT /api/boards/:boardId
// Delete a board: DELETE /api/boards/:boardId

const express = require('express');

const boardRouter = express.Router();

const { createBoard } = require('../controller/boards.controller');

boardRouter.post('/', createBoard);

module.exports = boardRouter;