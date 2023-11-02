const mongoose = require('mongoose');
<<<<<<< HEAD
const Joi = require('joi')

//TODO: Add validation to the schema
const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
});

//define a Joi schema for validation
const listValidationSchema = Joi.object({
  title: Joi.string().required()
})
const List = mongoose.model('List', listSchema);

module.exports = { List, listValidationSchema }
=======

const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  position: { type: Number },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
});

const List = mongoose.model('List', listSchema);

module.exports = List;
>>>>>>> bbb6b750cc49ec39b8f3dd4a8f7c2066629c22a8
