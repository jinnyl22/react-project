const express = require("express");
const { sequelize, Qna } = require("./public");

const app = express();

// cors : 허용되지 않은 도메인은 접속을 할 수 없게 막아주는 것
const cors = require("cors");

// 브라우저 보안 정책
// 도메인/포트 서버로 요청했을 때 허용해주는 옵션
app.use(cors({ origin: "http://localhost:3000" }));

// 객체 형태로 응답을 전달 받을 수 있게 해줌(객체 값 전달 요청을 허용해준다)
// express.urlencoded
app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("시퀄라이즈 잘열림");
  })
  .catch((err) => {
    console.log(err);
  });

// 서버가 잘 돌아가는지 테스트 해보기!
// 이렇게 send로 보내주면 브라우저에 띄울 수 있다
// app.get("/", (req, res) => {
//   res.send("test");
// });

app.post("/qna/write", (req, res) => {
  console.log(req.body);
  const { title, text, user } = req.body;
  Qna.create({ title, text, user, count: 0 });
  res.send(req.body);
});

// app.get("/qna", (req, res) => {
//   // qna 테이블에 create 함수로 편하게 추가!
//   Qna.create({ title: "테스트 타이틀", user: "테스트 유저", count: 0 });
//   res.send();
// });

app.post("/qna", async (req, res) => {
  const { index, count } = req.body;
  const contents = await Qna.findAll({
    // 몇개씩 자를지
    offset: index * count,
    // 몇개를 가져올지
    limit: 10,
  });
  // db에서 가져온 글 보내주기
  res.send(contents);
});

app.post("/qna/delete", (req, res) => {
  const { num } = req.body;
  Qna.destroy({ where: { id: num } });
});

app.listen(8000, () => {
  console.log("서버 열림!");
});
