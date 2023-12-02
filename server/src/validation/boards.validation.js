const Joi = require('joi');
const mongoose = require('mongoose');
//validate the create board request
const createBoardSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string()
});

const validateCreateBoard = (req, res, next) => {
  const { error } = createBoardSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const getBoardSchema = Joi.object({
  boardId: Joi.string().required()
});

const validateGetBoard = (req, res, next) => {
  const { error } = getBoardSchema.validate(req.params);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

const updateBoardSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string()
});

const validateUpdateBoard = (req, res, next) => {
  const { error } = updateBoardSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const validateBoardId = (req, res, next) => {
  const { boardId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(boardId)) {
    return res.status(400).json({ error: 'Invalid board id' });
  }

  next();
};

const deleteBoardSchema = Joi.object({
  boardId: Joi.string().required()
});

const validateDeleteBoard = (req, res, next) => {
  const { error } = deleteBoardSchema.validate({boardId:req.params.boardId});

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

module.exports = {
  validateCreateBoard,
  validateGetBoard,
  validateUpdateBoard,
  validateBoardId,
  validateDeleteBoard,
};
