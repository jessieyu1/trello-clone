
//TODO: connect to mongoDB


const mongoose = require('mongoose')

const connectDB = async (URI) => { 
  if (!URI) {
    throw new Error('Please provide a valid URI')
  }
  const db = mongoose.connection 

  db.on('error', (error) => console.log(error))
  db.on(
    'connected',() => console.log('✅Connected to MongoDB✅')   
  )
  db.on('disconnected', () => console.log('❌Disconnected from MongoDB❌'))
  return mongoose.connect(URI)
}

const db = async (URI) => {
  try {
    await connectDB(URI)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = db

