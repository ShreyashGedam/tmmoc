const CityModel = require("../models/city.model");
const userModel = require("../models/user.model");

const addUser = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.send("Pass the city id");
  }

  const id = await CityModel.findById({ _id });
  if (!id) {
    return res.send("city id is invalid");
  }

  const user = await userModel.findOne({ username: req.body.username });
  if (user) {
    return res.send("username already exist");
  }

  const newUser = new userModel({
    username: req.body.username,
    cityId: _id,
  });
  await newUser.save();

  return res.send({
    success: "true",
    message: "user created successfully",
    user: newUser,
  });
};

const getUser = async (req, res) => {
  const users = await userModel.find().populate("cityId");
  return res.send(users);
};

module.exports = { addUser, getUser };
