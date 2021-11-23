var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
const db = require('./database/models');

var app = express();

db.sequelize.sync({alter:true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( {secret: "deporter",
                 resave: false,
                 saveUninitialized: true }));

//app.use(function(req, res, next) {
//  res.locals.usuarioLog = {usuario: 'cristiano'}
//  next ();
//});
app.use(function(req, res, next) {
	if (req.session.usuarioLog != undefined) {
		res.locals.usuarioLog = req.session.usuarioLog
     }
return next();
});

//cookies 
app.use(function(req, res, next) {
 if( req.cookies.user !== undefined && req.session.usuarioLog === undefined) {
      req.session.usuarioLog = req.cookies.user;
 }
next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);

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

module.exports = app;
