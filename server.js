var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wbdb');

app.use(express.static(__dirname + '/public/routing'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function(username, password, done)
    {
        UserModel.findOne({username: username, password: password}, function(err, user)
        {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user);
        })
    }));

passport.serializeUser(function(user, done)
{
    done(null, user);
});

passport.deserializeUser(function(user, done)
{
    UserModel.findById(user._id, function(err, user)
    {
        done(err, user);
    });
});

var UserModel = require("./user/user.model.js")();
var UserService = require("./user/user.service.js")(app, UserModel, passport);




var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
