const express = require('express')
const router = express.Router()
const {
  deleteBoard, updateBoard, getBoardById, getAllBoards, createNewBoard
} = require('../controller/boards.controller');

// Board Routes:

// Create a new board: POST /api/boards
router.post('/', createNewBoard);
// Get a list of all boards: GET /api/boards
router.get('/', getAllBoards);
// Get a specific board: GET /api/boards/:boardId
router.get('/:boardId', getBoardById);
// Update a board's details: PUT /api/boards/:boardId
router.put('/:boardId', updateBoard);
// Delete a board: DELETE /api/boards/:boardId
router.delete('/:boardId', deleteBoard);

module.exports = router;
