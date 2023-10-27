const { Schema, model } = require('mongoose')

const cardSchema = new Schema({
  title: String,
  description: String,
  list: {
    type: Schema.Types.ObjectId,
    ref: 'List',
    required: true,
  },
  comments: [String],
  attachments: [String],
})

module.exports = model('Card', cardSchema)
