const { VALIDATION_ERROR, INVALID_PASSWORD, INVALID_EMAIL } = require('../utils/constants');

// error handler 

// 404
function handleNotFound(req, res, next) {
    res.status(404).json({ error: 'Not Found' });
}
// 400
function handleValidationError(err, req, res, next) {
    if (err.name === VALIDATION_ERROR) {
        res.status(400).json({ error: 'Validation Error', message: err.message });
    } else if (err.name === INVALID_PASSWORD) {
        res.status(400).json({ error: 'Invalid Password', message: err.message });
    } else if (err.name === INVALID_EMAIL) {
        res.status(400).json({ error: 'Invalid Email', message: err.message });
    } else {
        res.status(400).json({ error: 'Bad Request' });
    }
}
// 500
function handleInternalServerError(err, req, res, next) {
    res.status(500).json({ error: 'Internal Server Error' });
}

module.exports={
    handleNotFound,
    handleValidationError,
    handleInternalServerError
}