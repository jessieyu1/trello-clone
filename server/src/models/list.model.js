
//TODO: create a list model

const mongoose = require('mongoose');
const Joi = require('joi')

//TODO: Add validation to the schema
const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
});

const listValidationSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(), // title 必须是字符串，长度在 3 到 50 之间
  cards: Joi.array().items(Joi.string().hex().length(24)).default([]), // cards 必须是包含有效 ObjectId 的字符串数组
  board: Joi.string().hex().length(24).required().default([]), // board 必须是有效 ObjectId 的字符串
});


const List = mongoose.model('List', listSchema);

module.exports = { List, listValidationSchema };

