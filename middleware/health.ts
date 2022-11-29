import { NextFunction, Request, RequestHandler, Response } from "express";
import { HttpResponseStatus } from "../http";

export const HealthMiddleware: RequestHandler =
	(req: Request, res: Response, next: NextFunction) => {
		res.status(HttpResponseStatus.OK).send('OK');
	}