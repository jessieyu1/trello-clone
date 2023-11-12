const logger = require('../../utils/logger')

module.exports = (error, req, res, next) => {
  logger.info(error);
  res.status(500).json(`Unexpected error happened ${error}, please try again`);
};