const HttpError = require("./HttpError");

class BadRequestError extends HttpError {
  constructor(message = "bad Request Error") {
    super(message, 400);
    this.name = "BadRequestError";
  }
}

module.exports = BadRequestError;
