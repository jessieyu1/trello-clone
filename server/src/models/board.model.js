const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
