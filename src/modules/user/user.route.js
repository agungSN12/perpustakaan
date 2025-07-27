const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");

const asyncErrorHandler = require("../../errors/ayncErrorHandler");
const {
  idParamValidator,
  updateUserValidator,
  createUserValidator,
} = require("./user.validator");
const validateRequest = require("../../middlewares/validation.middleware");
const authorizedRole = require("../../middlewares/AuthorizedRole.middleware");
const authJwt = require("../../middlewares/Auth.middleware");

router.use(authJwt);

router.get(
  "/",
  authorizedRole("admin"),
  asyncErrorHandler(UserController.getAll.bind(UserController))
);

router.get(
  "/:id",
  authorizedRole("admin"),
  idParamValidator,
  validateRequest,
  asyncErrorHandler(UserController.getById.bind(UserController))
);

router.post(
  "/",
  authorizedRole("admin"),
  createUserValidator,
  validateRequest,
  asyncErrorHandler(UserController.create.bind(UserController))
);

router.put(
  "/:id",
  authorizedRole("admin"),
  idParamValidator,
  updateUserValidator,
  validateRequest,
  asyncErrorHandler(UserController.update.bind(UserController))
);

router.delete(
  "/:id",
  authorizedRole("admin"),
  idParamValidator,
  validateRequest,
  asyncErrorHandler(UserController.delete.bind(UserController))
);

module.exports = router;
