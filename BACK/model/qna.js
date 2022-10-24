const Sequelize = require("sequelize");
const moment = require("moment");

class QnA extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        adminA: {
          type: Sequelize.TEXT,
          allowNull: true,
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
          allowNull: true,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
        modelName: "QnA",
        tableName: "qna",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.QnA.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
  }
}

module.exports = QnA;
