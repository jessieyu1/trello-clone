const mongoose = require('mongoose');

//TODO: Add validation to the schema
const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
});

const List = mongoose.model('List', listSchema);

module.exports = List;
