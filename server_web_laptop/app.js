var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var passport = require('./middleware/passport');
var session = require('express-session');
var api = require('./routes/api');
var db = require('./models'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Max-Age", "86400");
//   next();
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 
app.use(passport.initialize());
app.use(passport.session()); 

api(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.sequelize.sync().then(function(){
  app.listen(5000, () => {
    console.log("Server is running at localhost:5000");
  })
})


module.exports = app;
