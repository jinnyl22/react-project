const { dot } = require("../modules/common");
dot.config();

// 나중에 mailer 초기 설정도 여기에 작성해두기

const config = {
  dev: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "react-project",
    host: "127.0.0.1",
    dialect: "mysql",
    // 아래와 같이 나라지정을 해주어야 나라에 맞춰 시간이 들어온다
    timezone: "Asia/Seoul",
  },
};

module.exports = config;
