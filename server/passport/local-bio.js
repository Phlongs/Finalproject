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
  const userData = {
    userName: userName.trim(),
    password: password.trim(),
    firstname: req.body.firstname.trim(),
    lastname: req.body.lastname.trim(),
    education: req.body.education.trim()
  };

      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.firstname
      };

  return done(null, token, data);

});