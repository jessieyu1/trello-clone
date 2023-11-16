const jwt = require('jsonwebtoken')
const config = require('../config/index')

const secret = config.JWT_SECRET

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1d' })
}

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret)
    return decoded
  } catch (e) {
    return null
  }
}

module.exports = {
  generateToken,
  validateToken
}