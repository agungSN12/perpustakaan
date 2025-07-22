const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1", (req, res) => {
  res.status(200).json({ status: 200, message: "running" });
});

module.exports = app;
