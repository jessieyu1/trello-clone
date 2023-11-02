const mongoose = require('mongoose');
const Joi = require('joi')
//TODO: Add validation to the schema
const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

//add joi validation to the board schema
const boardValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string()
})
const Board = mongoose.model('Board', boardSchema);

module.exports = { Board, boardValidationSchema }
