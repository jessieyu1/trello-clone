const userService = require('../../../services/user.service')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
