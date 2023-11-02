// TODO: Board Routes:

// Create a new board: POST /api/boards
// Get a list of all boards: GET /api/boards
// Get a specific board: GET /api/boards/:boardId
// Update a board's details: PUT /api/boards/:boardId
// Delete a board: DELETE /api/boards/:boardId

const { Router } = require('express')
const { getAllBoards,  addBoard, getBoardById,updateBoardById,deleteBoardById } = require('../controller/boards.controller')

const boardRouter= Router()


// 在这里把controller和route关联起来

boardRouter.get('/',getAllBoards)
boardRouter.get('/:boardId',getBoardById)
boardRouter.post('/',addBoard)
boardRouter.put('/:boardId',updateBoardById)
boardRouter.delete('/:boardId',deleteBoardById)

module.exports = boardRouter