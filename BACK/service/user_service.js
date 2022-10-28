const { User, Admin } = require("../model");
const randomNum = require("./random_num");
const { mailer } = require("../modules/common");
const config = require("../config/config");

// 아래 구문을 서비스랑 컨트롤러 분리해보기
module.exports.userJoin = (userName, userId, userPw, userPhone, userEmail, req, res) => {
  // 빈 값으로 넘어오면 DB에 저장을 할 수 없게
  // userName !== "" && userId !== "" && userPw !== "" && userPhone !== "" && userEmail !== ""
  //   ?
  // create -> 컬럼 생성 쿼리문
  User.create({ userName, userId, userPw, userPhone, userEmail })
    // 여기 e에는 생성된 컬럼과 데이터가 담긴다
    // 담기면 성공!
    //  여기서 담기면 미들웨어로 응답이 전달된다!
    .then((e) => {
      res.send("DB에 저장됨");
    })
    .catch((error) => {
      console.log(error);
      res.send("저장 실패");
    });
  // : res.send("모든 칸을 입력해주세요");
};

// 회원가입이 되면 DB에 컬럼 생성
// module.exports.userJoin = async (userName, userId, userPw, userPhone, userEmail) => {
//   try {
//     console.log(userJoin);
//     return await User.create({ userName, userId, userPw, userPhone, userEmail });
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

// 아이디 중복검사를 위해 DB에서 동일한 아이디가 있는지 조회
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

// 이메일 중복검사, 같은 이메일이 없으면 인증번호 이메일 전송
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
      res.send({ msg: "이메일이 발송되었습니다. 인증번호를 확인해주세요", authNum: ranNum });
    } else {
      res.send({ msg: "이미 가입된 이메일입니다. 다른 이메일을 입력해주세요", authNum: "" });
    }
  });
};

// 유저 로그인
module.exports.userLogin = (id, pw, req, res) => {
  User.findOne({
    where: { userId: id, userPw: pw },
  })
    .then((e) => {
      console.log(e);
      e !== null ? res.send({ id: id, isLogin: true, admin: e.admin }) : res.send({ id: "", isLogin: false, admin: 0 });
    })
    .catch((error) => {
      console.log(error);
    });
};

// 관리자 로그인
// module.exports.adminLogin = (id, pw, req, res) => {
//   Admin.findOne({
//     where: { adminId: id, adminPw: pw },
//   })
//     .then((e) => {
//       console.log(e);
//       e !== null ? res.send({ id: id, isAdmin: true, adminStatus: true }) : res.send({ id: "", isAdmin: false, adminStatus: false });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
