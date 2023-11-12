// TODO: Board Routes:

const { Router } = require('express')
const { getAllBoards, getBoardById,updateBoardById,deleteBoardById, createBoard } = require('../controller/boards.controller')


const boardRouter= Router()

// 在这里把controller和route关联起来
boardRouter.get('/',getAllBoards)
boardRouter.get('/:boardId',getBoardById)
boardRouter.post('/', createBoard)
boardRouter.put('/:boardId',updateBoardById)
boardRouter.delete('/:boardId',deleteBoardById)

module.exports = boardRouter

