const { createBoardService } = require('../service/board.service');
const boardsValidation = require('../validation/boards.validation');


const createBoard = async (req, res, next) => {
  try {
    //validation
    boardsValidation.validateCreateBoard(req, res, () => {
        
      //service
      const savedBoard = createBoardService(req.body);

      //response
      res.status(204).json(savedBoard);
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createBoard,
}




//TODO: Get a list of all boards

//TODO: Other controller functions for getBoardById, updateBoard, and deleteBoard

