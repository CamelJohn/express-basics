import { NextFunction, Request, RequestHandler, Response } from "express";

const TOKEN = 'tell_me_lies_tell_me_sweet_little_lies';

export const AuthMiddleware: RequestHandler =
	(req: Request, res: Response, next: NextFunction) => {
		if (!req.headers.authorization) {
			throw new Error('Unauthorized - no authorization header sent.');
		}

		const [, token] = req.headers.authorization.split(' ');

		if (token.trim().length === 0) {
			throw new Error('Unauthorized - no bearer token sent.');
		}

		if (token !== TOKEN) {
			throw new Error('Unauthorized - bearer token is invalid.');
		}

		next();
	}