import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const ErrorMiddleware: ErrorRequestHandler =
	(error: Error, req: Request, res: Response, next: NextFunction) => {
		res.status(500).send({ message: error.message });
	};
