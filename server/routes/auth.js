const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const multiparty = require('multiparty');
const fs = require('fs');
const aws = require('aws-sdk');
var cloudinary = require('cloudinary');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const router = new express.Router();
const S3_BUCKET = 'biobuild';

aws.config.loadFromPath('config/keys.json');

let userName = '';
var counter = 0;

cloudinary.config({
  cloud_name: 'ho2ypcaei',
  api_key: '197927375455319',
  api_secret: 'UH7WxxEA4lzKJ0hFAvJLqKGB3Xg'
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
  console.log("payload/signup",payload);

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
       function uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = (err) => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
              console.log('file uploaded to s3')
          }
          else{
            console.log('Could not upload file.', err);
          }
        }
      };

      xhr.send(file);
      }


function validateLoginForm(payload) {
    console.log("payload/login",payload);
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
  console.log("username/login",userName)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    console.log('userData after auth: ',userData)
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
  User.findOne({ userName: userName }, (err, user) => {
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

router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  console.log('fileName: ', fileName)
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    console.log(data)
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

router.post('/uploads', (req, res) => {

  let form = new multiparty.Form();
  const s3 = new aws.S3();

  form.parse(req, (err, fields, files) => {
    console.log(files.imageFile[0])
    let {path: tempPath, originalFilename} = files.imageFile[0];
    let picPath = files.imageFile[0].path;
    let fileName = files.imageFile[0].originalFilename;
    let fileType = files.imageFile[0].fieldName;
    // const s3Params = {
    //   Bucket: S3_BUCKET,
    //   Key: fileName,
    //   Expires: 60,
    //   ContentType: fileType,
    //   ACL: 'public-read'
    // }
    let newPath = "./uploads/" + originalFilename;
    let splitName = fileName.toLowerCase().split('.');

    console.log(fileName)



    if(splitName[1] === 'jpg' || splitName[1] === 'png' || splitName[1] ==='tiff' || splitName[1]==='jpeg' || splitName[1]==='gif') {

      cloudinary.uploader.upload(picPath, function(result) {
        console.log('result: ',result.url)
        User.findOne({ userName: userName }, (err, user) => {
          counter++;
          console.log(counter)
          if(counter===1){
          user.profilePic = result.url;

        } else if(counter===2){
          user.backgroundPic = result.url;
          counter===0;
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
  //   else {


  //     s3.getSignedUrl('putObject', s3Params, (err, data) => {
  //     if(err){
  //     console.log(err);
  //     return res.end();
  //   }
  //     const returnData = {
  //     signedRequest: data,
  //     url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
  //   };

  //     uploadFile(path, returnData.signedRequest, returnData.url);
  //     console.log('data from s3: ',data)
  //   //   fs.readFile(tempPath, (err,data) => {
  //   //     fs.writeFile(newPath, data, (err) => {
  //   //       fs.unlink(tempPath, () => {
  //   //         res.send("File uploaded to: " + newPath);
  //   //       });
  //   //     });
  //   //   });

  //   //   User.findOne({ userName: userName }, (err, user) => {
  //   //   user.resume = newPath;

  //   //   user.save(user, function(err){
  //   //     if(err) {
  //   //       console.log('ERROR!');
  //   //     } else {
  //   //       console.log('saved');
  //   //     }
  //   //   });
  //   // });
  // })
  // }
  })
});

module.exports = router;
