const { Board } = require('../models/board.model');

// TODO: Create a new board
async function createBoard(title, description, lists, members) {
  const board = new Board({ title, description, lists, members })
  return await board.save()
}

// TODO:  Get a list of all boards
async function getAllBoards() {
  return await Board.find().exec()
}

// TODO: Get a specific board by ID
async function getBoardById(boardId) {
  return await Board.findById(boardId).exec();
}

// TODO: Update a board's details
async function updateBoardById(boardId, title, description, lists, members) {
  return await Board.findByIdAndUpdate(
    boardId,
    { title, description, lists, members },
    { new: true }
  ).exec();
}


// TODO: Delete a board
async function deleteBoardById(boardId) {
  return await Board.findByIdAndDelete(boardId).exec();
}

module.exports = {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
