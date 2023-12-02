//  generate jwt token / verify jwt token
const UserSchema = require('../models/user.model');
const jwt = require('jsonwebtoken');

//generate jwt token
const generateJwtToken=(payload)=>{
  return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:86400});
}

//verify jwt token
const verifyJwtToken=(token)=>{
  return jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
}

module.exports={generateJwtToken,verifyJwtToken};