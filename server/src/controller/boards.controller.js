const {
  createBoardService,
  getAllBoardsService,
  getBoardByIdService,
  updateBoardService,
  deleteBoardService,
} = require("../service/board.service");
const { validateCreateBoard } = require("../validation/boards.validation");

// create
const createBoard = async (req, res, next) => {
  try {
    // validation
    validateCreateBoard(req, res, () => {
      //service
      const savedBoard = createBoardService(req.body);
      //response
      res.status(204).json(savedBoard);
    });
  } catch (error) {
    next(error);
  }
};
// Get a list of all boards
const getAllBoards = async (req, res) => {
  try {
    const boards = await getAllBoardsService();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Board By Id
const getBoardById = async (req, res) => {
  try {
    const board = await getBoardByIdService(req.params.id);
    if (!board) return res.status(404).json({ message: `your ID: ${req.params.id} not found` });
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Board
const updateBoard = async (req, res) => {
  try {
    const board = await updateBoardService(req.params.id, req.body);
    if (!board) return res.status(404).json({ message: "Board not found" });
    res.status(200).json(board);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Board
const deleteBoard = async (req, res) => {
  try {
    const board = await deleteBoardService(req.params.id);
    if (!board) return res.status(404).json({ message: "Board not found" });
    res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
  deleteBoard,
};
