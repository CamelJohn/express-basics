import { NextFunction, Request, Response } from 'express';
import { TaskService } from './service';
import { CreateTaskDto, EntityUrlParam, TaskResponse, UpdateTaskDto, ListTaskResponse } from './types';

export class TaskController {
	static GetOne(req: Request<EntityUrlParam>, res: Response<TaskResponse>, next: NextFunction) {
		try {
			const task = TaskService.GetOne(req.params.id);
			if (task) {
				res.status(200).send({ task });
			}
		} catch (error) {
			next(error);
		}
	}

	static List(req: Request, res: Response<ListTaskResponse>, next: NextFunction) {
		try {
			const tasks = TaskService.List();
			res.status(200).send({ ...tasks })
		} catch (error) {
			next(error);
		}
	}

	static Update(req: Request<EntityUrlParam, any, UpdateTaskDto>, res: Response<TaskResponse>, next: NextFunction) {
		try {
			const task = TaskService.Update(req.params.id, req.body.task); 

			res.status(201).send({ task })
		} catch (error) {
			next(error);
		}
	}

	static Delete(req: Request<EntityUrlParam>, res: Response, next: NextFunction) {
		try {
			const result = TaskService.Delete(req.params.id);

			res.status(204).send({ message: result });
		} catch (error) {
			next(error);
		}
	}

	static Create(req: Request<any, any, CreateTaskDto>, res: Response<TaskResponse>, next: NextFunction) {
		try {
			const task = TaskService.Create(req.body.task);

			res.status(201).send({
				task,
			});
		} catch (error) {
			next(error);
		}
	}
}
