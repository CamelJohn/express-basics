import { Router } from 'express';
import { ParamsIdMiddleware } from '../../middleware';
import { TaskController } from './controller';

export const TaskRouter: Router = Router();

TaskRouter.get('', TaskController.List);
TaskRouter.post('', TaskController.Create);

TaskRouter.route('/:id')
	.get(ParamsIdMiddleware, TaskController.GetOne)
	.put(ParamsIdMiddleware, TaskController.Update)
	.delete(ParamsIdMiddleware, TaskController.Delete);
