
//TODO: create a board model

const mongoose = require('mongoose');

const Joi = require('joi')


//TODO: Add validation to the schema
const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const boardValidationSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().pattern(/^[a-zA-Z0-9\s]*$/).allow(''),
  members: Joi.array().items(Joi.string().hex().length(24)).custom((members, helpers) => {
    if (members.length < 1) {
      return helpers.error('at least one member');
    }
    return members;
  }),
  lists: Joi.array().items(Joi.string().hex().length(24)).default([])
})

const Board = mongoose.model('Board', boardSchema);

module.exports = { Board, boardValidationSchema };

