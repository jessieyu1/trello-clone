//TODO: create a list model

const { Schema, model } = require('mongoose')

const listSchema = new Schema({
  title: {
    type: String
  },
  position: {
    type: Number
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
  }],
});

const List = model('List', listSchema)

module.exports = List