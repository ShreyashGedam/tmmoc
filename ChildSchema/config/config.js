const { default: mongoose } = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/user-city")

module.exports = connection