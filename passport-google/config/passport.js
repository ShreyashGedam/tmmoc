const { compareSync } = require("bcrypt");
const passport = require("passport");
const UserModel = require("./database");
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "103723961995-qif0o0d5grjcoknhg9nt4rihvj90gbhp.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8080/auth/callback",
      passReqToCallback: true,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken, refreshToken, profile);
      const user = await UserModel.findOne({ googleId: profile.id });
      console.log(user);
      try {
        if (!user) {
          let newUser = new UserModel({
            googleId: profile.id,
            name: profile.displayName,
          });

          await newUser.save();
          return cb(null.newUser);
        } else {
          return cb(null, user);
        }
      } catch (error) {
        return cb(err, null);
      }
    }
  )
);

//Persists user data inside session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//Fetches session details using session id
passport.deserializeUser(function (id, done) {
  UserModel.findById(id, function (err, user) {
    done(err, user);
  });
});
