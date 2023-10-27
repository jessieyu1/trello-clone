const { Schema, model } = require('mongoose')

const listSchema = new Schema({
  title: String,
  position: Number,
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true,
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card',
    },
  ],
})

module.exports = mongoose('List', listSchema)
