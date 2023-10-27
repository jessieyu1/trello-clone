const Card = require('../../../models/card.model')

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find()
    res.status(200).json(cards)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id)
    if (!card) return res.status(404).json({ message: 'Card not found' })
    res.status(200).json(card)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createCard = async (req, res) => {
  const newCard = new Card(req.body)
  try {
    const card = await newCard.save()
    res.status(201).json(card)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!card) return res.status(404).json({ message: 'Card not found' })
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id)
    if (!card) return res.status(404).json({ message: 'Card not found' })
    res.status(200).json({ message: 'Card deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
