module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      judul: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      pengarang: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      jumlah_halaman: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tahun_terbit: {
        type: DataTypes.INTEGER,
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
      modelName: "Book",
      tableName: "books",
      timestamp: false,
      underscored: true,
    }
  );

  Book.associate = (models) => {
    Book.hasMany(models.Borrow, {
      foreignKey: "user_id",
      as: "borrow",
    });
  };

  return Book;
};
