const {Board} = require('../models/board.model');

const createBoard = async (data) => {
  try {
    const newBoard = new Board(data);
    return newBoard.save();
  } catch (error) {
    console.error(error);
    next(error);
  }
}

const getAllBoards = async () => {
  try {
    return await Board.find({}).exec();
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const getOneBoard = async (id) => {
  try {
    return await Board.findById(id).exec();
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const updateBoard = async (id, updateData) => {
  try {
    return await Board.findByIdAndUpdate(id, updateData, { new: true }).exec()
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const deleteBoard = async (id) => {
  try {
    return await Board.findByIdAndDelete(id).exec();
  } catch (error) {
    console.error(error);
    next(error)
  }
}

module.exports = { createBoard, getAllBoards, getOneBoard, updateBoard, deleteBoard }
