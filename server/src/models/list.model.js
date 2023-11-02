const mongoose = require('mongoose');
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
