// const { User } = require("../model");
const { express } = require("../modules/common");
const router = express.Router();

// const userController = require("../controllers/user_controller");
// router.post("/join", userController.userJoin);
const { userJoin, userIdCheck, userEmailCheck, userLogin } = require("../service/user_service");

router.post("/join", (req, res) => {
  const { userName, userId, userPw, userPhone, userEmail } = req.body;

  userJoin(userName, userId, userPw, userPhone, userEmail, req, res);
});

router.post("/join/check/id", (req, res) => {
  console.log(req.body);
  userIdCheck(req.body.id, req, res);
});

router.post("/join/emailsend", (req, res) => {
  console.log(req.body);
  userEmailCheck(req.body.email, req, res);
});

// router.post("/mypage", (req, res) => {});

router.post("/login", async (req, res) => {
  console.log(req.body);
  let { id, pw } = req.body;
  console.log(id, pw);
  userLogin(id, pw, req, res);
});

// router.post("/login/islogin", async (req, res)=>{

// })

module.exports = router;
