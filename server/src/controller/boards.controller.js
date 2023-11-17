const boardService = require('../service/board.service');
const { NOT_FOUNT_ERROR, VALIDATION_ERROR } = require('../utils/constants');
//Create a new board
const createNewBoard = async (req, res, next) => {
  try {
    if (!req.body) {
      const error = new Error('Request body is missing');
      error.name = VALIDATION_ERROR;
      return next(error);
    } 
      const newBoard = await boardService.createBoard(req.body);
      res.status(201).json(newBoard);
    
  } catch (error) {
    next(error)
  }
}
//Get a list of all boards
const getAllBoards = async (req, res, next) => {
  try {
    const boards = await boardService.getAllBoards()
    res.status(200).json(boards)
  } catch (error) {
    next(error)
  }
}
//Other controller functions for getBoardById, updateBoard, and deleteBoard
//getBoardById
const getBoardById = async (req, res, next) => {
  try {
    const board = await boardService.getOneBoard(req.params.boardId)
    if (!board) {
      const error = new Error('Board not found');
      error.name = NOT_FOUNT_ERROR;
      return next(error);
    }
    res.status(200).json(board);
  } catch (error) {
    next(error)
  }
}
//updateBoard
const updateBoard = async (req, res, next) => {
  try {
    const updatedBoard = await boardService.updateBoard(req.params.boardId, req.body)
    if (!updatedBoard) {
      const error = new Error('Board not found');
      error.name = NOT_FOUNT_ERROR;
      return next(error);
    }
    res.status(200).json(updatedBoard);
  } catch (error) {
    next(error)
  }
}
//deleteBoard
const deleteBoard = async (req, res, next) => {
  try {
    const deletedBoard = await boardService.deleteBoard(req.params.boardId)
    if (!deletedBoard) {
      const error = new Error('Board not found');
      error.name = NOT_FOUNT_ERROR;
      return next(error);
    }
    res.status(204).json();
  } catch (error) {
    next(error)
  }
}

module.exports = { deleteBoard, updateBoard, getBoardById, getAllBoards, createNewBoard }
