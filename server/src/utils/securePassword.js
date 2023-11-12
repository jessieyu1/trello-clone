const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}

const validatePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {hashPassword,validatePassword}
