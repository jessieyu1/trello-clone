const mongoose = require('mongoose')
const { User } = require('../models/user.model')
const userService = require('../service/user.service')

const usersValidation = require('../validation/users.validation')
const securePassword = require('../utils/securePassword')
const NotFoundException = require('../exceptions/NotFoundException')



const createUser = async (req, res, next) => {
  try {

    const { username, email, password, boards } = req.body
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })
    // if (existingUser) {
    //   res.status(409).json({ error: 'User Already Existing'})
    //   return
    // } else {
        
      // console.log(req.body)
      const hashedPassword = await securePassword.hashPassword(password)
      // console.log(hashedPassword)
    usersValidation.validateCreateUser(req, res, async () => {
      try {
        const newUser = await userService.createUserService(
          username,
          email,
          hashedPassword,
          boards
        )
       
        res.status(201).json(newUser)
        return
      } catch (error) {
        next(error)
      }
      })
    // }
  } catch (error) {
    next(error)
  }
}

const getAllUsers = async (req, res,next) => {
  try {
    const users = await userService.getAllUsersService()
    res.json(users)
  } catch (error) {

    next(error)
  }
}

const getUserById = async (req, res,next) => {
  // if (!userId) {
  //   next(new objectIdError);
  // }
  try {
    const { userId } = req.params
    const user = await userService.getUserByIdService(userId)
    if (!user) {
      throw new NotFoundException('User not found')
      // return res.status(404).json({Error:("User not found")})
    }
    
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

const updateUserById = async (req, res, next) => {
  try {
    const { userId } = req.params
    const { username, email, password, boards } = req.body
    const hashedPassword = await securePassword.hashPassword(password)
      
    usersValidation.validateCreateUser(req, res, async () => {
      try {
        const updatedUser = await userService.updateUserByIdService(
          userId,
          username,
          email,
          hashedPassword,
          boards,
          {
            new: true
          }
        )
        if (!updatedUser) {
          throw new NotFoundException('User Not Found')
        }
      
        res.status(201).json(updatedUser)
      } catch (error) {
        next(error)
      }
    })
  }catch (error) {
    next(error)
  }
}
const deleteUserById = async (req, res,next) => {


  // if (!userId) {
  //   next(new objectIdError);
  // }
  
  try {
    const { userId } = req.params
    const user = await userService.deleteUserByIdService(userId)
    if (!user) {
      throw new NotFoundException('User Not Found')
    }
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
}
