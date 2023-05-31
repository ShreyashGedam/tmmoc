const { default: mongoose, model } = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  token: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
