const mongoose = require('mongoose');
const logger = require('../utils/logger');
const NotFoundException = require('../exceptions/NotFoundException');
const constants = require('../utils/constants');

const handleDuplicateKeyError = (error, res) => {
  const field = Object.keys(error.keyPattern)[0];
  const value = error.keyValue[field];
  res.status(constants.HTTP_STATUS_CODES.CONFLICT).json({
    error: constants.ERROR_MESSAGES.CONFLICT,
    message: `${constants.ERROR_MESSAGES.DUPLICATE_KEY} ${field} '${value}' already exists.`,
  });
};

const handleSyntaxError = (error, req, res) => {
  const logInfo = {
    msg: constants.LOG_MESSAGES.SYNTAX_ERROR,
    request: {
      method: req.method,
      url: req.originalUrl,
    },
  };
  logger.error(logInfo);
  res.status(constants.HTTP_STATUS_CODES.BAD_REQUEST).json({ error: constants.ERROR_MESSAGES.INVALID_JSON });
};

const handleCastError = (error, res) => {
  if (error instanceof mongoose.Error.CastError && error.path === '_id') {
    res.status(constants.HTTP_STATUS_CODES.BAD_REQUEST).json({ error: constants.ERROR_MESSAGES.INVALID_USER_ID });
  }
};

const handleValidationError = (error, res) => {
  if (error.name === 'ValidationError') {
    res.status(constants.HTTP_STATUS_CODES.UNAUTHORIZED).json({ error: error.message });
  }
};

const handleNotFoundException = (error, res) => {
  if (error instanceof NotFoundException) {
    res.status(constants.HTTP_STATUS_CODES.NOT_FOUND).json({ error: error.message });
  }
};

const handleUnexpectedError = (error, req, res, next) => {
  logger.error(error);
  
  if (res.headersSent) {
    logger.error(constants.LOG_MESSAGES.HEADERS_ALREADY_SENT);
    return next(error);
  }

  res.status(constants.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(`${constants.ERROR_MESSAGES.UNEXPECTED_ERROR} ${error}, please try again`);
};

module.exports = (error, req, res, next) => {
  if (error.code === 11000) {
    handleDuplicateKeyError(error, res);
  } else if (error instanceof SyntaxError && error.status === constants.HTTP_STATUS_CODES.BAD_REQUEST && 'body' in error) {
    handleSyntaxError(error, req, res);
  } else {
    handleCastError(error, res);
    handleValidationError(error, res);
    handleNotFoundException(error, res);
    handleUnexpectedError(error, req, res, next);
  }
};

