const { VALIDATION_ERROR, INVALID_PASSWORD, INVALID_EMAIL, NOT_FOUNT_ERROR } = require('../utils/constants');

// error handler 
const errorHandlerMiddleware = (err, req, res, next) => {
  //default error 500
  const defaultError = {
    statusCode:500,
    message:err.message || 'Internal Server Error'
  }
  //409 error
  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(409).json({ error: 'ValidationError', message: 'User already exist' });
  }
  //404 error
  if (err.name === NOT_FOUNT_ERROR) {
    return res.status(404).json({ error: 'Not Found', message: err.message });
  }
  //400 error
  if (err.name === VALIDATION_ERROR || err.name === INVALID_PASSWORD || err.name === INVALID_EMAIL) {
    return res.status(400).json({ error: err.name, message: err.message });
  }
  return res.status(defaultError.statusCode).json({ error: defaultError.message });
}

module.exports=errorHandlerMiddleware