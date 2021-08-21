const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send({
    success:true,
    code:200,
    message:'注册成功'
  });
});

module.exports = router;
