const NotFoundError = require("../../errors/NotFoundError");
const BookService = require("./book.service");

class BookController {
  async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search || "";

      const books = await BookService.getAll(page, limit, search);
      if (books.length === 0)
        throw new NotFoundError("Data Buku belum ada boy!");

      res.json({
        success: true,
        message: "data buku berhasil di dapat",
        book_available: books.book_available,
        book_borrowed: books.book_borrowed,
        pagination: books.pagination,
        data: books.data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const book = await BookService.getById(req.params.id);
      if (!book) throw new NotFoundError("data buku tidak di temukan");

      const bookToJSON = book.toJSON();
      const result = {
        ...bookToJSON,
        borrow:
          !bookToJSON.borrow || bookToJSON.borrow.length === 0
            ? [{ status: "tersedia" }]
            : bookToJSON.borrow,
      };

      res.json({
        success: true,
        message: "data buku berhasil di dapat",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const book = await BookService.create(req.body);
      res.status(201).json({
        success: true,
        message: "data buku berhasil di buat",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const book = await BookService.update(req.params.id, req.body);
      if (!book) throw new NotFoundError("data buku tidak di temukan");
      res.status(200).json({
        success: true,
        message: "data buku berhasil di update",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const book = await BookService.delete(req.params.id);
      if (!book) throw new NotFoundError("data buku tidak di temukan");
      res
        .status(200)
        .json({ success: true, message: "data berhasil di hapus", data: book });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BookController();
