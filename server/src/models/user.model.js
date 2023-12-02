const mongoose = require("mongoose");
const Joi = require("joi");
const { hashPassword } = require("../utils/checkPassword");

// Add validation to the schema and email should be unique, password should be hashed
// Use bcrypt to hash the password
// Use Joi to validate the schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Board" }],
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Define a Joi schema for validation
const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const User = mongoose.model("User", userSchema);

module.exports = { User, userValidationSchema, userSchema };
