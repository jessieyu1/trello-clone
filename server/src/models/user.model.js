const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//TODO: Add validation to the schema, username and email should be unique, password should be hashed
//TODO: Use bcrypt to hash the password
//TODO: Use Joi to validate the schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }],
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Define a Joi schema for validation
const userValidationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const User = mongoose.model('User', userSchema);

module.exports = { User, userValidationSchema }