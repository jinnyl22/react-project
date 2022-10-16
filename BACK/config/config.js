const { dot } = require("../modules/common");
dot.config();

// 나중에 mailer 초기 설정도 여기에 작성해두기

const config = {
  dev: {
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "react-project",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = config;
