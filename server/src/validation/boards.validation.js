const Joi = require('joi');

const createBoardSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().pattern(/^[a-zA-Z0-9\s]*$/).required(),
  members: Joi.array().items(Joi.string().hex().length(24)).custom((members, helpers) => {
    if (members.length < 1) {
      return helpers.error('at least one member');
    }
    return members;
  }),
  lists: Joi.array().items(Joi.string().hex().length(24)).default([])
})

const validateCreateBoard = (req, res, next) => {
  const { error } = createBoardSchema.validate(req.body);
  if (error) {
    res.status(401).json({message: error.details[0].message });
    return
  }
  next();
};

module.exports = {
  validateCreateBoard,
};
