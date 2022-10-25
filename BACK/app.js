const { express, dot, session } = require("./modules/common");
dot.config();
const cors = require("cors");
const app = express();
const { sequelize } = require("./model/index");
const { user_service, userIdCheck, userEmailCheck } = require("./service/user_service");
const { qnaWrite, qnaList } = require("./service/qna_service");

app.listen(80, () => {
  console.log("http://localhost:80 on");
});

app.use(cors());
app.use(express.json()); // 리액트에서 값 넘어올때 json 형식으로 넘어와서 선언
// app.use(express.urlencoded({ extended: false })); // 우리 기존에 했던 프론트랑 백 구분없던 서버 시절

// 익스프레스 세션을 사용하기 위한 설정
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// 라우더 분리 해둔 것 불러옴
const UserRouter = require("./routes/user_router"); // router.post('/', (req, res) => { ... 을 불러옴
app.use("/user", UserRouter);

// app.post("/join", (req, res) => {
//   const { userName, userId, userPw, userPhone, userEmail } = req.body;

//   user_service(userName, userId, userPw, userPhone, userEmail, req, res);
// });

app.post("/join/check/id", (req, res) => {
  console.log(req.body);
  userIdCheck(req.body.id, req, res);
});

app.post("/join/emailsend", (req, res) => {
  console.log(req.body);
  userEmailCheck(req.body.email, req, res);
});

// app.post("/join/check/authnum", (req, res) => {
//   console.log(req.body.authNum);
//   authNumCheck(req.body.authNum, req, res);
// });

app.post("/board/write", (req, res) => {
  console.log(req.body);
  const { qnaTitle, qnaContent } = req.body.create;
  qnaWrite(qnaTitle, qnaContent, req, res);
});

app.post("/board/list", (req, res) => {
  const idx = req.body.idx;
  qnaList(idx, req, res);
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결 잘 됨");
  })
  .catch((err) => {
    console.log(err);
  });
