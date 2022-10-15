const { dot } = require("../modules/common");
// dot.config();

const config = {
  dev: {
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "",
  },
};
