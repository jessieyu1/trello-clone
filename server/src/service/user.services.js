const {User} = require("../models/user.model");

const createNewUserService = async (newUser) => {
  try {
    const user = await User.create(newUser);
    return user;
  } catch (error) {
    console.log(error);
    next(error)
  }
};

const findUserByEmailService = async (email) => {
  try {
    return await User.findOne({email}).exec();
  } catch (error) {
    console.log(error);
    next(error)
  }
};

const updateUserPasswordService = async (userId, newPassword,next) => {
  try {
    return await User.findByIdAndUpdate(userId, {password:newPassword}, { new: true }).exec();
  } catch (error) {
    console.log(error);
    next(error)
  }
};
const deleteUserService = async (id) => {
  try {
    return await User.findByIdAndDelete(id).exec();
  } catch (error) {
    console.log(error);
    next(error)
  }
};

module.exports = { createNewUserService, findUserByEmailService, updateUserPasswordService, deleteUserService };
