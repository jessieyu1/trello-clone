//TODO: create a user model
const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  boards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Board',
    },
  ],
})

const User = model('User', userSchema)

module.exports = User
