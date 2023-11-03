const List = require('../models/list.model')

const getAllLists = async () => {
  return await List.find()
}

const getList = async (id) => {
  return await List.findById(id)
}

const createList = async (listData) => {
  const newList = new List(listData)
  return await newList.save()
}

const updateList = async (id, listData) => {
  return await List.findByIdAndUpdate(id, listData, { new: true })
}

const deleteList = async (id) => {
  return await List.findByIdAndDelete(id)
}

module.exports = {
  getAllLists,
  getList,
  createList,
  updateList,
  deleteList,
}
