const bcrypt = require('bcrypt');
const SALT_ROUNDS = require('../utils/constants');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
    }

const validatePassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
}

module.exports = {hashPassword, validatePassword}