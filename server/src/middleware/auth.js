const jwt = require('../utils/jwt')

// auth middleware
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const token = authHeader.split(' ')[1];
    try {
        const verifiedUser = jwt.verifyJwtToken(token)
        if (verifiedUser) {
            req.user = verifiedUser;
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' })
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
        
    
}
module.exports = authenticate
