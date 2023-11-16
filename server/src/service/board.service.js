const { Board } = require('../models/board.model')

// TODO: Create a new board
const createBoardService = async ({ title, description, lists, members } ) => {
  const board = new Board({ title, description, lists, members })
  return board.save()
}

// TODO:  Get a list of all boards
const getAllBoardsService = async () => {
  return Board.find().exec()
}

// TODO: Get a specific board by ID
const getBoardByIdService = async (boardId) => {
  return Board.findById(boardId).exec()
}

// TODO: Update a board's details
const updateBoardByIdService = async (
  boardId,
  title,
  description,
  lists,
  members
) => {
  return Board.findByIdAndUpdate(
    boardId,
    { title, description, lists, members },
    { new: true }
  ).exec()
}

// TODO: Delete a board
const deleteBoardByIdService = async (boardId) => {
  return Board.findByIdAndDelete(boardId).exec()
}

module.exports = {
  createBoardService,
  getAllBoardsService,
  getBoardByIdService,
  updateBoardByIdService,
  deleteBoardByIdService,
}
