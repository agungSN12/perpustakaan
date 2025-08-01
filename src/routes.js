const express = require("express");
const router = express.Router();

const userRoutes = require("./modules/user/user.route");
const bookRoutes = require("./modules/book/book.route");
const borrowRoutes = require("./modules/borrow/borrow.route");
const authRoutes = require("./modules/auth/auth.route");
const categoryRoute = require("./modules/category/category.route");

const NotFound = require("./errors/NotFoundError");
const errorHandler = require("./middlewares/ErrorHandler.middleware");

router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/borrows", borrowRoutes);
router.use("/auth", authRoutes);
router.use("/category", categoryRoute);

router.use((req, res) => {
  throw new NotFound("Route Tidak Ditemukan!");
});
router.use(errorHandler);

module.exports = router;
