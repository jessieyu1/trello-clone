const boardService = require('../service/board.service')
const { boardValidationSchema } = require('../models/board.model');
//TODO: Create a new board


//TODO: Get a list of all boards

//TODO: Other controller functions for getBoardById, updateBoard, and deleteBoard

async function addBoard(req, res) {
  try {
    const { title, description, lists, members } = req.body;
    const { error } = boardValidationSchema.validate({ title, description, lists, members });

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const board = await boardService.createBoard(title, description, lists, members);

    return res.status(201).json(board);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.details[0].message });
  }
}

async function getAllBoards(req, res) {
  try {
    const boards = await boardService.getAllBoards();
    res.json(boards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBoardById(req, res) {
  try {
    const { boardId } = req.params;
    const board = await boardService.getBoardById(boardId);

    if (!board) {
      return res.status(404).json({
        error: 'Board not found',
      });
    }

    res.json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateBoardById(req, res) {
  try {
    const { boardId } = req.params;
    const { title, description, lists, members } = req.body;
    const { error } = boardValidationSchema.validate({ title, description, lists, members });

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedBoard = await boardService.updateBoardById(boardId, title, description, lists, members);

    if (!updatedBoard) {
      return res.status(404).json({
        error: 'Board not found',
      });
    }

    res.json(updatedBoard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteBoardById(req, res) {
  try {
    const { boardId } = req.params;
    const result = await boardService.deleteBoardById(boardId);

    if (!result) {
      return res.status(404).json({
        error: 'Board not found',
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addBoard,
  getAllBoards,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};