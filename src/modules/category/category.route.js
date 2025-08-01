const express = require("express");
const router = express.Router();
const asyncErrorHandler = require("../../errors/ayncErrorHandler");
const categoryController = require("./category.controller");
const {
  categoryIdParamValidator,
  createCategoryValidator,
  updateCategoryValidator,
} = require("./category.validator");
const validateRequest = require("../../middlewares/validation.middleware");
const authJwt = require("../../middlewares/Auth.middleware");
const authorizedRole = require("../../middlewares/AuthorizedRole.middleware");

router.use(authJwt);

router.get(
  "/",
  asyncErrorHandler(categoryController.getAll.bind(categoryController))
);
router.get(
  "/:id",
  categoryIdParamValidator,
  validateRequest,
  asyncErrorHandler(categoryController.getById.bind(categoryController))
);

router.post(
  "/",
  authorizedRole("admin", "pegawai"),
  createCategoryValidator,
  validateRequest,
  asyncErrorHandler(categoryController.create.bind(categoryController))
);
router.put(
  "/:id",
  authorizedRole("admin", "pegawai"),
  categoryIdParamValidator,
  updateCategoryValidator,
  validateRequest,
  asyncErrorHandler(categoryController.update.bind(categoryController))
);
router.delete(
  "/:id",
  authorizedRole("admin", "pegawai"),
  categoryIdParamValidator,
  validateRequest,
  asyncErrorHandler(categoryController.delete.bind(categoryController))
);

module.exports = router;
