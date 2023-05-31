const { Router } = require("express");
const {
  register,
  login,
  protected,
  Logout,
} = require("../controllers/user.controller");
const passport = require("passport");
require("../middleware/passport");

const userRouter = Router();
userRouter.use(passport.initialize());

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  protected
);

userRouter.post(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  Logout
);

module.exports = userRouter;
