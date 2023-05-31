const { default: mongoose, model } = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "citys",
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
