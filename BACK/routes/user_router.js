const { express } = require("../modules/common");
const router = express.Router();

const userController = require("../controllers/user_controller");

router.post("/join", userController.userJoin);

module.exports = router;
