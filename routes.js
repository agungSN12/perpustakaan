const express = require("express");
const router = express.Router();

const userRoutes = require("./src/modules/user/user.route");

const NotFound = require("./src/errors/NotFoundError");
const errorHandler = require("./src/middlewares/ErrorHandler.middleware");
router.use(errorHandler);

router.use("/users", userRoutes);

router.use((req, res) => {
  throw new NotFound("Route Tidak Ditemukan!");
});

module.exports = router;
