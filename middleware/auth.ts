import { NextFunction, Request, RequestHandler, Response } from "express";
import { Unauthorized } from '../http';

const TOKEN = 'tell_me_lies_tell_me_sweet_little_lies';

export const AuthMiddleware: RequestHandler =
	(req: Request, res: Response, next: NextFunction) => {
		if (!req.headers.authorization) {
			throw new Unauthorized();
		}

		const [, token] = req.headers.authorization.split(' ');

		if (token.trim().length === 0) {
			throw new Unauthorized()
		}

		if (token !== TOKEN) {
			throw new Unauthorized();
		}

		next();
	}