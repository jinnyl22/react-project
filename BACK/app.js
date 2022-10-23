const { express, dot } = require("./modules/common");
dot.config();
const cors = require("cors");
const app = express();
const { sequelize } = require("./model/index");
const { user_service, userIdCheck } = require("./service/user_service");

app.listen(80, () => {
  console.log("http://localhost:80 on");
});

app.use(cors());
app.use(express.json()); // 리액트에서 값 넘어올때 json 형식으로 넘어와서 선언
// app.use(express.urlencoded({ extended: false })); // 우리 기존에 했던 프론트랑 백 구분없던 서버 시절
app.post("/join", (req, res) => {
  const { userName, userId, userPw, userPhone, userEmail } = req.body;
  user_service(userName, userId, userPw, userPhone, userEmail, req, res);
});

app.post("/idcheck", (req, res) => {
  console.log(req.body);
  userIdCheck(req.body.userId, req, res);
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결 잘 됨");
  })
  .catch((err) => {
    console.log(err);
  });
