import { json, RequestHandler, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export const BasicMiddleware: RequestHandler[] = [
	json(),
	urlencoded({ extended: true }),
	cors(),
	helmet(),
	morgan('dev')
];
