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
  body("tahun terbit")
    .notEmpty()
    .withMessage("tahun terbit wajib di isi")
    .isInt()
    .withMessage("tahun terbit harus berupa teks")
    .isLength({ max: 4, min: 4 })
    .withMessage("jumlah halaman maksimal dan minimum 4 karakter"),
  body("id_user")
    .notEmpty()
    .withMessage("id_user wajib di isi")
    .isInt()
    .withMessage("id_user harus berupa Int")
    .isLength({ max: 10 })
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("tanggal peminjaman")
    .notEmpty()
    .withMessage("tanggal peminjaman wajib di isi")
    .isString()
    .withMessage("tanggal peminjaman harus berupa teks")
    .isLength({ max: 10 })
    .withMessage("tanggal peminjaman maksimal 10 karakter"),
  body("tanggal pengembalian")
    .notEmpty()
    .withMessage("tanggal pengembalian wajib di isi")
    .isString()
    .withMessage("tanggal pengembalian harus berupa teks")
    .isLength({ max: 10 })
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("status")
    .notEmpty()
    .withMessage("status wajib di isi")
    .isString()
    .withMessage("status harus berupa teks")
    .isLength({ max: 20 })
    .withMessage("status maksimal 10 karakter"),
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
  body("tahun terbit")
    .notEmpty()
    .withMessage("tahun terbit wajib di isi")
    .isInt()
    .withMessage("tahun terbit harus berupa angka")
    .isLength({ max: 4, min: 4 })
    .withMessage("jumlah halaman maksimal dan minimum 4 karakter"),
  body("id_user")
    .notEmpty()
    .withMessage("id_user wajib di isi")
    .isInt()
    .withMessage("id_user harus berupa angka")
    .isLength({ max: 10 })
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("tanggal peminjaman")
    .notEmpty()
    .withMessage("tanggal peminjaman wajib di isi")
    .isString()
    .withMessage("tanggal peminjaman harus berupa teks")
    .isLength({ max: 10 })
    .withMessage("tanggal peminjaman maksimal 10 karakter"),
  body("tanggal pengembalian")
    .notEmpty()
    .withMessage("tanggal pengembalian wajib di isi")
    .isString()
    .withMessage("tanggal pengembalian harus berupa teks")
    .isLength({ max: 10 })
    .withMessage("tanggal pegembalian maksimal 10 karakter"),
  body("status")
    .notEmpty()
    .withMessage("status wajib di isi")
    .isString()
    .withMessage("status harus berupa teks")
    .isLength({ max: 20 })
    .withMessage("status maksimal 10 karakter"),
];

const IdparamsValidator = [
  param("id").isInt().withMessage("id harus berupa angka"),
];

module.exports = {
  createBookValidator,
  updateBookValidator,
  IdparamsValidator,
};
