const { User } = require('../models/user.model')
const securePassword = require('../utils/securePassword')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    //validation
    //409 conflicts

    const existingUser = await User.findOne({ $or: [{ username }, { email }] })
    //  if (existingUser) {
    //   next(new conflictError)
    // }
    const hashedPassword = await securePassword.hashPassword(password)

    const user = new User({
      username,
      email,
      password: hashedPassword,
    })

    await user.save()

    res.status(201).json({ _id: user._id, username })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username }).exec()
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' })
    return
  }


  
  if (!await securePassword.validatePassword(password,user.password)) {
    res.status(401).json({ error: 'Invalid credentials' })
    return
  }
  res.json({
    _id: user._id,
    username: user.username,
  })
}

module.exports = { register, login }
