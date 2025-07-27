const express = require("express");
const router = express.Router();

const BorrowController = require("./borrow.controller");

const asyncErrorHandler = require("../../errors/ayncErrorHandler");

const validateRequest = require("../../middlewares/validation.middleware");
const {
  IdparamsValidator,
  createBorrowValidator,
  updateBorrowValidator,
} = require("./borrow.validator");
const authJwt = require("../../middlewares/Auth.middleware");
const authorizedRole = require("../../middlewares/AuthorizedRole.middleware");

router.use(authJwt);

router.get(
  "/",
  authorizedRole("admin", "pegawai"),
  asyncErrorHandler(BorrowController.getAll.bind(BorrowController))
);

router.get(
  "/:id",
  IdparamsValidator,
  validateRequest,
  asyncErrorHandler(BorrowController.getById.bind(BorrowController))
);

router.post(
  "/",
  createBorrowValidator,
  validateRequest,
  asyncErrorHandler(BorrowController.create.bind(BorrowController))
);

router.put(
  "/:id",
  authorizedRole("admin", "pegawai"),
  IdparamsValidator,
  updateBorrowValidator,
  validateRequest,
  asyncErrorHandler(BorrowController.update.bind(BorrowController))
);

router.delete(
  "/:id",
  authorizedRole("admin", "pegawai"),
  IdparamsValidator,
  validateRequest,
  asyncErrorHandler(BorrowController.delete.bind(BorrowController))
);

module.exports = router;
