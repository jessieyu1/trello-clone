const { Router } = require('express')

const { addCard, getAllCards,getCardById,updateCardById,deleteCardById } = require('../controller/cards.controller')

const cardRouter = Router()

cardRouter.get('/', getAllCards)
cardRouter.post('/', addCard)
cardRouter.get('/:cardId', getCardById)
cardRouter.put('/:cardId', updateCardById)
cardRouter.delete('/:cardId', deleteCardById)


module.exports = cardRouter