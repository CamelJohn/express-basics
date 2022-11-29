import { NextFunction, Request, RequestHandler, Response } from "express";

export const HealthMiddleware: RequestHandler =
	(req: Request, res: Response, next: NextFunction) => {
		res.status(200).send('OK');
	}