const mongoose = require('mongoose');
const logger = require('../utils/logger');
const NotFoundException = require('../exceptions/NotFoundException');

const handleDuplicateKeyError = (error, res) => {
  const field = Object.keys(error.keyPattern)[0];
  const value = error.keyValue[field];
  res.status(409).json({
    error: 'Conflict',
    message: `Duplicate key error. ${field} '${value}' already exists.`,
  });
};

const handleSyntaxError = (error, req, res) => {
  const logInfo = {
    msg: 'SyntaxError in JSON parsing',
    request: {
      method: req.method,
      url: req.originalUrl,
    },
  };
  logger.error(logInfo);
  res.status(400).json({ error: 'Invalid JSON in request body' });
};

const handleCastError = (error, res) => {
  if (error instanceof mongoose.Error.CastError && error.path === '_id') {
    res.status(400).json({ error: 'Invalid user ID' });
  }
};

const handleValidationError = (error, res) => {
  if (error.name === 'ValidationError') {
    res.status(401).json({ error: error.message });
  }
};

const handleNotFoundException = (error, res) => {
  if (error instanceof NotFoundException) {
    res.status(404).json({ error: error.message });
  }
};

const handleUnexpectedError = (error, req, res, next) => {
  logger.error(error);
  
  if (res.headersSent) {
    logger.error('Headers already sent, skipping response');
    return next(error);
  }

  res.status(500).json(`Unexpected error happened ${error}, please try again`);
};
// const handleUnexpectedError = (error, res) => {
//   logger.info(error);
//   res.status(500).json(`Unexpected error happened ${error}, please try again`);
// };

module.exports = (error, req, res, next) => {
  if (error.code === 11000) {
    handleDuplicateKeyError(error, res);
  } else if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    handleSyntaxError(error, req, res);
  } else {
    handleCastError(error, res);
    handleValidationError(error, res);
    handleNotFoundException(error, res);
    handleUnexpectedError(error, res);
  }
};
