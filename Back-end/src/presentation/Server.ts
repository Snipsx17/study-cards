import express, { Express, NextFunction, Request, Response } from 'express';
import { loggerMiddleware, cookieParserMiddleware } from '../plugins';
import { apiV1 } from '../v1';

interface ServerOptions {
  port: string | undefined;
  publicDir: string | undefined;
  errorHandler: (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
}
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
    this.app.use(express.static(this.publicDir));
    this.app.use(loggerMiddleware('dev'));
    this.app.use(cookieParserMiddleware());

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
