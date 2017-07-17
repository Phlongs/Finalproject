const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  firstName: String,
  lastName: String,
  education: String,
  phone: String,
  experience: String,
  email: String,
  about: String,
  resume: String,
  port1: String,
  port1Name: String,
  port1Pic: String,
  port2: String,
  port2Name: String,
  port2Pic: String,
  port3: String,
  port3Name: String,
  port3Pic: String,
  profilePic: String,
  backgroundPic: String
});


/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);
