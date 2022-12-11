import { json, RequestHandler, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { AuthMiddleware } from './auth';

export const BasicMiddleware: RequestHandler[] = [
	json(),
	urlencoded({ extended: true }),
	cors(),
	AuthMiddleware,
	// helmet(),
	morgan('dev')
];
