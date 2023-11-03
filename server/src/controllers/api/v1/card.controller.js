const cardService = require('../../../services/card.service')

exports.getAllCards = async (req, res) => {
  try {
    const cards = await cardService.getAllCards()
    res.status(200).json(cards)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getCard = async (req, res) => {
  try {
    const card = await cardService.getCard(req.params.id)
    if (!card) {
      return res.status(404).json({ message: 'Card not found' })
    }
    res.status(200).json(card)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createCard = async (req, res) => {
  try {
    const card = await cardService.createCard(req.body)
    res.status(201).json(card)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateCard = async (req, res) => {
  try {
    const card = await cardService.updateCard(req.params.id, req.body)
    if (!card) {
      return res.status(404).json({ message: 'Card not found' })
    }
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteCard = async (req, res) => {
  try {
    const card = await cardService.deleteCard(req.params.id)
    if (!card) {
      return res.status(404).json({ message: 'Card not found' })
    }
    res.status(200).json({ message: 'Card deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
