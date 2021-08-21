const express = require("express");
const app = express();
const users = require("./routes/users");
const bodyParser = require('body-parser') //解析前端传递的参数

app.use(bodyParser.json())
app.use("/api/users", users);

app.listen(3030, (req, res) => {
  console.log("服务器运行");
});
