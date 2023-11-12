const logger = require('../../utils/logger')

module.exports = (error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    const logInfo = {
      // level: 'error',
      // time: Date.now(),
      // pid: process.pid,
      // hostname: require('os').hostname(),
      msg: 'SyntaxError in JSON parsing',
      request: {
        method: req.method,
        url: req.originalUrl,
        // headers: req.headers,
        // body: req.body,  // 请求体在错误中是解析前的原始内容
      },
    };

    logger.error(logInfo);
    return res.status(400).json({ error: 'Invalid JSON in request body' }); // 注意这里使用了 return
  }
    // 对于其他类型的错误，可以选择记录或者根据实际情况处理
 next(error)

};
