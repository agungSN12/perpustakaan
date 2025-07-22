class NotFoundError extends HttpError {
  constructor(message = "Notfound Error") {
    super(message, 404);
    this.name = "NotFound error";
  }
}

module.exports = NotFoundError;
