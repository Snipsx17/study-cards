import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { HttpError } from './lib/HttpError';

//DB connection
require('./lib/connectDB');

var app = express();

// register the requests
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  let statusCode = 500;
  if (err instanceof HttpError) statusCode = err.statusCode;
  res.status(statusCode).end();
});

module.exports = app;
