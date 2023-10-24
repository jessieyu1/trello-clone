//TODO: create a board model
const { Schema, model } = require('mongoose')

const boardSchema = new Schema({
  title: String,
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'List',
  }],
});

const Board = model('Board', boardSchema)

module.exports = Board