const List = require('../../../models/list.model')

exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find()
    res.status(200).json(lists)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id)
    if (!list) return res.status(404).json({ message: 'List not found' })
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createList = async (req, res) => {
  const newList = new List(req.body)
  try {
    const list = await newList.save()
    res.status(201).json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateList = async (req, res) => {
  try {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!list) return res.status(404).json({ message: 'List not found' })
    res.status(200).json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteList = async (req, res) => {
  try {
    const list = await List.findByIdAndDelete(req.params.id)
    if (!list) return res.status(404).json({ message: 'List not found' })
    res.status(200).json({ message: 'List deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
