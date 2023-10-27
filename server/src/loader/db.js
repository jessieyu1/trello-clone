const mongoose = require('mongoose')
const { mongoConnection } = require('../config')

module.exports = async () => {
  mongoose.connection.on('connected', () => {
    console.log(`DB connected`)
  })

  try {
    await mongoose.connect(mongoConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
