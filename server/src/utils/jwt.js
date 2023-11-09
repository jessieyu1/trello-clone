// TODO: generate jwt token / verify jwt token

const jwt = require('jsonwebtoken');

//generate jwt token
const generateJwtToken=(payload,option)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,option);
}

//verify jwt token
const verifyJwtToken=(token)=>{
    return jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
}

module.exports={generateJwtToken,verifyJwtToken};