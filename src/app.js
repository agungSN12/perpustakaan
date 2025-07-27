const express = require("express");
const app = express();
const routes = require("./routes");
const errorHandler = require("./middlewares/ErrorHandler.middleware");
const cron = require("node-cron");
const updateExpired = require("../src/modules/borrow/borrow.service");

app.use(express.json());

app.use("/api/v1", routes);
app.use(errorHandler);

cron.schedule("0 0 * * *", async () => {
  try {
    await updateExpired.updateExpired();
  } catch (err) {
    console.log(err.message);
  }
});

app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Terjadi kesalahan pada server",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

module.exports = app;
