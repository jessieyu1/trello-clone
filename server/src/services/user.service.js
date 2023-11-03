const User = require('../models/user.model')

const getAllUsers = async () => {
  return await User.find()
}

const getUser = async (id) => {
  return await User.findById(id)
}

const createUser = async (userData) => {
  const newUser = new User(userData)
  return await newUser.save()
}

const updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true })
}

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id)
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
