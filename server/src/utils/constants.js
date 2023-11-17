
module.exports = {

  HTTP_STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
    // 添加其他HTTP状态码...
  },

  ERROR_MESSAGES: {
    DUPLICATE_KEY: 'Conflict',
    INVALID_JSON: 'Invalid JSON in request body',
    INVALID_USER_ID: 'Invalid user ID',
    VALIDATION_ERROR: 'Validation error',
    NOT_FOUND_ERROR: 'Not found',
    UNEXPECTED_ERROR: 'Unexpected error happened, please try again'
    // 添加其他错误消息...
  },

  LOG_MESSAGES: {
    SYNTAX_ERROR: 'SyntaxError in JSON parsing',
    UNEXPECTED_ERROR: 'Unexpected error happened'
    // 添加其他日志消息...
  },

  HEADERS: {
    AUTHORIZATION: 'Authorization'
    // 添加其他HTTP头部...
  }
};
