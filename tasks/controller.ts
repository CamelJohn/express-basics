import { NextFunction, Request, Response } from 'express';
import { HttpResponseStatus } from '../http/response';
import { TaskService } from './service';
import { CreateTaskDto, EntityUrlParam, TaskResponse, UpdateTaskDto, ListTaskResponse } from './types';

export class TaskController {
	static async GetOne(req: Request<EntityUrlParam>, res: Response<TaskResponse>, next: NextFunction) {
		try {
			const task = await TaskService.GetOne(req.params.id);
			res.status(HttpResponseStatus.OK).send({ task });
		} catch (error) {
			next(error);
		}
	}

	static async List(req: Request, res: Response<ListTaskResponse>, next: NextFunction) {
		try {
			const tasks = await TaskService.List();
			res.status(HttpResponseStatus.OK).send({ ...tasks });
		} catch (error) {
			next(error);
		}
	}

	static async Update(req: Request<EntityUrlParam, any, UpdateTaskDto>, res: Response<{ message: string }>, next: NextFunction) {
		try {
			const message = await TaskService.Update(req.params.id, req.body.task);

			res.status(HttpResponseStatus.UPDATED).send({ message });
		} catch (error) {
			next(error);
		}
	}

	static async Delete(req: Request<EntityUrlParam>, res: Response, next: NextFunction) {
		try {
			const result = await TaskService.Delete(req.params.id);

			res.status(HttpResponseStatus.UPDATED).send({ message: result });
		} catch (error) {
			next(error);
		}
	}

	static async Create(req: Request<any, any, CreateTaskDto>, res: Response<TaskResponse>, next: NextFunction) {
		try {
			const task = await TaskService.Create(req.body.task);

			res.status(HttpResponseStatus.CREATED).send({
				task,
			});
		} catch (error) {
			next(error);
		}
	}
}

