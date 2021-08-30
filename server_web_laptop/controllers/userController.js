const db = require('../models');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

var config = require('../config/config.json');
var jwt = require('jsonwebtoken')

const singUp = (req, res) => {
    db.user.findOne({
        where : {
            email : req.body.email
        }
    }).then(function(user){
        if(user){
            res.json({
                success : false,
                message : 'Email is exist'
            });
        }else{
            db.user.create({
                name : req.body.name,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, salt),
                address : req.body.address,
                phone : req.body.phone
            }).then(function(account){
                if(account){
                    res.json({
                        success : true,
                        message : 'Create account successfully',
                        data : {
                            id : account.id,
                            name : account.name,
                            email : account.email
                        }
                    })
                }else{
                    res.json({
                        success : false,
                        message : 'Create account failure'
                    });
                }
            })
        }
    })
}
const signIn = (req, res) => {
    db.user.findOne({
        where : {
            email : req.body.email
        }
    }).then(function(user){
        console.log(user);
        if(!user){
            res.json({
                success : false,
                message : 'Email is not exist'
            })
        }
        else {
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(!passwordIsValid){
                res.json({
                    success : false,
                    message : 'Password is not valid'
                })
            }
            var accountIsLocked = (user.status == 1);
            if(accountIsLocked){
                res.json({
                    success : false,
                    message : 'Account is locked'
                })
            }
            var payload = {
                id : user.id,
                email : user.email
            }
            var token = jwt.sign(payload, config.secret, {
                expiresIn : 86400
            });
    
            res.json({
                success : true,
                token : token,
                data : user
            })
        }
       
    })
}

var userController = {}
userController.signIn = signIn;
userController.signUp = singUp;
module.exports = userController;