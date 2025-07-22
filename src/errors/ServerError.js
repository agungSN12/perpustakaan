class ServerError extends HttpError {
  constructor(message = "server error") {
    super(message, 500);
    this.name = "server error";
  }
}

module.exports = ServerError;
