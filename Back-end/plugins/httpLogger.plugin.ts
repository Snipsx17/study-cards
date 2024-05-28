import logger from 'morgan';

export const loggerMiddleware = (mode: string) => logger(mode);
