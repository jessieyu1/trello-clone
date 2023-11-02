//TODO: create a card model
const mongoose = require('mongoose');
const Joi=require('joi')


//TODO: Add validation to the schema
const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const cardValidationSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().allow(''),
  dueDate: Joi.date(),
  list: Joi.string().hex().length(24).allow('', null),//验证字段是否包含一个有效的 MongoDB ObjectId
  assignedTo: Joi.string().hex().length(24),
});

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card, cardValidationSchema };

