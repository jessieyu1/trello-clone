const { User} = require('../models/user.model');

async function createUser(email, password, username, boards) {
  const user = new User({ email, password, username, boards });
  return user.save();
}

async function getAllUsers() {
  return User.find().exec();
}

async function getUserById(userId) {
  return User.findById(userId).exec();
}

async function updateUserById(userId, email, password, username, boards) {
  return User.findByIdAndUpdate(
    userId,
    { email, password, username, boards },
    { new: true }
  ).exec();
}

async function deleteUserById(userId) {
  return User.findByIdAndDelete(userId).exec();
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
