const { express, dot, session } = require("./modules/common");
dot.config();
const cors = require("cors");
const app = express();
const { sequelize } = require("./model/index");
const { userJoin, userIdCheck, userEmailCheck } = require("./service/user_service");
const { qnaWrite, qnaList } = require("./service/qna_service");

app.listen(80, () => {
  console.log("http://localhos/:80 on");
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
// UserRouter에서 불러온 컨트롤러(내보낸 모듈)는 /user뒤의 url로 붙음
app.use("/user", UserRouter);

app.post("/board/write", (req, res) => {
  console.log(req.body);
  const { qnaTitle, qnaContent, userId } = req.body;
  qnaWrite(qnaTitle, qnaContent, userId, req, res);
});

app.post("/board", (req, res) => {
  console.log(req.body); // { idx: 0 }
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
