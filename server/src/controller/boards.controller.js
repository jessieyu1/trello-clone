const { 
  createBoardService,
  updateBoardService,
  deleteBoardService,
  getAllBoardsService,
  getOneBoardService,
 } = require('../service/board.service');
const {
  validateCreateBoard,
  validateGetBoard,
  validateUpdateBoard,
  validateBoardId,
  validateDeleteBoard,
} = require('../validation/boards.validation')
const { NOT_FOUNT_ERROR } = require('../utils/constants');
//Create a new board
const createNewBoard = (req, res, next) => {
  try {
    //validation
    validateCreateBoard(req, res, async () => {

      //service
      const savedBoard = await createBoardService(req.body);
      //response
      res.status(201).json(savedBoard);
    })

  } catch (error) {
    next(error)
  }
}
//Get a list of all boards
const getAllBoards = async (req, res, next) => {
  try {
    const boards = await getAllBoardsService()
    res.status(200).json(boards)
  } catch (error) {
    next(error)
  }
}
//Other controller functions for getBoardById, updateBoard, and deleteBoard
// Get board by ID
const getBoardById = async (req, res, next) => {
  try {
    // Validation
    validateBoardId(req, res, async () => {
      validateGetBoard(req, res, async () => {
        // Service
        const board = await getOneBoardService(req.params.boardId);
        if (!board) {
          const error = new Error('Board not found');
          error.name = NOT_FOUNT_ERROR;
          return next(error);
        }
        res.status(200).json(board);
      })
    });
  } catch (error) {
    next(error);
  }
}

// Update board
const updateBoard = async (req, res, next) => {
  try {
    // Validation
    validateBoardId(req, res, () => {
      validateUpdateBoard(req, res, async () => {
        // Service
        const updatedBoard = await updateBoardService(req.params.boardId, req.body);
        if (!updatedBoard) {
          const error = new Error('Board not found');
          error.name = NOT_FOUNT_ERROR;
          return next(error);
        }
        // Response
        res.status(200).json(updatedBoard);
      });
    });
  } catch (error) {
    next(error);
  }
}
// Delete board
const deleteBoard = async (req, res, next) => {
  try {
    // Validation
    validateBoardId(req, res, () => {
      validateDeleteBoard(req, res, async () => {
        // Service
        const deletedBoard = await deleteBoardService(req.params.boardId);
        if (!deletedBoard) {
          const error = new Error('Board not found');
          error.name = NOT_FOUNT_ERROR;
          return next(error);
        }
        // Response
        res.status(204).json();
      });
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { deleteBoard, updateBoard, getBoardById, getAllBoards, createNewBoard }
