const Board = require('../models/board.model');

const createBoardService = async (data) => {
  try {
    const { title, description } = data;

    const newBoard = new Board({
      title,
      description,
    });
  
    return newBoard.save();
  } catch (error) {
    console.error(error);
    next(error)
  }

};

const getAllBoardsService = async () => {
  try {
    return await Board.find({}).exec();
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const getOneBoardService = async (id) => {
  try {
    return await Board.findById(id).exec();
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const updateBoardService = async (id, updateData) => {
  try {
    return await Board.findByIdAndUpdate(id, updateData, { new: true }).exec()
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const deleteBoardService = async (id) => {
  try {
    return await Board.findByIdAndDelete(id).exec();
  } catch (error) {
    console.error(error);
    next(error)
  }
}

module.exports = { createBoardService, getAllBoardsService, getOneBoardService, updateBoardService, deleteBoardService }
