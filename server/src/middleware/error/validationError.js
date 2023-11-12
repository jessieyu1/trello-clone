const logger=require('../../utils/logger')

module.exports = (error, req, res, next) => {
 logger.info(error);
  // check if this error is a validation error
  if (error.name === 'ValidationError') {
    res.status(401).json({ error: error.message });
    return;
  }
  next(error);
};
