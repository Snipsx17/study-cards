import express, { NextFunction, Request, Response } from 'express';
import { loggerMiddleware, cookieParserMiddleware } from '../plugins';
import { apiV1 } from '../routes';
import { DBClient } from '../db/DBClient';
import cors from 'cors';
import { ServerOptions } from '../types';

export class Server {
  private app = express();
  private readonly port: string | undefined;
  private readonly publicDir: string;
  private readonly errorHandler: (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;

  constructor(serverOptions: ServerOptions) {
    const { port, publicDir = 'public', errorHandler } = serverOptions;
    this.port = port;
    this.publicDir = publicDir;
    this.errorHandler = errorHandler;
  }

  start() {
    // public directory
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(express.static(this.publicDir));
    this.app.use(express.json());
    this.app.use(loggerMiddleware('dev'));
    this.app.use(cookieParserMiddleware());

    // db connection
    const dbClient = new DBClient();
    const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017';
    dbClient.connect(DB_URI);

    // routes
    this.app.use('/api/v1', apiV1);

    this.app.listen(this.port, () => {
      console.log(`Listening in the port: ${this.port}!`);
    });

    // catch 404 and forward to error handler
    this.app.use(function (req, res, next) {
      const error = new Error('not found!');
      next(error);
    });
    // error handler
    this.app.use(this.errorHandler);
  }
}
