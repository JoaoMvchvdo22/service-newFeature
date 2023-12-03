const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "products",
      }
    );
  }

}

module.exports = Products;
