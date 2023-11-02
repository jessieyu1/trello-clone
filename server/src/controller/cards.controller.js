const cardService = require('../service/card.service')
const { cardValidationSchema } = require('../models/card.model')

const addCard = async (req, res) => {
  try {
    const { title, description, dueDate, list, assignedTo } = req.body 
    const { error } = cardValidationSchema.validate({ title, description, dueDate, list, assignedTo })
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const card = await cardService.createCard(title, description, dueDate, list, assignedTo)
    
    return res.status(201).json(card)
  }catch (error) {
    res.status(400).json({ error: error.details[0].message });
  }
}

const getAllCards = async (req, res) => {
  try { 
    const cards = await cardService.getAllCards();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error' });
  }
}

const getCardById = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await cardService.getCardById(cardId);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateCardById = async (req, res) => {
  try {
    const { cardId } = req.params;
    const { title, description, dueDate, list, assignedTo } = req.body;
    const { error } = cardValidationSchema.validate({
      title, description, dueDate, list, assignedTo
    })
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const card = await cardService.updateCardById(cardId, title, description, dueDate, list, assignedTo);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteCardById = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await cardService.deleteCardById(cardId);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {
  addCard,
  getAllCards,
  getCardById,
  updateCardById,
  deleteCardById,
};