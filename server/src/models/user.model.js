const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }]

})

const User = mongoose.model('User', userSchema)

module.exports = User