var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('./app_api/models/db');


var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X=Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  next();
});

var indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

var usersRouter = require('./app_server/routes/users');
app.use('/users', usersRouter);

const apiRouter =  require('./app_api/routes/user');
app.use('/api', apiRouter);

var serviceRouter = require('./app_server/routes/service_request');
app.use('/service_request', serviceRouter);

const serviceRequestAPIRouter =  require('./app_api/routes/service_request');
app.use('/api', serviceRequestAPIRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));

var employeeRouter = require('./app_server/routes/employee');
app.use('/employee', employeeRouter);

const employeeRequestAPIRouter =  require('./app_api/routes/employee');
app.use('/api', employeeRequestAPIRouter);

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
