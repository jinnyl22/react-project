const userService = require("../service");

module.exports.userJoin = async (req, res) => {
  const { userName, userId, userPw, userPhone, userEmail } = req.body;
  await userService.userJoin(userName, userId, userPw, userPhone, userEmail).then((e) => {
    res.send("회원 가입 성공");
  });
};
