const { QnA } = require("../model");

module.exports.qnaWrite = (title, content, req, res) => {
  console.log(title, content);
  QnA.create({ title, content })
    .then((e) => {
      res.send("글이 등록 되었습니다");
    })
    .catch((error) => {
      console.log(error);
      res.send("글쓰기 실패");
    });
};
