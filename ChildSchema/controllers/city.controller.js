const CityModel = require("../models/city.model");

const addCity = async (req, res) => {
  const city = await CityModel.findOne({ city: req.body.city });
  if (city) {
    return res.send("city already exist");
  }

  const newCity = new CityModel(req.body);
  await newCity.save();

  return res.send({
    success: "true",
    message: "city created successfully",
    city: newCity,
  });
};

const getCity = async (req, res) => {
  const citys = await CityModel.find();
  return res.send(citys);
};

module.exports = { addCity, getCity };
