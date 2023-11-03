const listService = require('../../../services/list.service')

exports.getAllLists = async (req, res) => {
  try {
    const lists = await listService.getAllLists()
    res.status(200).json(lists)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getList = async (req, res) => {
  try {
    const list = await listService.getList(req.params.id)
    if (!list) {
      return res.status(404).json({ message: 'List not found' })
    }
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createList = async (req, res) => {
  try {
    const list = await listService.createList(req.body)
    res.status(201).json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateList = async (req, res) => {
  try {
    const list = await listService.updateList(req.params.id, req.body)
    if (!list) {
      return res.status(404).json({ message: 'List not found' })
    }
    res.status(200).json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteList = async (req, res) => {
  try {
    const list = await listService.deleteList(req.params.id)
    if (!list) {
      return res.status(404).json({ message: 'List not found' })
    }
    res.status(200).json({ message: 'List deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
