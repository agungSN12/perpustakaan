const { Op } = require("sequelize");
const BorrowService = require("./borrow.service");
const cron = require("node-cron");
const BadRequestError = require("../../errors/BadRequestError");

class BorrowController {
  async getAll(req, res, next) {
    try {
      const borrow = await BorrowService.getAll();
      res.status(200).json({
        success: true,
        message: "data berhasil di ambil",
        data: borrow,
      });
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const borrow = await BorrowService.getById(req.params.id);
      res.status(200).json({
        success: true,
        message: "data berhasil di ambil",
        data: borrow,
      });
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const data = {
        ...req.body,
        status: "dipinjam",
      };

      const borrow = await BorrowService.create(data);
      res.status(201).json({
        success: true,
        message: "data peminjaman berhasil di buat",
        data: borrow,
      });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const borrow = await BorrowService.update(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "data berhasil di update",
        data: borrow,
      });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    const borrow = await BorrowService.delete(req.params.id);
    res.status(200).json({
      success: true,
      message: "data berhasil di hapus",
      data: borrow,
    });
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BorrowController();
