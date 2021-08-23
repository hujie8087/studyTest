const express = require("express");
const router = express.Router();
const sqlFn = require("../mysql/index");

router.post("/", (req, res) => {
  //
  var sql = "insert into users values (null,?,?,?)"; //mysql语句
  var arr = [req.body.username, req.body.password, req.body.email];
  sqlFn(sql, arr, function (data) {
    if (data.affectedRows) {
      res.send({
        success: true,
        code: 200,
        message: "注册成功",
      });
    } else {
      res.send({
        success: false,
        code: 400,
        message: "注册失败",
      });
    }
  });
});

router.get("/", (req, res) => {
  var sql = "select * from users";
  sqlFn(sql, null, function (data) {
    res.send(data);
  });
});

router.get("/:username", (req, res) => {
  var sql = "select * from users where username=?";
  var arr = [req.params.username];
  sqlFn(sql, arr, function (data) {
    if (data && data.length > 0) {
      res.send({
        success: false,
        code: 200,
        message: "用户名已存在",
      });
    } else {
      res.send({
        success: true,
        code: 200,
        message: "用户名可注册",
      });
    }
  });
});

module.exports = router;
