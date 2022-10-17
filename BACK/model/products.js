const Sequelize = require("sequelize");
const moment = require("moment");

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productName: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
        productPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        productSale: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        productQuentity: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        productComment: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
        },
        productImg: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        productStatus: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          get() {
            return moment(this.getDataValue("createdAt")).format("YYYY/MM/DD HH:mm:ss");
          },
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          get() {
            return moment(this.getDataValue("updatedAt")).format("YYYY/MM/DD HH:mm:ss");
          },
        },
        deletedAt: {
          type: Sequelize.DATE,
          get() {
            return moment(this.getDataValue("deletedAt")).format("YYYY/MM/DD HH:mm:ss");
          },
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
        modelName: "Product",
        tableName: "products",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
}

module.exports = Product;
