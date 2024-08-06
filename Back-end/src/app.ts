import { config } from 'dotenv';
import { Server } from './presentation/Server';
import { errorHandler } from './middlewares';

// Variables
config();
const PORT = process.env.PORT;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;
const server = new Server({
  port: PORT,
  publicDir: PUBLIC_FOLDER,
  errorHandler: errorHandler,
});

server.start();
