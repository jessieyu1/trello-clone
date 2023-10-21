const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
