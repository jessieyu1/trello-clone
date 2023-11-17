const mongoose = require('mongoose')
const { User } = require('../models/user.model')
const userService = require('../service/user.service')

const usersValidation = require('../validation/users.validation')
const securePassword = require('../utils/securePassword')
const NotFoundException = require('../exceptions/NotFoundException')

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          description: The user name
 *        email: 
 *          type: string
 *          format: email
 *          description: The user email
 *        password:
 *          type: string
 *          description: The user password
 *        boards:
 *          type: array
 *          items:
 *            $ref: '#components/schemas/Board'
 *          description: The user boards
 *      required:
 *        - username
 *        - email
 *        - password
 *    Board:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: The Board title
 *        description: 
 *          type: string
 *          format: email
 *          description: The Board description
 *        lists:
 *          type: array
 *          items:
 *            $ref: '#components/schemas/List'
 *          description: An array of list references associated with the board
 *        members:
 *          type: array
 *          items:
 *            $ref: '#components/schemas/User'
 *          description: The user boards
 *    List:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the list
 *        cards:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Card'
 *        board:
 *          type: string  # 这里假设 board 是一个字符串，可以根据实际情况调整
 *          description: The ID of the associated board
 *    Card:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the card
 *          required: true
 *        description:
 *          type: string
 *          description: The description of the card
 *        dueDate:
 *          type: string
 *          format: date-time
 *          description: The due date of the card
 *        list: 
 *          type: object
 *          format: ObjectId
 *          description: The ID of the associated list
 *          example: "611f28a49ae7a652a0d01b11" # Replace with a valid List ID
 *        assignedTo:
 *          type: object  
 *          format: ObjectId
 *          description: The ID of the user assigned to the card
 *          example: "611f28a49ae7a652a0d01b22" # Replace with a valid User ID
 * paths:
 *   v1/users:
 *     post:
 *       summary: Creates a new user.
 *       tags:
 *         - Users
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'    # <-------
 *         responses:
 *           '201':
 *             description: Created 
 */

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
