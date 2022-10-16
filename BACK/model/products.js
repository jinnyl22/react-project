const Sequelize = require("sequelize");
const moment = require("moment");

// 보통 테이블은 소문자 복수형(users), 모델은 대문자로 시작하는 단수형(User)로 작성한다.
// 모델은 Sequelize.Model을 확장한 클래스로 선언한다.
class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userName: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      userPw: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      userEmail: {
        type: Sequelize.STRING(80),
        allowNull: false,
        unique: true,
      },
      userBirth: {
        type: Sequelize.STRING(12),
        allowNull: true,
        defaultValue: "",
      },
    });
  }
}
