const { Card } = require('../models/card.model');

async function createCard(title, description, dueDate, list, assignedTo) {
  const card = new Card({ title, description, dueDate, list, assignedTo });
  return card.save();
}

async function getAllCards() {
  return Card.find().exec();
}

async function getCardById(cardId) {
  return Card.findById(cardId).exec();
}

async function updateCardById(cardId, title, description, dueDate, list, assignedTo) {
  return Card.findByIdAndUpdate(
    cardId,
    { title, description, dueDate, list, assignedTo },
    { new: true }
  ).exec();
}

async function deleteCardById(cardId) {
  return Card.findByIdAndDelete(cardId).exec();
}

module.exports = {
  createCard,
  getAllCards,
  getCardById,
  updateCardById,
  deleteCardById,
};
