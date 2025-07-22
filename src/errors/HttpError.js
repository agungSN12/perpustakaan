class HttpError extends Error {
  constructor(mesage, statusCode) {
    super(mesage);
    this.statusCode = statusCode;
    this.name = "HttpError";
  }
}
