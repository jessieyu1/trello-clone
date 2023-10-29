const mongoose = require('mongoose');

//TODO: Add validation to the schema, username and email should be unique, password should be hashed
//TODO: Use bcrypt to hash the password
//TODO: Use Joi to validate the schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
