const boardService = require('../services/boards.service');
//Create a new board
const createNewBoard = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ error: "Request body is missing" });
    } else {
      const newBoard = await boardService.createBoard(req.body);
      res.status(201).json(newBoard);
    }
  } catch (error) {
    res.status(500).json({ error: "Board creation failed" })
  }
}
  //Get a list of all boards
  const getAllBoards = async (req, res) => {
    try {
      const boards = await boardService.getAllBoards()
      res.status(200).json(boards)
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch boards" })
    }
  }
    //Other controller functions for getBoardById, updateBoard, and deleteBoard
    //getBoardById
    const getBoardById = async (req, res) => {
      try {
        const board = await boardService.getOneBoard(req.params.boardId)
        if (!board) {
          res.status(404).json({ error: "Board not found" });
        } else {
          res.status(200).json(board);
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch board" })
      }
    }
      //updateBoard
      const updateBoard = async (req, res) => {
        try {
          const updatedBoard = await boardService.updateBoard(req.params.boardId, req.body)
          if (updatedBoard) {
            res.status(200).json(updatedBoard);
          } else {
            res.status(404).json({ error: "Board not found" });
          }
        } catch (error) {
          res.status(500).json({ error: "Board update failed" })
        }
      }
        //deleteBoard
        const deleteBoard = async (req, res) => {
          try {
            const deletedBoard = await boardService.deleteBoard(req.params.boardId)
            if (deletedBoard) {
              res.status(204).json(); 
            } else {
              res.status(404).json({ error: "Board not found" });
            }
          } catch (error) {
            res.status(500).json({ error: "Board deletion failed" })
          }
        }

module.exports = { deleteBoard, updateBoard, getBoardById, getAllBoards, createNewBoard }
