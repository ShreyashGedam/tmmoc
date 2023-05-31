const { Router } = require("express");
const { addUser, getUser } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/adduser/:id", addUser);

userRouter.get("/getusers", getUser);

module.exports = userRouter;
