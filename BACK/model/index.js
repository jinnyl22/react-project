const Sequelize = require("sequelize");
const config = require("../config/config");
const Product = require("./products");
const User = require("./users");
const QnA = require("./qna");
const Notice = require("./notices");
const Admin = require("./admins");

// config.js에 있는 DB 값으로 새로운 Sequelize 객체를 생성하여 db 객체에 넣어주고 다른 곳에서도 같은 Sequelize 객체를 사용할 수 있도록 db 객체를 export 해준다

// 데이터베이스 연결정보로 시퀄라이즈 ORM 객체를 생성한다
// 순서를 잘 지켜서 써주기!!
const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

// const sequelize = new Sequelize()

const db = {}; // 여기와 실제 데이터베이스가 연결된다.

// 데이터베이스와 ORM을 매핑
// db를 통해 데이터 베이스를 관리할 수 있다.
db.sequelize = sequelize;
db.User = User;
db.Product = Product;
db.QnA = QnA;
db.Notice = Notice;
db.Admin = Admin;

User.init(sequelize);
QnA.init(sequelize);
Notice.init(sequelize);
Admin.init(sequelize);

User.associate(db);
QnA.associate(db);
Notice.associate(db);
Admin.associate(db);

module.exports = db;
