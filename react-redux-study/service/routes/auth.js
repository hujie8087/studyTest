const express = require("express");
const router = express.Router();
const sqlFn = require("../mysql/index");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const sql = "select * from users where username=? and password=?";
  const arr = [username, password];
  sqlFn(sql, arr, function (data) {
    if (data.length > 0) {
      const token = jwt.sign(
        {
          id: data[0].id,
          username: data[0].username,
        },
        config.secret
      );
      res.send({
        status: 200,
        success: true,
        message: "登录成功！",
        token: token,
      });
    } else {
      res.send({
        status: 400,
        success: false,
        message: "用户名密码错误！",
      });
    }
  });
});

module.exports = router;
