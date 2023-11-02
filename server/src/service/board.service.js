const {Board} = require('../models/board.model');

// TODO: Create a new board
const createBoard =async (req, res) => {
    try {
      // Validate the request data using Joi
      const { error } = boardValidationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
  
      // Create a new board
      const { title, description } = req.body;
      const newBoard = new Board({ title, description });
      const savedBoard = await newBoard.save();
  
      res.status(201).json(savedBoard);
    } catch (error) {
      console.error('Error for creating boards', error);
      res.status(500).json({ error: 'Board creation failed' });
    }
  }

// TODO:  Get a list of all boards
const getAllBoards = async (req, res) => {
    try {
      const boards = await Board.find({}).exec();
      res.status(200).json(boards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch boards' });
    }
  }

// TODO: Get a specific board by ID
const getOneBoard=async (req, res) => {
    try {
      const boardId = req.params.boardId;
      const board = await Board.findById(boardId).exec();
  
      if (!board) {
        return res.status(404).json({ error: 'Board not found' });
      }
  
      res.status(200).json(board);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch the board' });
    }
  }

// TODO: Update a board's details
const updateBoard=async (req, res) => {
    try {
      const boardId = req.params.boardId;
      const updatedData = req.body;
      const updatedBoard = await Board.findByIdAndUpdate(boardId, updatedData, { new: true }).exec();
      if (!updatedBoard) {
        return res.status(400).json({ error: 'Board not found' });
      }
      res.status(200).json(updatedBoard);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Board update failed' });
    }
  }

// TODO: Delete a board
const deleteBoard=async (req, res) => {
    try {
      const boardId = req.params.boardId;
      const deletedBoard = await Board.findByIdAndRemove(boardId).exec();
      if (!deletedBoard) {
        return res.status(404).json({ error: 'Board not found' });
      }
      res.status(204).send(); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Board deletion failed' });
    }
  }

module.exports={createBoard,getAllBoards,getOneBoard,updateBoard,deleteBoard}
