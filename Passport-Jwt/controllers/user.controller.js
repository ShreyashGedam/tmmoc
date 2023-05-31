const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await userModel.findOne({ username: req.body.username });
  if (user) {
    return res.status(409).send({
      success: false,
      message: "username already exist",
    });
  }

  const newUser = new userModel({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    iat: 0,
    exp: 0,
  });

  await newUser
    .save()
    .then((user) => {
      res.status(201).send({
        success: true,
        message: "user created",
        user: {
          id: user._id,
          username: user.name,
        },
      });
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: err,
      });
    });
};

const login = async (req, res) => {
  const user = await userModel.findOne({ username: req.body.username });
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "user not found",
    });
  }

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "incorrect password",
    });
  }

  const payload = {
    id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, "secret", { expiresIn: "1d" });

  return res.status(200).send({
    success: true,
    message: "login success",
    user: {
      id: user._id,
      username: user.username,
      token: "Bearer " + token,
    },
  });
};

const protected = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "procted route accessed",
    user: {
      id: req.user.id,
      username: req.user.username,
    },
  });
};

const Logout = async (req, res) => {
  const resme = await userModel.findByIdAndUpdate(
    { _id: req.user.id },
    { exp: req.user.iat, iat: req.user.iat },
    { new: true }
  );

  console.log(resme);

  return res.status(200).send({
    success: true,
    message: "Logged out success",
    user: {
      id: req.user.id,
      username: req.user.username,
    },
  });
};

module.exports = { register, login, protected, Logout };
