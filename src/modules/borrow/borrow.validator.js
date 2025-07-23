const { body, param } = require("express-validator");

const createBorrowValidator = [
  body("user_id")
    .notEmpty()
    .withMessage("id user wajib di isi")
    .isInt()
    .withMessage("id user harus berupa Int")
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("book_id")
    .notEmpty()
    .withMessage("book id wajib di isi")
    .isInt()
    .withMessage("book id harus berupa Int")
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("tanggal_peminjaman")
    .notEmpty()
    .withMessage("tanggal peminjaman wajib di isi")
    .isISO8601()
    .toDate()
    .withMessage("format tanggal tidak valid"),

  body("status")
    .notEmpty()
    .withMessage("status wajib di isi")
    .isIn(["sedang di pinjam", "tidak sedang di pinjam"])
    .withMessage(
      "status harus 'sedang di pinjam', atau 'tidak sedang di pinjam' "
    ),
];

const updateBorrowValidator = [
  param("id").isInt().withMessage("id harus berupa angka"),
  body("user_id")
    .notEmpty()
    .withMessage("id user wajib di isi")
    .isInt()
    .withMessage("id user harus berupa Int")
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("book_id")
    .notEmpty()
    .withMessage("book id wajib di isi")
    .isInt()
    .withMessage("book id harus berupa Int")
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("tanggal_peminjaman")
    .notEmpty()
    .withMessage("tanggal peminjaman wajib di isi")
    .isISO8601()
    .toDate()
    .withMessage("format tanggal tidak valid"),

  body("status")
    .notEmpty()
    .withMessage("status wajib di isi")
    .isIn(["sedang di pinjam", "tidak sedang di pinjam"])
    .withMessage(
      "status harus 'sedang di pinjam', atau 'tidak sedang di pinjam' "
    ),
];

const IdparamsValidator = [
  param("id").isInt().withMessage("id harus berupa angka"),
];

module.exports = {
  createBorrowValidator,
  updateBorrowValidator,
  IdparamsValidator,
};
