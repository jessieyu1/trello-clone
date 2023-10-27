const cardController = require('../../controllers/api/v1/cardController')
const express = require('express')
const router = express.Router()

router.get('/', cardController.getAllCards)
router.get('/:id', cardController.getCard)
router.post('/', cardController.createCard)
router.put('/:id', cardController.updateCard)
router.delete('/:id', cardController.deleteCard)

module.exports = router
