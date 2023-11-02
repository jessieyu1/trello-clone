const { List} = require('../models/list.model');

async function createList(title, cards, board) {
  const list = new List({ title, cards, board });
  return list.save();
}

async function getAllLists() {
  return List.find().exec();
}

async function getListById(listId) {
  return List.findById(listId).exec();
}

async function updateListById(listId, title, cards, board) {
  return List.findByIdAndUpdate(
    listId,
    { title, cards, board },
    { new: true }
  ).exec();
}

async function deleteListById(listId) {
  return List.findByIdAndDelete(listId).exec();
}

module.exports = {
  createList,
  getAllLists,
  getListById,
  updateListById,
  deleteListById,
};
