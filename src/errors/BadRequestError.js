class BadRequestError extends HttpError {
  constructor(message = "bad Request Error") {
    super(message, 404);
    this.name = "bad Request Error";
  }
}

module.exports = BadRequestError;
