const { User } = require('../models/user.model')


async function createUserService(username, email, password, boards) {
  const user = new User({ username, email, password, boards })
  return user.save()
}

async function getAllUsersService() {
  return User.find().exec()
}

async function getUserByIdService(userId) {
  return User.findById(userId).exec()
}

async function updateUserByIdService(
  userId,
  username,
  email,
  password,
  boards
) {
  return User.findByIdAndUpdate(
    userId,
    { username, email, password, boards },
    { new: true }
  ).exec()
}

async function deleteUserByIdService(userId) {
  return User.findByIdAndDelete(userId).exec()
}

module.exports = {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserByIdService,
}
