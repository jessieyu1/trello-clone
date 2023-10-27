const { Schema, model } = require('mongoose')

const boardSchema = new Schema({
  title: String,
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
  ],
})

module.exports = model('Board', boardSchema)
