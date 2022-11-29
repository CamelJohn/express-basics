import { NextFunction, Request, Response } from "express";
import { EntityUrlParam } from "../tasks/types";

export const ParamsIdMiddleware =
	(req: Request<EntityUrlParam>, res: Response, next: NextFunction) => {
		if (!req.params.id) {
			throw new Error('missing id parameter');
		}
		
		const id = Number(req.params.id);

		if (isNaN(id)) {
			throw new Error('id must be a number');
		}

		if (id < 0) {
			throw new Error('id must be a positive number');
		}

		next();
	}