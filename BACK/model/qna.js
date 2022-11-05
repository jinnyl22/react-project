const Sequelize = require("sequelize");

class Qna extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        user: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        text: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        count: {
          type: Sequelize.INTEGER,
        },
      },
      { sequelize, timestamp: true, modelName: "Qna", tableName: "qna", charset: "utf8", collate: "utf8_general_ci" }
    );
  }
}

module.exports = Qna;
