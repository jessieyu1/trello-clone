const boardService = require('../../../services/board.service')

exports.getAllBoards = async (req, res) => {
  try {
    const boards = await boardService.getAllBoards()
    res.status(200).json(boards)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getBoard = async (req, res) => {
  try {
    const board = await boardService.getBoard(req.params.id)
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.status(200).json(board)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createBoard = async (req, res) => {
  try {
    const board = await boardService.createBoard(req.body)
    res.status(201).json(board)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateBoard = async (req, res) => {
  try {
    const board = await boardService.updateBoard(req.params.id, req.body)
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.status(200).json(board)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteBoard = async (req, res) => {
  try {
    const board = await boardService.deleteBoard(req.params.id)
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.status(200).json({ message: 'Board deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
