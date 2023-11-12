
const NotFoundException = require('../exceptions/NotFoundException');
const {Board}=require('../models/board.model')
const boardService = require('../service/board.service');

const boardsValidation = require('../validation/boards.validation');

//TODO: Create a new board

//TODO: Get a list of all boards

//TODO: Other controller functions for getBoardById, updateBoard, and deleteBoard

const createBoard = async (req, res,next) =>{
  try {
    const existingBoard = await Board.findOne({
      title: req.body.title,
    })
    if (existingBoard) {
      res.status(403).json({Error: 'Board Already Exists'} )
      return
    } else {
      const { title, description, lists, members } = req.body;
      boardsValidation.validateCreateBoard(req, res, () => {
        const board =  boardService.createBoardService(req.body);
        return res.status(201).json(board);
      })
      // const board = await boardService.createBoardService(title, description, lists, members);
      // return res.sendStatus(201).json(board);
    }   
  } catch (error) {

    next(error)
  }
}

async function getAllBoards(req, res, next) {
  try {
    const boards = await boardService.getAllBoardsService();
    res.json(boards);
  } catch (error) {
    
    next(error)
  }
}

async function getBoardById(req, res,next) {
  
    const { boardId } = req.params;
    if (!boardId) {
      next(new objectIdError);
  }
  try {
    const board = await boardService.getBoardByIdService(boardId);

    if (!board) {
     throw new NotFoundException('Board Not Found')
      };
    res.status(201).json(board);
  } catch (error) {
    next(error)
  }
}

const updateBoardById= async (req, res,next)=> {
  try {
    const { boardId } = req.params;
    const { title, description, lists, members } = req.body;

    boardsValidation.validateCreateBoard(req, res, async () => {
      try {
        const updatedBoard = await boardService.updateBoardByIdService(boardId, title, description, lists, members, { new: true });
        if (!updatedBoard) {
          throw new NotFoundException('Board Not Found')
        }
        res.status(201).json(updatedBoard);
      } catch (error) {
        next(error)
      }
      }) 
  } catch (error) {
    next(error)
  }
}

async function deleteBoardById(req, res,next) {
  try {
    const { boardId } = req.params;
    const result = await boardService.deleteBoardByIdService(boardId);

    if (!result) {
     throw new NotFoundException('Board Not Found')
    }

    res.sendStatus(204);
  } catch (error) {
  
    next(error)
  }
}

module.exports = {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};