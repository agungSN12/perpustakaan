const express = require("express");
const app = express();
const routes = require("./routes");
const errorHandler = require("./src/middlewares/ErrorHandler.middleware");

app.use(express.json());

app.use("/api/v1", routes);
app.use(errorHandler);
app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Terjadi kesalahan pada server",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

module.exports = app;
