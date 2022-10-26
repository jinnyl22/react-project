const Sequelize = require("sequelize");

// 보통 테이블은 소문자 복수형(users), 모델은 대문자로 시작하는 단수형(User)로 작성한다.
// 모델은 Sequelize.Model을 확장한 클래스로 선언한다.
class Admin extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        adminId: {
          type: Sequelize.STRING(40),
          allowNull: false,
          unique: true,
        },
        adminPw: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        paranoid: true,
        modelName: "Admin",
        tableName: "admins",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Admin.hasMany(db.Notice, { foreignKey: "adminId", sourceKey: "id" });
  }
}

module.exports = Admin;
