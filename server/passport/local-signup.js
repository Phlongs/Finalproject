const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'userName',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, userName, password, done) => {
  console.log("username/local-signup",userName);
  const userData = {
    userName: userName.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
