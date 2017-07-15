const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const multiparty = require('multiparty');
const fs = require('fs');
var cloudinary = require('cloudinary');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const router = new express.Router();

let userName = '';
var counter = 0;

cloudinary.config({
  cloud_name: 'hbr7tpsgi',
  api_key: '648238336776575',
  api_secret: 'a2Jx3iHYcAsu8QQY5InNx9EX1CQ'
});
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';


  if (!payload || typeof payload.userName !== 'string') {
    isFormValid = false;
    errors.userName = 'Please provide a correct userName address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */


function validateLoginForm(payload) {

  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.userName !== 'string' || payload.userName.trim().length === 0) {
    isFormValid = false;
    errors.userName = 'Please provide your userName address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}



router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication userName error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            userName: 'This userName is already taken.'
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  userName = req.body.userName;

  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {

    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});

router.post('/bio', (req,res,next)=>{
  const token = req.headers.authorization.split(' ')[1];
    
  jwt.verify(token,config.jwtSecret,(err,decoded) => {
    if(err){ res.status(401).end();}
    const userId = decoded.sub;
    User.findById(userId,(userErr,user) => {
        if(userErr || !user){
          res.status(401).end();
        }

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.education = req.body.education;
    user.phone = req.body.phone;
    user.experience = req.body.experience;
    user.port1 = req.body.port1;
    user.port1Name = req.body.port1Name;
    user.port2 = req.body.port2;
    user.port2Name = req.body.port2Name;
    user.port3 = req.body.port3;
    user.port3Name = req.body.port3Name;
    user.email = req.body.email;
    user.about = req.body.about;

    user.save(user, function(err){
      if(err) {
        console.log('ERROR!');
      } else {
        console.log('saved');
      }
    });
  });
});
});

router.post('/uploads', (req, res) => {

  let form = new multiparty.Form();
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token,config.jwtSecret,(err,decoded) => {
    if(err){ res.status(401).end();}
    const userId = decoded.sub;
  form.parse(req, (err, fields, files) => {

    let {path: tempPath, originalFilename} = files.imageFile[0];
    let picPath = files.imageFile[0].path;
    let fileName = files.imageFile[0].originalFilename;
    let fileType = files.imageFile[0].fieldName;

    let newPath = "./uploads/" + originalFilename;
    let splitName = fileName.toLowerCase().split('.');

    if(splitName[1] === 'jpg' || splitName[1] === 'png' || splitName[1] ==='tiff' || splitName[1]==='jpeg' || splitName[1]==='gif') {

      cloudinary.uploader.upload(picPath, function(result) {

        User.findById(userId,(userErr,user) => {
            if(userErr || !user){
                 res.status(401).end();
            }
          counter++;
          console.log('1st pass: ',counter)
          if(counter===1){
          user.profilePic = result.url;
          console.log('after profilePic: ', counter)
        } else if(counter===2){
          console.log('2nd pass: ', counter)
          user.backgroundPic = result.url;
          counter=0;
          console.log('after backgroundPic: ', counter)
        }
          user.save(user, function(err){
        if(err) {
        console.log('ERROR!');
        } else {
        console.log('saved');
        }
        });
        });
      });
    } 

  })
});
});

module.exports = router;
