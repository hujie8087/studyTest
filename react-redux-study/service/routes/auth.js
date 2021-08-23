const express = require("express");
const router = express.Router();
const sqlFn = require("../mysql/index");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const sql = "select * from users where username=? and password=?";
  const arr = [username, password];
  sqlFn(sql, arr, function (data) {
    if (data.length > 0) {
      res.send({
        code: 200,
        success: true,
        message: "登录成功！",
      });
    } else {
      res.send({
        code: 400,
        success: false,
        message: "用户名密码错误！",
      });
    }
  });
});

module.exports = router;
