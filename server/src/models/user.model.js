
//TODO: create a user model
//TODO: Add validation to the schema, username and email should be unique, password should be hashed
//TODO: Use bcrypt to hash the password
//TODO: Use Joi to validate the schema
const mongoose = require('mongoose');
const bcrypt=require('bcrypt')

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
  password: {
    type: String,
    required: true
  },
  boards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board'
  }],
});



// 此处可以在model中放入hash，用以下方法
// userSchema.methods.hashPassword = async function () {
//  this.password = await bcrypt.hash(this.password, 10)
// }

//userSchema.methods.validatePassword=async(password){
//  return bcrypt.compare(password,this.password)
// }

const User = mongoose.model('User', userSchema);

module.exports = { User};

