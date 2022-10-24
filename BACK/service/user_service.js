const { User } = require("../model");
const randomNum = require("./random_num");
const { mailer } = require("../modules/common");
const config = require("../config/config");

module.exports.user_service = (userName, userId, userPw, userPhone, userEmail, req, res) => {
  // 빈 값으로 넘어오면 DB에 저장을 할 수 없게
  userName !== "" && userId !== "" && userPw !== "" && userPhone !== "" && userEmail !== ""
    ? // userName&&userId&&userPw&&userPhone&&userEmail == "" ?
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
        })
    : res.send("모든 칸을 입력해주세요");
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

module.exports.userEmailCheck = (userEmail, req, res) => {
  User.findOne({
    where: { userEmail },
  }).then((e) => {
    if (e == null) {
      const ranNum = randomNum();
      console.log(userEmail);
      let sendmail = {
        // toEmail: email.email,
        toEmail: userEmail,
        subject: `안녕하세요 FRANK 인증번호입니다.`,
        text: `${userEmail}님 반갑습니다.<br>이메일 인증번호는 <h1>${ranNum}</h1> 입니다.<br>인증번호 칸에 입력 후 인증 확인 부탁드립니다.`,
      };

      let transpoter = mailer.createTransport({
        service: "Naver",
        port: 587, // 25 587
        host: "smtp.naver.com",
        auth: {
          user: config.mailer.email,
          pass: config.mailer.pw,
        },
      });

      let mailoption = {
        from: config.mailer.email,
        to: sendmail.toEmail,
        subject: sendmail.subject,
        html: sendmail.text,
      };

      transpoter.sendMail(mailoption, (err, info) => {
        if (err) {
          console.log(err);
          res.send("메일 error");
        } else console.log("메일 보내짐", info.response);
      });
      res.send({ msg: "이메일이 발송되었습니다. 인증번호를 확인해주세요", emailStatus: true });
    } else {
      res.send({ msg: "이미 가입된 이메일입니다. 다른 이메일을 입력해주세요", emailStatus: false });
    }
  });
};
