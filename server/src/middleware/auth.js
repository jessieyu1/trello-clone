const jwt = require('../utils/jwt')

// auth middleware
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const verifiedUser = jwt.verifyJwtToken(token)
        if (verifiedUser) {
            req.user = verifiedUser;
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
    }
}
module.exports = {
    authenticate
}