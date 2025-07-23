const HttpError = require("./HttpError");

class UnauthorizedError extends HttpError {
  constructor(message = "unauthorizedError Error") {
    super(message, 401);
    this.name = "unauthorized Error";
  }
}

module.exports = UnauthorizedError;
