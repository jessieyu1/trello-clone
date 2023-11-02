
const router = require('../../app')
const {
  createBoard,
  getAllBoards,
  getOneBoard,
  updateBoard,
  deleteBoard,
} = require('../service/board.service');

// TODO: Board Routes:

// Create a new board: POST /api/boards
router.post('/boards', createBoard);
// Get a list of all boards: GET /api/boards
router.get('/boards', getAllBoards);
// Get a specific board: GET /api/boards/:boardId
router.get('/boards/:boardId', getOneBoard);
// Update a board's details: PUT /api/boards/:boardId
router.put('/boards/:boardId', updateBoard);
// Delete a board: DELETE /api/boards/:boardId
router.delete('/boards/:boardId', deleteBoard);

module.exports = router;
