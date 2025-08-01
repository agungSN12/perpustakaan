const { Category } = require("../../../models");
const NotFoundError = require("../../errors/NotFoundError");

class CategoryService {
  async getAll() {
    const category = await Category.findAll();
    return category;
  }

  async getById(id) {
    if (!id) {
      throw new NotFoundError("id tidak di temukan");
    }
    const category = await Category.findByPk(id);
    return category;
  }
  async create(data) {
    const category = await Category.create(data);
    return category;
  }
  async update(id, data) {
    if (!id) {
      throw new NotFoundError("id tidak di temukan");
    }

    const category = await Category.findByPk(id);
    return await category.update(data);
  }
  async delete(id) {
    if (!id) {
      throw new NotFoundError("id tidak di temukan");
    }
    const category = await Category.findByPk(id);
    await category.destroy(id);
    return true;
  }
}
module.exports = new CategoryService();
