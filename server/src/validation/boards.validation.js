const Joi = require("joi");

const createBoardSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});

const validateCreateBoard = (req, res, next) => {
  const { error } = createBoardSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};


const updateBoardSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});

const validateUpdateBoard = (req, res, next) => {
  const { error } = updateBoardSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  validateCreateBoard,
  validateUpdateBoard,
};
