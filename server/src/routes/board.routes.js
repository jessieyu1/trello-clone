// TODO: Board Routes:

// Get a list of all boards: GET /api/boards
// Get a specific board: GET /api/boards/:boardId
// Update a board's details: PUT /api/boards/:boardId
// Delete a board: DELETE /api/boards/:boardId

const express = require("express");

const boardRouter = express.Router();

const {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
  deleteBoard
} = require("../controller/boards.controller");

boardRouter.post("/", createBoard);
boardRouter.get("/", getAllBoards);
boardRouter.get("/:id", getBoardById);
boardRouter.put("/:id", updateBoard);
boardRouter.delete("/:id", deleteBoard);



module.exports = boardRouter;
