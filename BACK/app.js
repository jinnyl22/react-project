const { express } = require("./modules/common");

const app = express();

app.listen(80, () => {
  console.log("http://localhost:80 on");
});
