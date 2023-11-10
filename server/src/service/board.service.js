const Board = require("../models/board.model");

// Create a new board
const createBoardService = async (data) => {
  const { title, description } = data;

  const newBoard = new Board({
    title,
    description,
  });

  return newBoard.save();
};

// Get a list of all boards
const getAllBoardsService = async () => {
  return await Board.find();
};

// TODO: Get a specific board by ID
const getBoardByIdService = async (id) => {
  return await Board.findById(id);
};

// TODO: Update a board's details
const updateBoardService = async (id, data) => {
  return await Board.findByIdAndUpdate(id, data, { new: true });
};
// TODO: Delete a board
const deleteBoardService = async (id) => {
  return await Board.findByIdAndDelete(id);
};

module.exports = {
  createBoardService,
  getAllBoardsService,
  getBoardByIdService,
  updateBoardService,
  deleteBoardService,
};
