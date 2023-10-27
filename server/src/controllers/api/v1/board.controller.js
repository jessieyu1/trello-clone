const Board = require('../../../models/board.model')

exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find()
    res.status(200).json(boards)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getBoard = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id)
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.status(200).json(board)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createBoard = async (req, res) => {
  const newBoard = new Board(req.body)
  try {
    const board = await newBoard.save()
    res.status(201).json(board)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateBoard = async (req, res) => {
  try {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.status(200).json(board)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteBoard = async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id)
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.status(200).json({ message: 'Board deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
