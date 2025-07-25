const HttpError = require("./HttpError");

class NotFoundError extends HttpError {
  constructor(message = "Notfound Error") {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

module.exports = NotFoundError;
