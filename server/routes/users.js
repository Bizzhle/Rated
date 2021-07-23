const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h2>Hi  We  on now ok !!!!!</h2>");
  console.log("Yeah it ran");
});

router.post("/signup", authController.signUp);

router.post("/login", authController.login);

router.get("/logout", authController.login);

module.exports = router;
