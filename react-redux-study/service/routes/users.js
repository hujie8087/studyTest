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

module.exports = router;
