const userService = require('../service/user.service');
const{User,userValidationSchema}=require('../models/user.model')

const addUser = async (req, res) => {
  try {
    const { email, password, username, boards } = req.body;
    const { error } = userValidationSchema.validate({ email, password, username, boards })
    console.log('Validation Error:', error);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return 
    }
    const user = await userService.createUser(email, password, username, boards);
   return res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.details[0].message });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error' });
  }
}

const getUserById = async (req, res) => {
  try {
    const {userId } = req.params;
    const user = await userService.getUserById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateUserById = async (req, res) => { 
  try{
    const { userId } = req.params;
    const { email, password, username, boards } = req.body;
    const { error } = userValidationSchema.validate({ email, password, username, boards })
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    
    const user = await userService.updateUserById(userId, email, password, username, boards);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteUserById = async (req, res) => {
  try{
    const { userId } = req.params;
    const user = await userService.deleteUserById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
