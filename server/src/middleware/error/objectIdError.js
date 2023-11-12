const mongoose = require('mongoose');

module.exports = (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError && error.path === '_id') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  next(error);
};


