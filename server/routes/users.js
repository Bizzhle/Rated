const express = require("express");

const router = express.Router();
const authController = require("../controllers/authController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h2>Hi  We  on now ok !!!!!</h2>");
  console.log("Yeah it ran");
});

router.post("/signup", authController.signUp);

router.post("/login", authController.login);

module.exports = router;
