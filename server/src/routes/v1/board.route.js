const boardController = require('../../controllers/api/v1/board.controller')
const express = require('express')
const router = express.Router()

router.get('', boardController.getAllBoards)
router.get('/:id', boardController.getBoard)
router.post('', boardController.createBoard)
router.put('/:id', boardController.updateBoard)
router.delete('/:id', boardController.deleteBoard)

module.exports = router
