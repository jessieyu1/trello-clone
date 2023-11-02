
//TODO: create a user model
//TODO: Add validation to the schema, username and email should be unique, password should be hashed
//TODO: Use bcrypt to hash the password
//TODO: Use Joi to validate the schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: { type: String, required: true },
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }],
});

userSchema.pre('save', async function (next){
  if (!this.isModified('password')) {
    return next()
  }
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    console.error('Password hash error:', error);
    return next(error)
  }
})

const userValidationSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  boards: Joi.array().items(Joi.string().hex().length(24)).default([]),
})

const User = mongoose.model('User', userSchema);

module.exports = { User, userValidationSchema };

