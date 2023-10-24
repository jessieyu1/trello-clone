//TODO: connect to mongoDB

const mongoose = require('mongoose')
const config = require('../config/index')

const User = require('../models/user.model')

async function dbLoader() {
  try {
    await mongoose.connect(config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedToPology: true,
    })

    // const defaultUser = new User({
    //   email: '8@abc.com',
    //   password: 'password123',
    //   name: '8',
    //   boards: [],
    // })
    // await defaultUser.save()
    console.log('#### Connected to MongoDB ####')
    return { mongoose, User }
  } catch (error) {
    console.error('MongoDB connected error:', error)
    throw error
  }
}

module.exports = dbLoader
