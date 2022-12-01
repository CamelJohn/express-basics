import { NextFunction, Request, RequestHandler, Response } from "express";
import { Unauthorized } from '../http';
import { JWTService } from '../services';
import { EntityUrlParam } from "../tasks";

export const AuthMiddleware: RequestHandler =
	async (req: Request<EntityUrlParam | any>, res: Response, next: NextFunction) => {
		try {
			if (!req.headers.authorization) {
				throw new Unauthorized();
			}
	
			const [, token] = req.headers.authorization.split(' ');
	
			if (token.trim().length === 0) {
				throw new Unauthorized()
			}
	
			// if (!await JWTService.Verify(token)) {
			// 	throw new Unauthorized();
			// }
	
			next();
		} catch (error) {
			next(error);
		}
	}