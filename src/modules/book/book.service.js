const { Op } = require("sequelize");
const { Book, Borrow, Category } = require("../../../models");
const BadRequestError = require("../../errors/BadRequestError");

class BookService {
  async getAll(page = 1, limit = 10, search = "") {
    const offset = (page - 1) * limit;
    const whereClause = {};
    if (search) {
      whereClause[Op.or] = [{ judul: { [Op.like]: `%${search}%` } }];
    }

    const { count, rows } = await Book.findAndCountAll({
      where: whereClause,
      include: [{ model: Borrow, as: "borrow", attributes: ["status"] }],
      order: [["created_at", "DESC"]],
      limit,
      page,
      offset,
      distinct: true,
    });

    const booksBorrow = await Book.findAll({
      include: [
        {
          model: Borrow,
          as: "borrow",
          attributes: ["status"],
          where: { status: "dipinjam" },
        },
      ],
    });

    const result = rows.map((book) => {
      const bookToJSON = book.toJSON();
      return {
        ...bookToJSON,
        borrow:
          !bookToJSON.borrow || bookToJSON.borrow.length === 0
            ? [{ status: "tersedia" }]
            : bookToJSON.borrow,
      };
    });

    return {
      data: result,
      book_available: count - booksBorrow.length,
      book_borrowed: booksBorrow.length,
      pagination: {
        total: count,
        page,
        limit,
        totalPage: Math.ceil(count / limit),
      },
    };
  }
  async getById(id) {
    return await Book.findByPk(id, {
      include: [{ model: Borrow, as: "borrow", attributes: ["status"] }],
    });
  }
  async create(data) {
    if (!data)
      throw BadRequestError("data gagal di tambahkan karena data tidak valid");
    const category = await Category.findOne({
      where: { id: data.category_id },
    });

    if (!category) {
      throw new BadRequestError("id category tidak di temukan");
    }
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
