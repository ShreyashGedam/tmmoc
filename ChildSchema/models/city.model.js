const { default: mongoose, model } = require("mongoose");

const citySchema = mongoose.Schema({
  city: { type: String, required: true },
});

const CityModel = mongoose.model("citys", citySchema);

module.exports = CityModel;
