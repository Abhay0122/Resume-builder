class ErrorHandler extends Error {
  constructor(statusCode, message) {
    // console.log(message)
    super(message);
    (this.statusCode = statusCode),
      (this.message = message),
      Error.captureStackTrace(this);
  }
}

module.exports = ErrorHandler;
