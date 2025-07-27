const { Book, Borrow } = require("../../../models");
const BadRequestError = require("../../errors/BadRequestError");
const NotFoundError = require("../../errors/NotFoundError");

class BookService {
  async getAll() {
    return await Book.findAll({
      include: [{ model: Borrow, as: "borrow", attributes: ["status"] }],
    });
  }
  async getById(id) {
    return await Book.findByPk(id, {
      include: [{ model: Borrow, as: "borrow", attributes: ["status"] }],
    });
  }
  async create(data) {
    if (!data)
      throw BadRequestError("data gagal di tambahkan karena data tidak valid");
    const res = await Book.create({ ...data });
    return res;
  }
  async update(id, data) {
    const book = await Book.findByPk(id);
    if (!book) return null;
    return await book.update(data);
  }
  async delete(id) {
    const book = await Book.findByPk(id);
    if (!book) return null;
    await book.destroy();
    return true;
  }
}

module.exports = new BookService();
