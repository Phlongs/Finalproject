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
    var arr = [];
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    
    function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    var rand = o.pop();
    return rand;
    };

    for(var i = 1; i<4; i++){
      arr[i] = shuffle(numbers);
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
    user.resume = req.body.resume;
    user.port1Pic = "../../img/portfolio/thumbnails/" + arr[1] + ".jpg";
    user.port2Pic = "../../img/portfolio/thumbnails/" + arr[2] + ".jpg";
    user.port3Pic = "../../img/portfolio/thumbnails/" + arr[3] + ".jpg";

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
    let fileType = Object.getOwnPropertyNames(files);
    
     if(fileType[0] === 'profilePic') {
     let {path: tempPath, originalFilename} = files.profilePic[0];
     let profilePicPath = files.profilePic[0].path;
     let splitName = originalFilename.toLowerCase().split('.');

    if(splitName[1] === 'jpg' || splitName[1] === 'png' || splitName[1] ==='tiff' || splitName[1]==='jpeg' || splitName[1]==='gif') {
      cloudinary.uploader.upload(profilePicPath, function(result) {

         User.findById(userId,(userErr,user) => {
             if(userErr || !user){
                  res.status(401).end();
             }

           user.profilePic = result.url;

           user.save(user, function(err){
           if(err) {
           console.log('ERROR!');
           } else {
           console.log('saved');
           }
           });
        });
      });
    };
    } 

    else if(fileType[0] === 'backgroundPic') {
     let {path: tempPath, originalFilename} = files.backgroundPic[0];
     let backgroundPicPath = files.backgroundPic[0].path;
     let splitName = originalFilename.toLowerCase().split('.');

    if(splitName[1] === 'jpg' || splitName[1] === 'png' || splitName[1] ==='tiff' || splitName[1]==='jpeg' || splitName[1]==='gif') {
      cloudinary.uploader.upload(backgroundPicPath, function(result) {

         User.findById(userId,(userErr,user) => {
             if(userErr || !user){
                  res.status(401).end();
             }

           user.backgroundPic = result.url;

           user.save(user, function(err){
           if(err) {
           console.log('ERROR!');
           } else {
           console.log('saved');
           }
           });
        });
      });
    };
    }
      
});
});
});


module.exports = router;
