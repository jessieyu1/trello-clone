const { User } = require('../models/user.model')
const { generateToken } = require('../utils/jwt')
const securePassword = require('../utils/securePassword')

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    const existingUser = await User.findOne({ $or: [{ username }, { email }] })

    const hashedPassword = await securePassword.hashPassword(password)

    const user = new User({
      username,
      email,
      password: hashedPassword,
    })

    await user.save()

    const token = generateToken({_id: user._id, username })

    res.status(201).json({ token })

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

  const token = generateToken({_id: user._id, username })

  res.json({ token })
}

module.exports = { register, login }
