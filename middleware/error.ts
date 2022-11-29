import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseErrorClass } from '../http';

export const ErrorMiddleware: ErrorRequestHandler =
	(error: BaseErrorClass, req: Request, res: Response, next: NextFunction) => {
		res.status(error.code ?? 500).send({ message: error.message });
	};
