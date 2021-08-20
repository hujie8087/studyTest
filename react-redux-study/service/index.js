const express = require("express");
const app = express();
const users = require("./routes/users");

app.use("/api/users", users);

app.listen(3030, (req, res) => {
  console.log("服务器运行");
});
