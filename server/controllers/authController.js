const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// const passport = require("passport");

exports.signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      password: hashpassword,
    });
    req.session.user = newUser;
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({
        status: "fail",
        message: "user not found, kindly enter correct username and password",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      req.session.user = user;
      res.status(200).send({
        user: username,
      });
    }

    if (!isCorrect) {
      return res.status(400).send("incorrect username or password");
    }
  } catch (error) {
    res.status(500).send("Something went wrong, Try again later");
  }
};

exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err, "didnt work");
    }
    res.status(201).json({ status: "logged out" });
  });
};
