import { config } from 'dotenv';
import { Server } from './presentation/Server';
import { errorHandler } from './middlewares';

// Variables
config();
const PORT = process.env.PORT;
const server = new Server({
  port: PORT,
  publicDir: 'public',
  errorHandler: errorHandler,
});

server.start();
