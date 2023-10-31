const mongoose = require('mongoose');

//TODO: Add validation to the schema
const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
