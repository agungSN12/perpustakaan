const express = require("express");
const router = express.Router();

const BookController = require("./book.controller");
const asyncErrorHandler = require("../../errors/ayncErrorHandler");
const {
  IdparamsValidator,
  createBookValidator,
  updateBookValidator,
} = require("./book.validator");
const validateRequest = require("../../middlewares/validation.middleware");
const authJWT = require("../../middlewares/Auth.middleware");
const authorizedRole = require("../../middlewares/AuthorizedRole.middleware");

router.use(authJWT);

router.get(
  "/",
  validateRequest,
  asyncErrorHandler(BookController.getAll.bind(BookController))
);

router.get(
  "/:id",
  IdparamsValidator,
  validateRequest,
  asyncErrorHandler(BookController.getById.bind(BookController))
);

router.post(
  "/",
  authorizedRole("admin", "pegawai"),
  createBookValidator,
  validateRequest,
  asyncErrorHandler(BookController.create.bind(BookController))
);
router.put(
  "/:id",
  authorizedRole("admin", "pegawai"),
  IdparamsValidator,
  updateBookValidator,
  validateRequest,
  asyncErrorHandler(BookController.update.bind(BookController))
);
router.delete(
  "/:id",
  authorizedRole("admin", "pegawai"),
  IdparamsValidator,
  validateRequest,
  asyncErrorHandler(BookController.delete.bind(BookController))
);

module.exports = router;
