module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "categories",
      timestamp: true,
      underscored: true,
    }
  );

  Category.associate = (model) => {
    Category.hasMany(model.Book, {
      foreignKey: "category_id",
      as: "category",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Category;
};
