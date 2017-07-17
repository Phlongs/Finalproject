const express = require('express');
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const router = new express.Router();
const fs = require("fs");


router.get('/biopage', (req, res) => {
    console.log('biopage')
    const token = req.headers.authorization.split(' ')[1];
    
    jwt.verify(token,config.jwtSecret,(err,decoded) => {
        if(err){ res.status(401).end();}
        const userId = decoded.sub;
        User.findById(userId,(userErr,user) => {
            if(userErr || !user){
                 res.status(401).end();
            }

            user.password = null;
            // user.profilePic = '../../../' + user.profilePic;
            // fs.readFile(user.profilePic, function(err, content){
            //     user.profilePic = content;
            //     res.status(200).json(user);
            // })
    
            res.status(200).json(user);

        })
    });

});
router.get("/userProfile/:username",(req,res)=>{

	var username = req.params.username;

	User.findOne({userName:username},(err,data)=>{
		res.render("index",{user:data})
		
	});

});

module.exports = router;