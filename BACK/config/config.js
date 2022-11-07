const dot = require("dotenv").config;

module.exports = config = {
  dev: {
    username: "root",
    // 숫자는 꼭 문자열로 처리해주기
    // pw: process.env.DB_PASSWORD,
    pw: "03070307",
    database: "react-project",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "Asia/Seoul",
    dialectOptions: {
      dataStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: true,
    },
  },
};
