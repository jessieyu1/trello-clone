const Joi = require("joi");
const mongoose = require("mongoose");
//validate the create user request
const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
const validateCreateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
const updateUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
const validateUpdateUser = (req, res, next) => {
  const { error } = updateUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
const validateUserId = (req, res, next) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user id" });
  }
  next();
};
const deleteUserSchema = Joi.object({
  userId: Joi.string().required(),
});
const validateDeleteUser = (req, res, next) => {
  const { error } = deleteUserSchema.validate({ userId: req.params.userId });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateUserId,
  validateDeleteUser,
};
