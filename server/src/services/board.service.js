const Board = require('../models/board.model')

const getAllBoards = async () => {
  return await Board.find()
}

const getBoard = async (id) => {
  return await Board.findById(id)
}

const createBoard = async (boardData) => {
  const newBoard = new Board(boardData)
  return await newBoard.save()
}

const updateBoard = async (id, boardData) => {
  return await Board.findByIdAndUpdate(id, boardData, { new: true })
}

const deleteBoard = async (id) => {
  return await Board.findByIdAndDelete(id)
}

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
}
