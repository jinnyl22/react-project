const Sequelize = require("sequelize");
const config = require("../config/config");
const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.pw, config.dev);
const { Qna } = require("../model");

const db = {};

db.sequelize = sequelize;
db.Qna = Qna;
Qna.init(sequelize);

module.exports = db;
