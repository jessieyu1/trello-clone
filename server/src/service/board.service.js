const { Board } = require('../models/board.model');

const createBoard = async (data) => {
  try {
    const newBoard = new Board(data);
    return newBoard.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Board creation failed' });
  }
}

const getAllBoards = async () => {
  try {
    return await Board.find().exec();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch boards' });
  }
}

const getOneBoard = async (id) => {
  try {
    return await Board.findById(id).exec();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch the board' });
  }
}

const updateBoard = async (id, updateData) => {
  try {
    return await Board.findByIdAndUpdate(id, updateData, { new: true }).exec()
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Board update failed' });
  }
}

const deleteBoard = async (id) => {
  try {
    return await Board.findByIdAndDelete(id).exec();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Board deletion failed' });
  }
}

module.exports = { createBoard, getAllBoards, getOneBoard, updateBoard, deleteBoard }
