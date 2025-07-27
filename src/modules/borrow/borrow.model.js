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
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "books",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      tanggal_pengembalian: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("dipinjam", "tersedia"),
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
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Borrow.belongsTo(models.Book, {
      foreignKey: "book_id",
      as: "book",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Borrow;
};
