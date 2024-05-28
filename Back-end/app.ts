import express, { Express, Request, Response } from 'express';
import { loggerMiddleware, cookieParserMiddleware } from './plugins';

import { config } from 'dotenv';
import { errorHandler } from './middlewares';
// Variables
config();
const PORT = process.env.PORT;

// Config
const app = express();
app.use(express.json());
app.use(loggerMiddleware('dev'));
app.use(cookieParserMiddleware());

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/error', async (req, res, next) => {
  // res.statusCode = 200;
  try {
    const data = await fetch('ljsdkljfs').catch(() => {
      throw new Error('not found!!!!');
    });
  } catch (error) {
    res.statusCode = 404;
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

// error handler
app.use(errorHandler);
