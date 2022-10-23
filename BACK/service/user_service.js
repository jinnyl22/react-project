const { User } = require("../model");

module.exports.user_service = (userName, userId, userPw, userPhone, userEmail, req, res) => {
  // create -> 컬럼 생성 쿼리문
  User.create({ userName, userId, userPw, userPhone, userEmail })
    // 여기 e에는 생성된 컬럼과 데이터가 담긴다
    // 담기면 성공!
    .then((e) => {
      res.send("회원 가입 성공");
    })
    .catch((error) => {
      console.log(error);
      res.send("실패");
    });
};

module.exports.userIdCheck = (userId, req, res) => {
  User.findOne({
    where: { userId },
  })
    .then((e) => {
      e == null ? res.send({ msg: "중복확인 완료", idstatus: true }) : res.send({ msg: "동일한 아이디가 존재합니다", idstatus: false });
    })
    .catch((error) => {
      console.log(error);
    });
};
