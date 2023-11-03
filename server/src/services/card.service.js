const Card = require('../models/card.model')

const getAllCards = async () => {
  return await Card.find()
}

const getCard = async (id) => {
  return await Card.findById(id)
}

const createCard = async (cardData) => {
  const newCard = new Card(cardData)
  return await newCard.save()
}

const updateCard = async (id, cardData) => {
  return await Card.findByIdAndUpdate(id, cardData, { new: true })
}

const deleteCard = async (id) => {
  return await Card.findByIdAndDelete(id)
}

module.exports = {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
}
