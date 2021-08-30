var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}
var db = require('../models');

var config = require('../config/config.json');

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;

var userStrategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
    db.user.findOne({
        where : {
            id : jwt_payload.id,
            email : jwt_payload.email,
            role : 0
        }
    }).then(function(user){
        if(user){
            return next(null, user);
        }else{
            return next(null, false);
        }
    });
});

var adminStrategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
    db.user.findOne({
        where : {
            id : jwt_payload.id,
            email : jwt_payload.email,
            role : 1
        }
    }).then(function(user){
        if(user){
            return next(null, user);
        }else{
            return next(null, false);
        }
    });
});

passport.use('jwt-user', userStrategy);
passport.use('jwt-admin', adminStrategy);
module.exports = passport;
