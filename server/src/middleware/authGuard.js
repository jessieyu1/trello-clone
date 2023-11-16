//验证请求是否包含token，以及token是否有效
const { validateToken } = require('../utils/jwt')

module.exports = (req, res, next) => {
  //先检查header是否存在
  const authorization = req.header('Authorization')
  if (!authorization) {
    res.status(401).json({ error: 'missing authorization header' })
    return
  }

  // 如果存在，就做检测，分两部分检测 一是类型，二是实际的值 
  //正常token 写法是 Bearer xxxxx
  const [type, token] = authorization.split(' ')
  if (type !== 'Bearer'||!token ) {
    res.status(401).json({ error: 'invalid token' })
    return
  }
  // 如果token有值，验证是否有效 
  const payload = validateToken(token)
  if (!payload) {
    res.status(401).json({ error: 'it is invalid token' })
    return
  }
  next()
}