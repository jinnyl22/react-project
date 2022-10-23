const Sequelize = require("sequelize");
const moment = require("moment");

// 보통 테이블은 소문자 복수형(users), 모델은 대문자로 시작하는 단수형(User)로 작성한다.
// 모델은 Sequelize.Model을 확장한 클래스로 선언한다.
class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userName: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaultValue: "",
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
        userPhone: {
          type: Sequelize.STRING(12),
          allowNull: false,
          unique: true,
        },
        userState: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        userGrade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1,
        },
        admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        refreshToken: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        lastLogin: {
          type: Sequelize.DATE,
          // get() -> 시퀄라이즈 모델 속성에 대한 사용자지정 getter
          // 해당 컬럼의 값을 가져오려면 getDataValue("해당 컬럼의 키 값")를 사용해준다.
          // moment 모듈을 사용해서 날짜의 형식을 바꿔줄 수 있다
          get() {
            return moment(this.getDataValue("last_login")).format("YYYY/MM/DD HH:mm:ss");
          },
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
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  // static associate(db) {}
}

module.exports = User;
