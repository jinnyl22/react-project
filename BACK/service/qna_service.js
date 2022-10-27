const { QnA } = require("../model");

// 문의사항 게시판에 글 데이터가 들어감
module.exports.qnaWrite = (title, content, req, res) => {
  console.log(title, content);
  QnA.create({ title, content })
    .then((e) => {
      res.send("글이 등록 되었습니다!");
    })
    .catch((error) => {
      console.log(error);
      res.send("글 등록 안됨!");
    });
};
// 문의사항 게시판 목록 가져옴
module.exports.qnaList = (idx, req, res) => {
  QnA.findAll({
    // 최근에 등록된 데이터의 순서대로 내림차순
    order: [["id", "DESC"]],
    // 한번에 데이터 몇개를 가져올지
    limit: 10,
    // 처음 몇개의 항목을 반환받지 않고 넘길지
    // 여기서 인덱스
    offset: idx * 10,
  }).then((e) => {
    // e에 모든 모델의 필드들이 배열로 반환된다
    console.log(e);
    res.send(e);
  });
};
