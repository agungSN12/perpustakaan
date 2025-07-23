module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define(
    "Borrow",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tanggal_pengembalian: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      tahun_terbit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("sedang di pinjam", "tidak sedang di pinjam"),
        allowNull: false,
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
      sequelize,
      modelName: "Borrow",
      tableName: "borrows",
      timestamp: false,
      underscored: true,
    }
  );

  Borrow.associate = (models) => {
    Borrow.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    Borrow.belongsTo(models.Book, {
      foreignKey: "book_id",
      as: "book",
    });
  };

  return Borrow;
};
