const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "user must have a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "user must have a password"],
  },
});

module.exports = mongoose.model("User", userSchema);
