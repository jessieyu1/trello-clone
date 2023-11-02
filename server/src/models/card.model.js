const Joi = require('joi');
const mongoose = require('mongoose');

//TODO: Add validation to the schema
const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

//define a Joi to validate schema
const cardValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  dueDate: Joi.date(),
})
const Card = mongoose.model('Card', cardSchema);

module.exports = { Card, cardValidationSchema }
