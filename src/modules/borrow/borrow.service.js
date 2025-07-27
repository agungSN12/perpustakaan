const { Op, where } = require("sequelize");
const { Borrow, User, Book } = require("../../../models");
const BadRequestError = require("../../errors/BadRequestError");
const NotFoundError = require("../../errors/NotFoundError");

class BorrowService {
  async getAll() {
    return await Borrow.findAll();
  }

  async getById(id) {
    const borrow = await Borrow.findByPk(id);
    if (!borrow) {
      throw new NotFoundError("maaf pemesanan tidak di temukan");
    }

    return borrow;
  }

  async create(data) {
    if (!data) throw new BadRequestError("data gagal di tambahkan");
    const borrow = await Borrow.findOne({
      where: { book_id: data.book_id, status: "dipinjam" },
    });
    if (borrow) throw new BadRequestError("buku sedang di pinjam");

    const user = await User.findOne({ where: { id: data.user_id } });
    const book = await Book.findOne({ where: { id: data.book_id } });

    if (!user || !book) {
      throw new BadRequestError("user dan buku tidak di temukan");
    }

    const res = await Borrow.create(data);
    return res;
  }

  async update(id, data) {
    const borrow = await Borrow.findByPk(id);
    if (!borrow) throw new NotFoundError("id tidak di temukan");
    return await borrow.update(data);
  }

  async delete(id) {
    const borrow = await Borrow.findByPk(id);
    if (!borrow) throw new NotFoundError("id tidak di temukan");
    await borrow.destroy();
    return true;
  }

  async updateExpired() {
    const dateNow = new Date();
    const expiredBook = await Borrow.findAll({
      where: {
        status: "dipinjam",
        tanggal_pengembalian: {
          [Op.lt]: dateNow,
        },
      },
    });

    for (const borrow of expiredBook) {
      borrow.status = "tersedia";
      await borrow.save();
    }

    return expiredBook;
  }
}

module.exports = new BorrowService();
