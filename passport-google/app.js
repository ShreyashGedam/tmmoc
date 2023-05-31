const { hashSync } = require("bcrypt");
const express = require("express");
const app = express();
var cors = require("cors");
const UserModel = require("./config/database");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/passport-google",
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.get("/login", (req, res) => {
  res.render("login");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/login",
  })
);

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Protected");
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
  console.log(req.session);
  console.log(req.user);
});

app.listen(8080, (req, res) => {
  console.log("Listening to port 8080");
});
