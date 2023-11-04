const Board = require('../models/board.model');

// TODO: Create a new board


const createBoardService = async (data) => {
  const { title, description } = data;

  const newBoard = new Board({
    title,
    description,
  });

  return newBoard.save();
};



// TODO:  Get a list of all boards


// TODO: Get a specific board by ID


// TODO: Update a board's details


// TODO: Delete a board

module.exports = {
  createBoardService
};