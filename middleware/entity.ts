import { NextFunction, Request, Response } from "express";
import { Unprocessable } from "../http";
import { EntityUrlParam } from "../tasks/types";

export const ParamsIdMiddleware =
	(req: Request<EntityUrlParam>, res: Response, next: NextFunction) => {
		if (!req.params.id) {
			throw new Unprocessable();
		}
		
		const id = Number(req.params.id);

		if (isNaN(id)) {
			throw new Unprocessable();
		}

		if (id < 0) {
			throw new Unprocessable();
		}

		next();
	}