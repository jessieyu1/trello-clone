const { validateToken } = require('../utils/jwt');
const constants = require('../utils/constants');

module.exports = (req, res, next) => {
  // 先检查 header 是否存在
  const authorization = req.header(constants.HEADERS.AUTHORIZATION);

  if (!authorization) {
    res.status(constants.HTTP_STATUS_CODES.UNAUTHORIZED).json({ error: constants.ERROR_MESSAGES.UNAUTHORIZED });
    return;
  }

  // 如果存在，就做检测，分两部分检测 一是类型，二是实际的值 
  // 正常 Token 写法是 Bearer xxxxx
  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer' || !token) {
    res.status(constants.HTTP_STATUS_CODES.UNAUTHORIZED).json({ error: constants.ERROR_MESSAGES.INVALID_TOKEN });
    return;
  }

  // 如果 Token 有值，验证是否有效 
  const payload = validateToken(token);

  if (!payload) {
    res.status(constants.HTTP_STATUS_CODES.UNAUTHORIZED).json({ error: constants.ERROR_MESSAGES.INVALID_TOKEN });
    return;
  }

  next();
};
