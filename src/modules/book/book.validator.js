const { body, param } = require("express-validator");

const createBookValidator = [
  body("judul")
    .notEmpty()
    .withMessage("judul wajib di isi")
    .isString()
    .withMessage("judul harus berupa teks")
    .isLength({ max: 100 })
    .withMessage("judul maksimal 100 karakter"),
  body("pengarang")
    .notEmpty()
    .withMessage("pengarang wajib di isi")
    .isString()
    .withMessage("pengarang harus berupa teks")
    .isLength({ max: 50 })
    .withMessage("pengarang maksimal 50 karakter"),
  body("jumlah_halaman")
    .notEmpty()
    .withMessage("jumlah_halaman wajib di isi")
    .isInt()
    .withMessage("jumlah halaman harus berupa  teks")
    .isLength({ max: 5 })
    .withMessage("jumlah halaman maksimal 5 karakter"),
  body("tahun_terbit")
    .notEmpty()
    .withMessage("tahun terbit wajib di isi")
    .isInt()
    .withMessage("tahun terbit harus berupa teks")
    .isLength({ max: 4, min: 4 })
    .withMessage("jumlah halaman maksimal dan minimum 4 karakter"),
];

const updateBookValidator = [
  param("id").isInt().withMessage("id harus berupa angka"),
  body("judul")
    .notEmpty()
    .withMessage("judul wajib di isi")
    .isString()
    .withMessage("judul harus berupa teks")
    .isLength({ max: 100 })
    .withMessage("judul maksimal 100 karakter"),
  body("pengarang")
    .notEmpty()
    .withMessage("pengarang wajib di isi")
    .isString()
    .withMessage("pengarang harus berupa teks")
    .isLength({ max: 100 })
    .withMessage("pengarang maksimal 100 karakter"),
  body("jumlah_halaman")
    .notEmpty()
    .withMessage("jumlah_halaman wajib di isi")
    .isInt()
    .withMessage("jumlah halaman harus berupa angka")
    .isLength({ max: 5 })
    .withMessage("jumlah halaman maksimal 5 karakter"),
  body("tahun_terbit")
    .notEmpty()
    .withMessage("tahun terbit wajib di isi")
    .isInt()
    .withMessage("tahun terbit harus berupa angka")
    .isLength({ max: 4, min: 4 })
    .withMessage("jumlah halaman maksimal dan minimum 4 karakter"),
];

const IdparamsValidator = [
  param("id").isInt().withMessage("id harus berupa angka"),
];

module.exports = {
  createBookValidator,
  updateBookValidator,
  IdparamsValidator,
};
