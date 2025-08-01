const categoryService = require("./category.service");

class CategoryController {
  async getAll(req, res, next) {
    try {
      const category = await categoryService.getAll();
      res.json({
        success: true,
        message: "data berhasil di ambil",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    const category = await categoryService.getById(req.params.id);
    try {
      res.json({
        success: true,
        message: "data berhasil di ambil",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const category = await categoryService.create(req.body);
      res.status(201).json({
        success: true,
        message: "data berhasil di tambahkan",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const category = await categoryService.update(req.params.id, req.body);
      res.status(200).json({
        succes: true,
        message: "data berhasil di update",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const category = await categoryService.delete(req.params.id);
      res.status(200).json({
        success: true,
        message: "data berhasil di hapus",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
